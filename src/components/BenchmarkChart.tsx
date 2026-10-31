import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Benchmark = {
  model: string;
  mmlu: number;
  gsm8k: number;
  humanEval: number;
};

type BenchmarkChartProps = {
  benchmarks: Benchmark[];
};

function BenchmarkChart({ benchmarks }: BenchmarkChartProps) {

  if (benchmarks.length === 0) {
    return <p>No models selected for comparison.</p>;
  }

  return (
    <ResponsiveContainer
      width="100%"
      height={Math.max(380, benchmarks.length * 65)}
    >
      <BarChart
        data={benchmarks}
        layout="vertical"
        margin={{
          top: 20,
          right: 30,
          left: 30,
          bottom: 10,
        }}
        barGap={4}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />

        <XAxis
          type="number"
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />

        <YAxis
          type="category"
          dataKey="model"
          width={130}
          tick={{ fontSize: 12 }}
          interval={0}
        />

        <Tooltip
          formatter={(value) => [`${value}%`]}
        />

        <Legend verticalAlign="top" height={36} />

        <Bar
          dataKey="mmlu"
          name="MMLU"
          fill="#8884d8"
          barSize={18}
        />

        <Bar
          dataKey="gsm8k"
          name="GSM8K"
          fill="#82ca9d"
          barSize={18}
        />

        <Bar
          dataKey="humanEval"
          name="HumanEval"
          fill="#ffc658"
          barSize={18}
        />

      </BarChart>
    </ResponsiveContainer>
  );
}

export default BenchmarkChart;