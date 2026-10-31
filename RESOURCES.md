# Resources

## 1. What is this project?

Model Benchmark Dashboard is a simple web application for comparing open-weight AI models using benchmark scores[cite: 1, 2].

The goal is to make model comparison easier to understand through a table and visual charts.

This project is intentionally kept simple. It is not a model-hosting platform, training system, or full AI evaluation platform.

---

## 2. Concepts & Benchmark Definitions

Before contributing, it is useful to understand basic AI concepts and how models are evaluated:

* **Open-weight AI Models:** Models whose weights and parameters are publicly downloadable (e.g., Llama 3, Mistral, Qwen 2)[cite: 1, 2].
* **MMLU (Massive Multitask Language Understanding):** Evaluates multi-task accuracy across 57 subjects spanning STEM, humanities, and social sciences.
* **GSM8K (Grade School Math 8K):** Measures multi-step mathematical reasoning using grade-school level word problems.
* **HumanEval:** Assesses functional code generation correctness in Python based on prompt docstrings.
* **MATH:** Tests complex mathematical problem-solving across challenging competition-level questions.
* **ARC (AI2 Reasoning Challenge):** Evaluates advanced decision-making and grade-school science reasoning.

---

## 3. Score Sourcing & Methodology

All benchmark scores tracked in this dashboard are aggregated from verified open sources:
1. **Hugging Face Open LLM Leaderboard:** Standardized normalized evaluation harness metrics.
2. **Official Technical Reports:** Evaluation figures directly published by model creators.

---

## 4. Featured Models & Exact Versions

| Model | Exact Version / Variant | Context Window | Key Strengths |
| :--- | :--- | :--- | :--- |
| **Llama 3** | `Meta-Llama-3-8B-Instruct` | 8k tokens | General reasoning, conversational fine-tuning |
| **Mistral** | `Mistral-7B-Instruct-v0.2` | 32k tokens | Efficiency, strong coding & reasoning |
| **Qwen 2** | `Qwen2-7B-Instruct` | 32k tokens | Multilingual capabilities, math, and code |
| **Phi-3** | `Phi-3-mini-4k-instruct` | 4k tokens | Lightweight deployment, strong logic |

---

## 5. Helpful Reference Links

* [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
* [Meta Llama 3 Technical Documentation](https://ai.meta.com/llama/)
* [Mistral AI Documentation](https://docs.mistral.ai/)
* [Qwen GitHub Repository](https://github.com/QwenLM/Qwen)
* [MMLU Dataset Paper](https://paperswithcode.com/dataset/mmlu)

---

## 6. Prerequisites & Local Setup

### Prerequisites
You should have:
- Node.js installed
- npm installed
- Git installed
- Basic JavaScript / TypeScript and React knowledge for frontend tasks

### Setup Instructions
Clone the repository and install dependencies:

```bash
git clone [https://github.com/Mozilla-Campus-Club-Cummins/model-benchmark-dashboard-HacktoberFest-2026.git](https://github.com/Mozilla-Campus-Club-Cummins/model-benchmark-dashboard-HacktoberFest-2026.git)
cd model-benchmark-dashboard-HacktoberFest-2026
npm install
npm run dev