"use client";

import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { ComplexityToggle } from "@/components/ComplexityToggle";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projectData = {
  title: "ShopSmart",
  problem: {
    recruiter: [
      "Help users find the cheapest grocery prices across multiple supermarkets",
      "Save time and money for budget-conscious shoppers",
      "Handle real-world data inconsistencies and missing items",
    ],
    engineer: [
      "Build a scalable price comparison system with real-time data collection",
      "Handle inconsistent product naming, missing data, and rate-limited scraping",
      "Create a matching engine that accurately identifies the same product across stores",
      "Deploy on Azure with reliable error handling and monitoring",
    ],
  },
  outcome: {
    mvp: "Full-stack backend system deployed on Azure App Service",
    deployed: "Azure App Service with PostgreSQL database",
    features: [
      "Price comparison per product and per basket",
      "Web scrapers for multiple supermarkets",
      "Semantic matching and normalization engine",
      "RESTful API with FastAPI",
    ],
    owned: [
      "Backend architecture and API design",
      "Scraping pipeline and data normalization",
      "Matching algorithm and scoring logic",
      "Deployment and monitoring setup",
    ],
  },
  architecture: {
    components: [
      { name: "Web Scrapers", description: "Collect product data from supermarket websites" },
      { name: "Normalization Layer", description: "Clean and standardize product names and prices" },
      { name: "Matching Engine", description: "Semantic matching to identify same products across stores" },
      { name: "FastAPI Backend", description: "RESTful API for price queries and comparisons" },
      { name: "PostgreSQL Database", description: "Store normalized product and price data" },
      { name: "Azure App Service", description: "Hosting and deployment platform" },
    ],
  },
  decisions: [
    {
      title: "FastAPI over Django",
      why: "Better performance for API-focused application, async support, automatic OpenAPI docs",
      tradeoffs: "Less built-in admin panel, smaller ecosystem than Django",
      alternatives: ["Django REST Framework", "Flask"],
      failureModes: "High request volume could overwhelm without proper async handling",
    },
    {
      title: "Semantic matching over exact string matching",
      why: "Product names vary across stores (e.g., 'Coca Cola 2L' vs 'Coca-Cola 2 Liters')",
      tradeoffs: "More complex, requires tuning, potential false positives",
      alternatives: ["Exact matching", "Fuzzy string matching", "ML-based classification"],
      failureModes: "Mismatched products could lead to incorrect price comparisons",
    },
    {
      title: "Azure App Service over VMs",
      why: "Managed service, easier scaling, built-in CI/CD integration",
      tradeoffs: "Less control, potential vendor lock-in, higher cost at scale",
      alternatives: ["Azure VMs", "AWS EC2", "Docker containers on Kubernetes"],
      failureModes: "Service limits could throttle during high traffic",
    },
  ],
  deepDive: {
    api: {
      recruiter: [
        "GET /products/search - Search for products across stores",
        "GET /products/compare - Compare prices for a basket",
        "POST /products/refresh - Trigger data refresh",
      ],
      engineer: [
        "GET /api/v1/products/search?query={query} - Semantic search with pagination",
        "GET /api/v1/products/compare?ids={ids} - Batch price comparison with caching",
        "POST /api/v1/scrapers/trigger - Async scraper job queue",
        "Authentication: JWT tokens for admin endpoints",
        "Error contract: Standardized JSON error responses with error codes",
      ],
    },
    dataModel: {
      recruiter: [
        "Products table with normalized names and metadata",
        "Prices table linking products to stores with timestamps",
        "Stores table with configuration and scraping settings",
      ],
      engineer: [
        "products: id, normalized_name, brand, category, description, created_at",
        "prices: id, product_id, store_id, price, currency, available, scraped_at, INDEX(product_id, store_id)",
        "stores: id, name, base_url, scraper_config, rate_limit, last_scraped",
        "Migrations: Alembic for schema versioning",
        "Indexing: Composite index on (product_id, store_id) for fast lookups",
      ],
    },
    coreLogic: {
      recruiter: [
        "Normalization: Remove special chars, lowercase, expand abbreviations",
        "Matching: Weighted scoring based on name similarity, brand, and category",
        "Edge cases: Handle missing prices, duplicate products, discontinued items",
      ],
      engineer: [
        "Normalization pipeline: regex cleaning → tokenization → abbreviation expansion → brand extraction",
        "Matching algorithm: TF-IDF cosine similarity + Levenshtein distance + brand/category matching",
        "Scoring: weighted_sum = 0.5*name_similarity + 0.3*brand_match + 0.2*category_match",
        "Edge cases:",
        "  - Missing prices: Return 'N/A' with last known price timestamp",
        "  - Duplicate products: Deduplicate by highest confidence match",
        "  - Rate limiting: Exponential backoff with jitter",
        "  - Scraper failures: Retry queue with dead letter handling",
      ],
    },
    testing: {
      recruiter: [
        "Unit tests for matching and normalization logic",
        "Integration tests for API endpoints",
        "Test coverage for core business logic",
      ],
      engineer: [
        "Unit tests: pytest for matching engine, normalization functions (90%+ coverage)",
        "Integration tests: FastAPI TestClient for API endpoints, mock scrapers",
        "Test types:",
        "  - Unit: Matching algorithm, price calculation, normalization",
        "  - Integration: API endpoints, database queries, scraper orchestration",
        "  - E2E: Full flow from scraping to API response",
        "Tools: pytest, pytest-cov, httpx for async testing",
        "Coverage: ~85% overall, 95% for core matching logic",
      ],
    },
    deployment: {
      recruiter: [
        "Deployed on Azure App Service",
        "CI/CD pipeline for automated deployments",
        "Health checks and basic monitoring",
      ],
      engineer: [
        "CI/CD: GitHub Actions workflow",
        "  - Lint: ruff, mypy",
        "  - Test: pytest with coverage reporting",
        "  - Build: Docker container",
        "  - Deploy: Azure CLI to App Service",
        "Hosting: Azure App Service (Linux, Python 3.11)",
        "Database: Azure PostgreSQL (Basic tier)",
        "Health checks: /health endpoint with DB connectivity check",
        "Monitoring:",
        "  - Application Insights for request metrics",
        "  - Custom logging for scraper jobs",
        "  - Alerts on error rate > 5%",
      ],
    },
  },
  demo: {
    description: "Interactive price comparison interface showing real-time data from multiple stores",
    videoUrl: null,
    liveUrl: null,
  },
  whatsNext: {
    now: [
      { title: "Improve matching accuracy", intent: "Reduce false positives in product matching", complexity: "M" },
      { title: "Add more stores", intent: "Expand coverage to 5+ supermarkets", complexity: "S" },
    ],
    next: [
      { title: "User accounts and favorites", intent: "Allow users to save favorite products", complexity: "M" },
      { title: "Price alerts", intent: "Notify users when prices drop", complexity: "L" },
    ],
    later: [
      { title: "Mobile app", intent: "Native iOS/Android apps", complexity: "L" },
      { title: "ML-based price prediction", intent: "Predict future price trends", complexity: "L" },
    ],
  },
  tags: ["FastAPI", "Azure", "Web Scraping", "SQLAlchemy", "PostgreSQL"],
  links: {
    github: "https://github.com/saadayomide/shopsmart",
    demo: undefined,
    readme: undefined,
  },
};

export default function ShopSmartPage() {
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
