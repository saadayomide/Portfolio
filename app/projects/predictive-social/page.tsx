"use client";

import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { ComplexityToggle } from "@/components/ComplexityToggle";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projectData = {
  title: "Predictive Social Media",
  problem: {
    recruiter: [
      "Help TikTok creators predict content performance before publishing",
      "Shift from reactive analytics to proactive optimization",
      "Provide actionable recommendations for hashtags, captions, and timing",
    ],
    engineer: [
      "Build an end-to-end Predictive Content Intelligence system",
      "Collect and process public TikTok signals at scale",
      "Develop multimodal feature extraction (text, visuals, audio, temporal)",
      "Implement embedding-based similarity search for explainable recommendations",
      "Create RAG chatbot interface with grounded, citeable recommendations",
      "Ensure GDPR compliance and ethical data practices",
    ],
  },
  outcome: {
    mvp: "End-to-end system design with data pipeline and ML components",
    deployed: "In development, prototype components built",
    features: [
      "Data acquisition pipeline for TikTok signals",
      "Multimodal feature extraction strategy",
      "Embedding-based similarity search (ANN/FAISS-style)",
      "Prediction and recommendation pipeline",
      "Explainability-first RAG chatbot interface",
      "GDPR-aware data practices",
    ],
    owned: [
      "System architecture and design",
      "Data pipeline design",
      "Feature engineering strategy",
      "ML model development",
      "RAG system implementation",
      "Ethics and compliance framework",
    ],
  },
  architecture: {
    components: [
      { name: "Data Acquisition", description: "Web scraping pipeline for TikTok signals" },
      { name: "Feature Extraction", description: "Multimodal features from text, visuals, audio" },
      { name: "Embedding System", description: "Vector embeddings for similarity search" },
      { name: "Prediction Pipeline", description: "Performance forecasting models" },
      { name: "Recommendation Engine", description: "Case-based recommendations from similar content" },
      { name: "RAG Chatbot", description: "Explainable AI interface with citations" },
    ],
  },
  decisions: [
    {
      title: "Embedding-based similarity over collaborative filtering",
      why: "Better for cold-start problem, explainable (can show similar videos), handles multimodal data",
      tradeoffs: "Requires good embeddings, similarity threshold tuning, storage for vectors",
      alternatives: ["Collaborative filtering", "Content-based filtering", "Hybrid approach"],
      failureModes: "Poor embeddings lead to irrelevant recommendations, need quality embeddings",
    },
    {
      title: "RAG over fine-tuned LLM",
      why: "Grounded in actual data, citeable sources, avoids hallucination, easier to update",
      tradeoffs: "Requires retrieval system, more complex architecture, latency from retrieval",
      alternatives: ["Fine-tuned GPT", "Rule-based system", "Template-based responses"],
      failureModes: "Retrieval failures return poor context, need robust retrieval",
    },
    {
      title: "Multimodal features",
      why: "Content performance depends on text, visuals, audio, and timing - need all signals",
      tradeoffs: "More complex pipeline, higher computational cost, harder to interpret",
      alternatives: ["Text-only", "Visual-only", "Ensemble of separate models"],
      failureModes: "Feature extraction failures, alignment issues between modalities",
    },
  ],
  deepDive: {
    api: {
      recruiter: [
        "POST /analyze - Analyze content and get predictions",
        "GET /recommendations - Get optimization recommendations",
        "POST /chat - Ask questions about content strategy",
      ],
      engineer: [
        "POST /api/v1/analyze - Input: content (text, thumbnail, audio), Output: predicted performance, risk factors",
        "GET /api/v1/recommendations?content_id={id} - Returns similar high-performing content, hashtag suggestions, timing recommendations",
        "POST /api/v1/chat - RAG endpoint, retrieves relevant examples, generates grounded response with citations",
        "Vector search: FAISS index for fast similarity search, returns top-k similar videos",
        "Caching: Embeddings cached, prediction results cached with content hash",
      ],
    },
    dataModel: {
      recruiter: [
        "Videos table with metadata and engagement metrics",
        "Embeddings table for vector similarity search",
        "Features table with extracted multimodal features",
      ],
      engineer: [
        "videos: id, video_id, caption, hashtags, creator_id, timestamp, engagement_metrics, INDEX(creator_id, timestamp)",
        "embeddings: video_id, embedding_vector (768-dim), embedding_type (text/visual/audio), INDEX using FAISS",
        "features: video_id, text_features (TF-IDF, sentiment), visual_features (thumbnails, keyframes), audio_features (sound_id, trend_signals), temporal_features",
        "recommendations: video_id, recommended_hashtags, optimal_timing, similar_videos, confidence_score",
        "Vector store: FAISS index for approximate nearest neighbor search, supports incremental updates",
      ],
    },
    coreLogic: {
      recruiter: [
        "Feature extraction: Process text, visuals, audio, and temporal context",
        "Similarity search: Find historically similar videos using embeddings",
        "Prediction: Forecast performance using ML models",
        "Recommendation: Generate actionable insights from similar high-performing content",
      ],
      engineer: [
        "Feature extraction pipeline:",
        "  - Text: Tokenization, TF-IDF, sentiment analysis, hashtag extraction",
        "  - Visual: CNN embeddings from thumbnails/keyframes, color analysis",
        "  - Audio: Sound ID matching, trend signal extraction, genre classification",
        "  - Temporal: Posting time, day of week, trend phase",
        "Embedding generation:",
        "  - Text: Sentence-BERT or OpenAI embeddings",
        "  - Visual: CLIP embeddings for image-text alignment",
        "  - Audio: AudioCLIP or custom audio encoder",
        "  - Combined: Concatenation or learned fusion layer",
        "Similarity search:",
        "  - FAISS index with cosine similarity",
        "  - Approximate nearest neighbor (ANN) for speed",
        "  - Returns top-k similar videos with similarity scores",
      ],
    },
    testing: {
      recruiter: [
        "Test data pipeline with sample TikTok data",
        "Validate prediction accuracy against historical performance",
        "Test recommendation quality and relevance",
      ],
      engineer: [
        "Data pipeline tests:",
        "  - Scraper reliability: Test rate limiting, error handling, retry logic",
        "  - Feature extraction: Validate feature quality, handle missing data",
        "  - Embedding quality: Test embedding similarity on known similar videos",
        "Model evaluation:",
        "  - Temporal split: Train on past data, test on future",
        "  - Metrics: MAE for regression, F1 for classification, calibration",
        "  - A/B testing: Compare predicted vs actual performance",
        "Recommendation quality:",
        "  - Relevance: Human evaluation of recommendation quality",
        "  - Diversity: Ensure recommendations aren't too similar",
        "  - Coverage: Test across different content types",
      ],
    },
    deployment: {
      recruiter: [
        "Planned deployment on cloud infrastructure",
        "Scalable architecture for handling large data volumes",
        "Monitoring for data quality and model performance",
      ],
      engineer: [
        "Infrastructure:",
        "  - Scrapers: Distributed scraping with rate limiting, queue system (Celery/RQ)",
        "  - Feature extraction: Batch processing pipeline, GPU for visual/audio",
        "  - Vector store: FAISS on GPU for fast similarity search",
        "  - API: FastAPI with async endpoints, horizontal scaling",
        "Data pipeline:",
        "  - Incremental refresh: Update embeddings for new videos",
        "  - Deduplication: Hash-based deduplication of videos",
        "  - Reliability: Dead letter queue for failed scrapes, retry logic",
        "Monitoring:",
        "  - Data quality: Track scraping success rate, data freshness",
        "  - Model performance: Prediction accuracy, recommendation CTR",
        "  - System health: API latency, embedding generation time",
      ],
    },
  },
  demo: {
    description: "Interactive interface showing content analysis, predictions, and RAG-powered recommendations",
    videoUrl: null,
    liveUrl: null,
  },
  whatsNext: {
    now: [
      { title: "Complete data pipeline", intent: "Finish scraper and feature extraction", complexity: "M" },
      { title: "Build prediction models", intent: "Train and validate performance models", complexity: "L" },
    ],
    next: [
      { title: "Deploy RAG system", intent: "Production deployment of chatbot interface", complexity: "M" },
      { title: "Improve embeddings", intent: "Fine-tune multimodal embeddings", complexity: "L" },
    ],
    later: [
      { title: "Real-time predictions", intent: "Stream processing for live content analysis", complexity: "L" },
      { title: "Multi-platform support", intent: "Extend to Instagram, YouTube", complexity: "L" },
    ],
  },
  tags: ["Python", "ML", "RAG", "Embeddings", "FAISS", "NLP"],
  links: {
    github: "https://github.com/saadayomide/predictive-social",
    demo: null,
    readme: null,
  },
};

export default function PredictiveSocialPage() {
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
