"use client";

import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { ComplexityToggle } from "@/components/ComplexityToggle";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projectData = {
  title: "Government Spending Tracker",
  problem: {
    recruiter: [
      "Manage budget proposals and approvals across government ministries",
      "Provide transparency in government spending",
      "Enable role-based access control aligned with real workflows",
    ],
    engineer: [
      "Build a production-grade system for managing budget proposals and approvals",
      "Implement secure authentication and authorization (JWT, bcrypt, role-based access)",
      "Design scalable database schema with proper migrations",
      "Achieve high test coverage and implement CI/CD pipelines",
      "Set up monitoring and observability from day one",
    ],
  },
  outcome: {
    mvp: "Full-stack budget management system deployed on Azure",
    deployed: "Azure App Service with PostgreSQL database",
    features: [
      "JWT-based authentication with role and ministry-based access control",
      "Budget proposal creation and approval workflows",
      "PostgreSQL database with Alembic migrations",
      "React frontend with FastAPI backend",
      "93% test coverage with comprehensive test suite",
    ],
    owned: [
      "Backend architecture and API design",
      "Authentication and authorization system",
      "Database schema and migrations",
      "Testing strategy and CI/CD pipeline",
      "Monitoring and observability setup",
    ],
  },
  architecture: {
    components: [
      { name: "React Frontend", description: "User interface for budget management" },
      { name: "FastAPI Backend", description: "RESTful API with JWT authentication" },
      { name: "PostgreSQL Database", description: "Persistent data storage on Azure" },
      { name: "GitHub Actions CI/CD", description: "Automated testing and deployment" },
      { name: "Prometheus & Grafana", description: "Metrics and monitoring dashboards" },
      { name: "Azure App Service", description: "Containerized deployment platform" },
    ],
  },
  decisions: [
    {
      title: "PostgreSQL over SQLite",
      why: "Production-grade database with concurrent access, ACID guarantees, and Azure integration",
      tradeoffs: "More complex setup, requires managed service, higher cost",
      alternatives: ["SQLite", "MySQL", "MongoDB"],
      failureModes: "Connection pool exhaustion under high load, need proper connection management",
    },
    {
      title: "JWT over session-based auth",
      why: "Stateless authentication, better for API-first architecture, easier scaling",
      tradeoffs: "Token revocation requires blacklist, larger token size",
      alternatives: ["Session cookies", "OAuth2", "API keys"],
      failureModes: "Compromised tokens valid until expiry, need secure storage",
    },
    {
      title: "Alembic for migrations",
      why: "SQLAlchemy integration, version control for schema, rollback capability",
      tradeoffs: "Learning curve, need to write migration scripts",
      alternatives: ["Manual SQL scripts", "Django migrations", "Flyway"],
      failureModes: "Failed migrations can leave DB in inconsistent state, need careful testing",
    },
  ],
  deepDive: {
    api: {
      recruiter: [
        "POST /auth/login - User authentication",
        "GET /proposals - List budget proposals",
        "POST /proposals - Create new proposal",
        "PUT /proposals/{id}/approve - Approve proposal",
      ],
      engineer: [
        "POST /api/v1/auth/login - Returns JWT token, sets refresh token cookie",
        "GET /api/v1/proposals?ministry={id}&status={status} - Filtered list with pagination",
        "POST /api/v1/proposals - Creates proposal, validates budget constraints",
        "PUT /api/v1/proposals/{id}/approve - Role-based approval, updates status, triggers notifications",
        "Authentication: JWT in Authorization header, refresh token rotation",
        "Error contract: RFC 7807 Problem Details format with error codes",
      ],
    },
    dataModel: {
      recruiter: [
        "Users table with roles and ministry associations",
        "Proposals table with status, amounts, and approval chain",
        "Audit log for tracking changes",
      ],
      engineer: [
        "users: id, email, hashed_password, role, ministry_id, created_at, INDEX(email)",
        "proposals: id, title, amount, ministry_id, status, created_by, approved_by, created_at, INDEX(ministry_id, status)",
        "audit_logs: id, entity_type, entity_id, action, user_id, timestamp, changes JSONB",
        "Migrations: Alembic with versioning, rollback support",
        "Indexing: Composite indexes on (ministry_id, status) for fast filtering",
      ],
    },
    coreLogic: {
      recruiter: [
        "Role-based access: Users, Moderators, Administrators with different permissions",
        "Approval workflow: Proposals move through statuses (draft → pending → approved/rejected)",
        "Budget validation: Ensures proposals don't exceed ministry budgets",
      ],
      engineer: [
        "Authorization: Decorator-based permission checks, role hierarchy",
        "Workflow engine: State machine for proposal status transitions",
        "Budget validation:",
        "  - Check available budget = total_budget - sum(approved_proposals)",
        "  - Atomic transactions to prevent race conditions",
        "  - Lock rows during approval to prevent double-spending",
        "Edge cases:",
        "  - Concurrent approvals: Database-level locking",
        "  - Budget overflows: Validation before status change",
        "  - Token expiry: Refresh token rotation with secure storage",
      ],
    },
    testing: {
      recruiter: [
        "93% test coverage across the codebase",
        "Unit tests for authentication and business logic",
        "Integration tests for API endpoints",
        "End-to-end tests for approval workflows",
      ],
      engineer: [
        "Test coverage: 93% overall, 100% for auth, 95% for business logic",
        "Unit tests: pytest for services, models, utilities",
        "Integration tests: FastAPI TestClient, test database with fixtures",
        "Test types:",
        "  - Unit: Auth functions, budget calculations, permission checks",
        "  - Integration: API endpoints, database operations, JWT validation",
        "  - E2E: Full approval workflow, concurrent access scenarios",
        "Tools: pytest, pytest-cov, pytest-asyncio, factory-boy for fixtures",
        "CI: Automated test runs on every PR, coverage reporting",
      ],
    },
    deployment: {
      recruiter: [
        "Deployed on Azure App Service with containerization",
        "CI/CD pipeline with GitHub Actions",
        "Health checks and monitoring dashboards",
      ],
      engineer: [
        "CI/CD: GitHub Actions workflow",
        "  - Lint: ruff, mypy, eslint",
        "  - Test: pytest with coverage threshold (90%)",
        "  - Security: bandit, npm audit",
        "  - Build: Docker multi-stage build",
        "  - Deploy: Azure CLI to App Service with blue-green deployment",
        "Hosting: Azure App Service (Linux, Python 3.11, Node.js 18)",
        "Database: Azure PostgreSQL (General Purpose, 2 vCores)",
        "Health checks: /health endpoint with DB, Redis connectivity",
        "Monitoring:",
        "  - Prometheus metrics: request rate, latency, error rate",
        "  - Grafana dashboards: system health, business metrics",
        "  - Application Insights: distributed tracing, log aggregation",
        "  - Alerts: PagerDuty integration for critical errors",
      ],
    },
  },
  demo: {
    description: "Budget proposal interface showing creation, approval workflow, and ministry-based filtering",
    videoUrl: null,
    liveUrl: null,
  },
  whatsNext: {
    now: [
      { title: "Add budget forecasting", intent: "Predict future spending trends", complexity: "M" },
      { title: "Export reports", intent: "PDF/Excel export for proposals", complexity: "S" },
    ],
    next: [
      { title: "Real-time notifications", intent: "WebSocket updates for approvals", complexity: "M" },
      { title: "Advanced analytics", intent: "Spending trends and visualizations", complexity: "L" },
    ],
    later: [
      { title: "Multi-tenant support", intent: "Support multiple government organizations", complexity: "L" },
    ],
  },
  tags: ["FastAPI", "PostgreSQL", "React", "Azure", "CI/CD", "Testing"],
  links: {
    github: "https://github.com/saadayomide/government-spending",
    demo: null,
    readme: null,
  },
};

export default function GovernmentSpendingPage() {
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
