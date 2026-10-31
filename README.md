# AI Model Benchmark Dashboard

A minimal, interactive dashboard for visualizing and comparing open-weight AI models across standardized benchmark scores.

---

## 📊 Benchmarks Overview

To evaluate model capabilities objectively, this dashboard tracks performance across standard open LLM benchmarks:

* **MMLU (Massive Multitask Language Understanding):** Measures multi-task accuracy across 57 subjects spanning STEM, humanities, and social sciences.
* **GSM8K (Grade School Math 8K):** Evaluates multi-step mathematical reasoning capabilities using grade-school level word problems.
* **HumanEval:** Assesses functional code generation correctness in Python based on prompt docstrings.
* **MATH:** Tests complex mathematical problem-solving across challenging competition-level questions.
* **ARC (AI2 Reasoning Challenge):** Evaluates advanced decision-making and grade-school science reasoning capabilities.

---

## 🔍 Score Sourcing & Methodology

All benchmark metrics displayed in this dashboard are aggregated from verified, publicly available sources:
1. **Hugging Face Open LLM Leaderboard:** Standardized normalized scores using the Evaluation Harness.
2. **Official Technical Reports:** Published baseline evaluation figures directly from model developers (e.g., Meta AI, Mistral AI, Qwen).

*Note: Models are evaluated under zero-shot or few-shot standard prompting conditions consistent with official evaluations.*

---

## 🤖 Supported Models & Exact Versions

| Model Name | Exact Version / Variant | Context Window | Key Strengths |
| :--- | :--- | :--- | :--- |
| **Llama 3** | `Meta-Llama-3-8B-Instruct` | 8k tokens | General reasoning, conversational fine-tuning |
| **Mistral** | `Mistral-7B-Instruct-v0.2` | 32k tokens | Efficiency, strong coding & reasoning |
| **Qwen 2** | `Qwen2-7B-Instruct` | 32k tokens | Multilingual capabilities, math, and code generation |
| **Phi-3** | `Phi-3-mini-4k-instruct` | 4k tokens | Lightweight deployment, strong logic & reasoning |

---

## 📚 Useful References

* [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
* [Meta Llama 3 Technical Documentation](https://ai.meta.com/llama/)
* [Mistral AI Documentation](https://docs.mistral.ai/)
* [Qwen GitHub Repository](https://github.com/QwenLM/Qwen)

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])