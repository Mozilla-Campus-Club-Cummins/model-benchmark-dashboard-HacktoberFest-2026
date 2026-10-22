
import { useState } from "react";
import BenchmarkTable from "./components/BenchmarkTable";
import BenchmarkChart from "./components/BenchmarkChart";
import ModelSelector from "./components/ModelSelector";
import { benchmarks } from "./data/benchmarks";
import "./App.css";

function App() {
  const allModels = benchmarks.map((item) => item.model);

  const [selectedModels, setSelectedModels] = useState(allModels);

  const filteredBenchmarks = benchmarks.filter((item) =>
    selectedModels.includes(item.model)
  );

  const totalModels = benchmarks.length;
  const totalBenchmarks = 3;

  const averageScore =
    filteredBenchmarks.length > 0
      ? filteredBenchmarks.reduce(
          (total, item) =>
            total + item.mmlu + item.gsm8k + item.humanEval,
          0
        ) / (filteredBenchmarks.length * totalBenchmarks)
      : 0;

  const bestModel =
    filteredBenchmarks.length > 0
      ? filteredBenchmarks.reduce((best, current) => {
          const bestScore =
            best.mmlu + best.gsm8k + best.humanEval;

          const currentScore =
            current.mmlu + current.gsm8k + current.humanEval;

          return currentScore > bestScore ? current : best;
        })
      : null;

  const restoreDefaultSelection = () => {
    setSelectedModels(allModels);
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div>
          <p className="eyebrow">AI MODEL ANALYTICS</p>
          <h1>Model Benchmark Dashboard</h1>
          <p className="subtitle">
            Compare open-weight AI models across standard benchmark scores.
          </p>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">Total Models</span>
            <strong>{totalModels}</strong>
            <span className="stat-description">Models in dataset</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Benchmarks</span>
            <strong>{totalBenchmarks}</strong>
            <span className="stat-description">
              MMLU, GSM8K &amp; HumanEval
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Top Model</span>
            <strong className="model-name">
              {bestModel?.model ?? "—"}
            </strong>
            <span className="stat-description">
              Highest combined score
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Average Score</span>
            <strong>
              {filteredBenchmarks.length > 0
                ? `${averageScore.toFixed(1)}%`
                : "—"}
            </strong>
            <span className="stat-description">
              Across selected models
            </span>
          </div>
        </section>

        <section className="dashboard-card">
          <div className="section-heading">
            <div>
              <p className="section-label">COMPARE</p>
              <h2>Select Models</h2>
            </div>

            <span className="selection-count">
              {selectedModels.length} of {totalModels} selected
            </span>
          </div>

          <ModelSelector
            models={allModels}
            selectedModels={selectedModels}
            onChange={setSelectedModels}
          />
        </section>

        {filteredBenchmarks.length > 0 ? (
          <>
            <section className="dashboard-card">
              <div className="section-heading">
                <div>
                  <p className="section-label">PERFORMANCE</p>
                  <h2>Benchmark Comparison</h2>
                </div>
              </div>

              <div className="chart-container">
                <BenchmarkChart benchmarks={filteredBenchmarks} />
              </div>
            </section>

            <section className="dashboard-card">
              <div className="section-heading">
                <div>
                  <p className="section-label">DATA</p>
                  <h2>Benchmark Scores</h2>
                </div>
              </div>

              <BenchmarkTable benchmarks={filteredBenchmarks} />
            </section>
          </>
        ) : (
          <section
            className="dashboard-card empty-state"
            role="status"
            aria-live="polite"
          >
            <div className="empty-state-icon" aria-hidden="true">
              📊
            </div>

            <p className="section-label">NOTHING TO COMPARE</p>
            <h2>No models selected</h2>

            <p>
              All models are currently unchecked. Restore the default
              selection to bring back the benchmark chart and scores.
            </p>

            <button
              type="button"
              className="restore-selection-button"
              onClick={restoreDefaultSelection}
            >
              Restore default selection
            </button>

            <span className="empty-state-hint">
              You can then select or deselect individual models above.
            </span>
          </section>
        )}
      </main>

      <footer className="footer">
        Model Benchmark Dashboard • Built with React + TypeScript
      </footer>
    </div>
  );
}

export default App;
