"use client";

import { useState } from "react";
import { X, FileCode, BarChart3, GitBranch, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const evidence = [
  {
    title: "CI/CD Pipeline",
    description: "GitHub Actions workflow for automated testing and deployment",
    type: "diagram",
    icon: GitBranch,
    color: "#00ff88",
    content: `name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run tests
        run: pytest --cov=app --cov-report=xml
      
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: azure/webapps-deploy@v2`,
  },
  {
    title: "API Specification",
    description: "FastAPI auto-generated OpenAPI documentation",
    type: "screenshot",
    icon: FileCode,
    color: "#8b5cf6",
    content: `# ShopSmart API Endpoints

POST /api/v1/search
  → Search products across retailers
  → Body: { query, filters }
  → Response: ProductResult[]

GET /api/v1/products/{id}
  → Get product details
  → Response: Product

GET /api/v1/prices/{product_id}
  → Get price history
  → Response: PriceHistory[]

POST /api/v1/alerts
  → Create price alert
  → Body: { product_id, target_price }`,
  },
  {
    title: "Model Evaluation",
    description: "SHAP values and performance metrics for dropout prediction",
    type: "report",
    icon: BarChart3,
    color: "#f59e0b",
    content: `Model: Voting Ensemble (LightGBM + RF + XGB)

Performance Metrics:
  Accuracy:  84.2%
  Precision: 82.7%
  Recall:    85.1%
  F1-Score:  83.9%
  AUC-ROC:   0.91

Top SHAP Features:
  1. Assessment scores (0.23)
  2. Click engagement (0.19)
  3. Previous attempts (0.15)
  4. Days since last activity (0.12)

Fairness Audit:
  Gender parity: ±2.3% difference
  Age groups: ±4.1% difference`,
  },
  {
    title: "Database Schema",
    description: "SQLAlchemy models and relationships",
    type: "diagram",
    icon: Database,
    color: "#3b82f6",
    content: `class Budget(Base):
    __tablename__ = "budgets"
    
    id = Column(UUID, primary_key=True)
    name = Column(String(100), nullable=False)
    total_amount = Column(Numeric(12, 2))
    fiscal_year = Column(Integer)
    created_at = Column(DateTime, default=utcnow)
    
    # Relationships
    allocations = relationship("Allocation", back_populates="budget")
    transactions = relationship("Transaction", back_populates="budget")

class Transaction(Base):
    __tablename__ = "transactions"
    
    id = Column(UUID, primary_key=True)
    budget_id = Column(UUID, ForeignKey("budgets.id"))
    amount = Column(Numeric(12, 2), nullable=False)
    category = Column(String(50))
    description = Column(Text)`,
  },
];

export function SkillEvidenceGallery() {
  const [selectedEvidence, setSelectedEvidence] = useState<number | null>(null);

  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-heading font-bold">Evidence Gallery</h2>
        <p className="text-slate-400 mt-2">Code samples and artifacts from real projects</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {evidence.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedEvidence(index)}
              className="group relative text-left rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-5 hover:border-white/[0.12] transition-all"
            >
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}08 0%, transparent 60%)` }}
              />
              <div className="relative space-y-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">{item.type}</p>
                  <h3 className="font-heading font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 mt-1 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Evidence Modal */}
      <AnimatePresence>
        {selectedEvidence !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedEvidence(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-surface-1 border border-white/[0.08] rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = evidence[selectedEvidence].icon;
                    return (
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${evidence[selectedEvidence].color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: evidence[selectedEvidence].color }} />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="font-heading font-semibold">{evidence[selectedEvidence].title}</h3>
                    <p className="text-xs text-slate-500">{evidence[selectedEvidence].description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvidence(null)}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 overflow-y-auto max-h-[60vh]">
                <pre className="font-mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap bg-white/[0.02] rounded-xl p-5 border border-white/[0.04]">
                  {evidence[selectedEvidence].content}
                </pre>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
