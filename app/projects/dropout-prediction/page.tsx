"use client";

import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { ComplexityToggle } from "@/components/ComplexityToggle";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projectData = {
  title: "Student Dropout Prediction",
  problem: {
    recruiter: [
      "Predict which students are at risk of dropping out",
      "Enable early intervention to improve retention rates",
      "Provide explainable predictions that educators can trust",
    ],
    engineer: [
      "Build an end-to-end ML pipeline processing millions of records from OULAD dataset",
      "Engineer high-signal features from behavioral, academic, and demographic data",
      "Develop robust models with proper validation and calibration",
      "Ensure interpretability and fairness across demographic subgroups",
      "Handle class imbalance and temporal effects in student data",
    ],
  },
  outcome: {
    mvp: "Production-ready ML pipeline with ensemble models and interpretability",
    deployed: "Local deployment with API endpoint for predictions",
    features: [
      "Feature engineering pipeline with 50+ engineered features",
      "Ensemble model (Logistic Regression + LightGBM + CatBoost)",
      "SHAP-based interpretability and feature importance",
      "Fairness analysis across age, gender, region, and socioeconomic status",
      "Probability calibration for reliable confidence estimates",
    ],
    owned: [
      "End-to-end ML pipeline design",
      "Feature engineering and selection",
      "Model development and ensemble design",
      "Interpretability and fairness analysis",
      "Evaluation and validation framework",
    ],
  },
  architecture: {
    components: [
      { name: "Data Pipeline", description: "ETL from OULAD dataset with preprocessing" },
      { name: "Feature Engineering", description: "Temporal, graph-based, and sequence features" },
      { name: "Model Training", description: "Multiple base models with stacking ensemble" },
      { name: "Evaluation Framework", description: "Cross-validation, calibration, fairness audits" },
      { name: "Interpretability", description: "SHAP values and feature importance analysis" },
      { name: "Prediction API", description: "FastAPI endpoint for real-time predictions" },
    ],
  },
  decisions: [
    {
      title: "Ensemble over single model",
      why: "Combines strengths of different algorithms, improves robustness and generalization",
      tradeoffs: "More complex, slower inference, harder to interpret",
      alternatives: ["Single LightGBM", "Neural network", "XGBoost only"],
      failureModes: "Overfitting if base models too similar, need careful validation",
    },
    {
      title: "SHAP for interpretability",
      why: "Model-agnostic, provides both global and local explanations, widely accepted",
      tradeoffs: "Computationally expensive, can be slow for large datasets",
      alternatives: ["LIME", "Feature importance", "Partial dependence plots"],
      failureModes: "SHAP values can be misleading if features are highly correlated",
    },
    {
      title: "Isotonic calibration",
      why: "Non-parametric, works well for probability calibration, preserves ordering",
      tradeoffs: "Requires calibration set, can overfit on small datasets",
      alternatives: ["Platt scaling", "Temperature scaling", "No calibration"],
      failureModes: "Poor calibration if calibration set not representative",
    },
  ],
  deepDive: {
    api: {
      recruiter: [
        "POST /predict - Get dropout risk prediction for a student",
        "GET /explain - Get SHAP explanation for a prediction",
        "GET /fairness - View fairness metrics across subgroups",
      ],
      engineer: [
        "POST /api/v1/predict - Input: student features JSON, Output: probability, risk level, confidence",
        "GET /api/v1/explain/{prediction_id} - Returns SHAP values, feature contributions, top risk factors",
        "GET /api/v1/fairness?metric={metric} - Returns demographic parity, equalized odds, calibration by subgroup",
        "Caching: Prediction results cached with feature hash as key",
        "Error handling: Validation errors for missing features, model loading errors",
      ],
    },
    dataModel: {
      recruiter: [
        "Student records with academic and behavioral features",
        "Assessment and engagement data",
        "Demographic and socioeconomic information",
      ],
      engineer: [
        "students: id, demographics (age, gender, region, imd_band), enrollment_date",
        "assessments: student_id, assessment_type, score, submission_date, weighted_score",
        "vle_interactions: student_id, date, activity_type, sum_click",
        "Feature store:",
        "  - Temporal: assessment_trend, engagement_velocity, days_since_last_activity",
        "  - Graph: centrality_measures (if using student similarity graph)",
        "  - Sequence: BiLSTM embeddings from interaction sequences",
        "Preprocessing: Missing value imputation, outlier handling, feature scaling",
      ],
    },
    coreLogic: {
      recruiter: [
        "Feature engineering: Assessment trends, engagement metrics, interaction terms",
        "Model training: Multiple algorithms with cross-validation",
        "Ensemble: Stacked meta-model combining base model predictions",
        "Interpretability: SHAP values show feature contributions",
      ],
      engineer: [
        "Feature engineering pipeline:",
        "  - Assessment trends: rolling_mean(score, window=3), score_velocity",
        "  - Engagement: sum_clicks_per_week, avg_days_between_sessions",
        "  - Interaction terms: age * imd_band, gender * region",
        "  - Graph features: PageRank centrality from student-course graph",
        "  - Sequence embeddings: BiLSTM on interaction sequences → 128-dim vector",
        "Model training:",
        "  - Base models: Logistic Regression, LightGBM, CatBoost",
        "  - Hyperparameter tuning: Optuna with 5-fold CV",
        "  - Ensemble: Stacking with Logistic Regression meta-model",
        "  - Out-of-fold predictions for meta-model training",
        "Calibration: Isotonic regression on validation set",
      ],
    },
    testing: {
      recruiter: [
        "Model evaluation with cross-validation",
        "Fairness testing across demographic groups",
        "Performance metrics: F1 score, AUC-ROC, calibration",
      ],
      engineer: [
        "Model evaluation:",
        "  - 5-fold stratified cross-validation",
        "  - Bootstrap validation (1000 iterations) for confidence intervals",
        "  - Temporal split: train on 2013-2014, test on 2014",
        "Metrics: F1 (primary), AUC-ROC, precision, recall, Brier score",
        "Fairness testing:",
        "  - Demographic parity: P(y=1 | group) across groups",
        "  - Equalized odds: TPR, FPR by subgroup",
        "  - Calibration: Expected calibration error by subgroup",
        "  - Statistical tests: Chi-square for independence, permutation tests",
        "Tools: scikit-learn, SHAP, fairlearn, bootstrap validation",
      ],
    },
    deployment: {
      recruiter: [
        "Model served via FastAPI endpoint",
        "Feature preprocessing pipeline integrated",
        "Monitoring for prediction quality and fairness",
      ],
      engineer: [
        "Model serving: FastAPI with model loading from pickle/ONNX",
        "Feature pipeline: Preprocessing steps serialized and versioned",
        "Model versioning: MLflow for experiment tracking and model registry",
        "Monitoring:",
        "  - Prediction distribution tracking",
        "  - Drift detection: PSI (Population Stability Index) for feature distributions",
        "  - Fairness monitoring: Regular audits of predictions by subgroup",
        "  - Performance: Latency, throughput, error rate",
        "Retraining: Scheduled retraining on new data, A/B testing for model updates",
      ],
    },
  },
  demo: {
    description: "Interactive dashboard showing predictions, SHAP explanations, and fairness metrics",
    videoUrl: null,
    liveUrl: null,
  },
  whatsNext: {
    now: [
      { title: "Improve feature engineering", intent: "Add more temporal and interaction features", complexity: "M" },
      { title: "Deploy to production", intent: "Set up model serving infrastructure", complexity: "L" },
    ],
    next: [
      { title: "Real-time monitoring", intent: "Track predictions and model drift", complexity: "M" },
      { title: "Intervention recommendations", intent: "Suggest actions based on risk factors", complexity: "L" },
    ],
    later: [
      { title: "Multi-institution support", intent: "Generalize to other universities", complexity: "L" },
    ],
  },
  tags: ["Python", "ML", "LightGBM", "SHAP", "OULAD", "Fairness"],
  links: {
    github: "https://github.com/saadayomide/dropout-prediction",
    demo: undefined,
    readme: undefined,
  },
};

export default function DropoutPredictionPage() {
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
