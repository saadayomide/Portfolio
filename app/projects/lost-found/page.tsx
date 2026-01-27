"use client";

import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { ComplexityToggle } from "@/components/ComplexityToggle";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projectData = {
  title: "Lost & Found",
  problem: {
    recruiter: [
      "Help people find and recover lost items",
      "Provide a secure platform for item management",
      "Enable efficient search and filtering of lost items",
    ],
    engineer: [
      "Build a desktop application with clean architecture",
      "Implement role-based access control (Users, Moderators, Administrators)",
      "Create advanced search with flexible matching strategies",
      "Develop secure messaging and claim verification workflow",
      "Ensure comprehensive test coverage with unit, integration, and UI tests",
    ],
  },
  outcome: {
    mvp: "Full-featured desktop application with MVC architecture",
    deployed: "Local deployment, cross-platform Java application",
    features: [
      "Role-based access control system",
      "Advanced search and filtering",
      "Secure messaging and claim verification",
      "Item management with categories and status tracking",
      "Comprehensive test suite (JUnit, Mockito, TestFX)",
    ],
    owned: [
      "Application architecture and MVC design",
      "Role-based access control implementation",
      "Search and filtering algorithms",
      "Database design and repository pattern",
      "Testing strategy and test implementation",
    ],
  },
  architecture: {
    components: [
      { name: "JavaFX UI", description: "Desktop user interface with modern design" },
      { name: "MVC Architecture", description: "Separation of presentation, business logic, and data access" },
      { name: "Service Layer", description: "Business logic and workflow orchestration" },
      { name: "Repository Pattern", description: "Abstracted database access layer" },
      { name: "SQLite Database", description: "Local data persistence" },
      { name: "JDBC", description: "Database connectivity and queries" },
    ],
  },
  decisions: [
    {
      title: "JavaFX over Swing",
      why: "Modern UI framework, better styling with CSS, Scene Builder support, better performance",
      tradeoffs: "Larger application size, requires Java 11+, less mature than Swing",
      alternatives: ["Swing", "Electron", "Qt with Java bindings"],
      failureModes: "Platform-specific rendering issues, JavaFX version compatibility",
    },
    {
      title: "MVC architecture",
      why: "Clear separation of concerns, easier testing, maintainable code structure",
      tradeoffs: "More boilerplate, can be overkill for simple apps",
      alternatives: ["MVP", "MVVM", "Simple layered architecture"],
      failureModes: "Tight coupling if not properly separated, can lead to fat controllers",
    },
    {
      title: "Repository pattern",
      why: "Abstracts database access, enables easy testing with mocks, supports future DB changes",
      tradeoffs: "Additional abstraction layer, more interfaces to maintain",
      alternatives: ["Direct DAO pattern", "Active Record", "ORM like Hibernate"],
      failureModes: "Leaky abstraction if repository exposes DB-specific details",
    },
  ],
  deepDive: {
    api: {
      recruiter: [
        "User authentication and authorization",
        "Item CRUD operations",
        "Search and filter functionality",
        "Messaging and claim management",
      ],
      engineer: [
        "Authentication: Login service validates credentials, creates session",
        "ItemService.createItem(): Validates input, checks permissions, persists via repository",
        "ItemService.searchItems(): Applies filters, keyword matching, category filtering",
        "MessageService.sendMessage(): Validates sender/receiver, stores message, triggers notifications",
        "ClaimService.verifyClaim(): Checks item ownership, updates status, logs verification",
        "Error handling: Custom exceptions (UnauthorizedException, ItemNotFoundException)",
      ],
    },
    dataModel: {
      recruiter: [
        "Users table with roles and authentication",
        "Items table with categories, status, and metadata",
        "Messages table for communication",
        "Claims table for item recovery tracking",
      ],
      engineer: [
        "users: id, username, password_hash, role, email, created_at, INDEX(username)",
        "items: id, title, description, category, location, status, owner_id, found_date, created_at, INDEX(category, status)",
        "messages: id, sender_id, receiver_id, item_id, content, timestamp, read, INDEX(receiver_id, read)",
        "claims: id, item_id, claimant_id, verification_status, submitted_at, verified_at",
        "Database: SQLite with foreign key constraints, indexes on frequently queried columns",
        "Migrations: Manual schema updates (could use Flyway in production)",
      ],
    },
    coreLogic: {
      recruiter: [
        "Role-based permissions: Users can create items, Moderators can verify claims, Admins have full access",
        "Search algorithm: Keyword matching across title, description, and location",
        "Claim verification: Moderators review and approve/reject claims",
      ],
      engineer: [
        "Permission system:",
        "  - Decorator pattern for permission checks",
        "  - Role enum with permission sets",
        "  - Method-level authorization in services",
        "Search algorithm:",
        "  - Tokenization: Split query into keywords",
        "  - Matching: Case-insensitive contains matching",
        "  - Scoring: Relevance based on keyword frequency and field weights",
        "  - Filtering: Category, status, date range filters",
        "Claim workflow:",
        "  - State machine: pending → verified/rejected",
        "  - Verification: Moderator reviews claim, checks item details",
        "  - Notification: Email/UI notification to claimant on verification",
      ],
    },
    testing: {
      recruiter: [
        "Comprehensive test suite with high coverage",
        "Unit tests for business logic",
        "Integration tests for database operations",
        "UI tests for user interactions",
      ],
      engineer: [
        "Test coverage: ~90% overall, 95% for business logic",
        "Unit tests:",
        "  - JUnit for service methods, business logic",
        "  - Mockito for mocking dependencies",
        "  - Test data builders for complex objects",
        "Integration tests:",
        "  - In-memory SQLite database for testing",
        "  - Repository tests with real database operations",
        "  - Transaction rollback after each test",
        "UI tests:",
        "  - TestFX for JavaFX UI testing",
        "  - Tests for user interactions, form validation",
        "  - Screenshot comparison for visual regression",
      ],
    },
    deployment: {
      recruiter: [
        "Cross-platform Java application",
        "Packaged as executable JAR or native installer",
        "SQLite database included with application",
      ],
      engineer: [
        "Build: Maven/Gradle for dependency management and packaging",
        "Packaging:",
        "  - JAR with embedded SQLite",
        "  - jpackage for native installers (Windows, macOS, Linux)",
        "  - JavaFX runtime bundled with application",
        "Distribution:",
        "  - GitHub Releases for downloadable installers",
        "  - Versioning: Semantic versioning (v1.0.0)",
        "Configuration:",
        "  - Application properties file for database path, logging",
        "  - Logging: Log4j2 with file and console appenders",
        "Updates: Manual updates via new installer downloads",
      ],
    },
  },
  demo: {
    description: "Desktop application showing item management, search functionality, and role-based access",
    videoUrl: null,
    liveUrl: null,
  },
  whatsNext: {
    now: [
      { title: "Add image uploads", intent: "Allow users to upload photos of lost items", complexity: "M" },
      { title: "Improve search", intent: "Add fuzzy matching and better relevance", complexity: "M" },
    ],
    next: [
      { title: "Web version", intent: "Port to web application with React", complexity: "L" },
      { title: "Mobile app", intent: "Native mobile app for item reporting", complexity: "L" },
    ],
    later: [
      { title: "ML-based matching", intent: "Use ML to match lost items with found items", complexity: "L" },
    ],
  },
  tags: ["Java", "JavaFX", "SQLite", "JUnit", "MVC"],
  links: {
    github: "https://github.com/saadayomide/lost-found",
    demo: null,
    readme: null,
  },
};

export default function LostFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container-custom py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <Link
          href="/projects"
          className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors focus-ring rounded-lg px-2 py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <ComplexityToggle />
      </motion.div>
      <ProjectCaseStudy project={projectData} />
    </motion.div>
  );
}
