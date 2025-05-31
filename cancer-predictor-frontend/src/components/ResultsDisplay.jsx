import { FaVial, FaChartBar, FaClipboardList } from "react-icons/fa";
import React from "react";
export default function ResultsDisplay({ result }) {
  if (!result || !result.success) {
    return (
      <div className="mt-6 p-4 bg-red-700 rounded text-white max-w-xl mx-auto text-center">
        <p>Error: {result?.message || "No valid result returned."}</p>
      </div>
    );
  }

  const { prediction, visualizations } = result;
  const { sample_name, predicted_class, cancer_probability, confidence_score, top_genes_expression } = prediction;
  const { bar_chart_data, line_chart_data, expression_summary } = visualizations;

  return (
    <div className="mt-8 p-6 max-w-3xl bg-[#1b263b] rounded-lg shadow-lg text-[#e0e1dd]">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaVial className="text-[#778da9]" /> Prediction Results for <span className="underline">{sample_name}</span>
      </h2>

      <div className="mb-6">
        <p><strong>Predicted Cancer Class:</strong> {predicted_class}</p>
        <p><strong>Cancer Probability:</strong> {(cancer_probability * 100).toFixed(2)}%</p>
        <p><strong>Confidence Score:</strong> {(confidence_score * 100).toFixed(2)}%</p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2 flex items-center gap-1">
          <FaChartBar /> Top 5 Genes Expression:
        </h3>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {Object.entries(top_genes_expression).map(([gene, val]) => (
            <li key={gene} className="bg-[#415a77] rounded px-3 py-1">{gene}: {val.toFixed(3)}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2 flex items-center gap-1">
          <FaClipboardList /> Expression Summary:
        </h3>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          <li>Mean: {expression_summary.mean_expression.toFixed(3)}</li>
          <li>Median: {expression_summary.median_expression.toFixed(3)}</li>
          <li>Std Dev: {expression_summary.std_expression.toFixed(3)}</li>
          <li>Min: {expression_summary.min_expression.toFixed(3)}</li>
          <li>Max: {expression_summary.max_expression.toFixed(3)}</li>
          <li>Total Genes: {expression_summary.total_genes}</li>
          <li>Selected Genes Count: {expression_summary.selected_genes_count}</li>
        </ul>
      </div>

      {/* You can add chart components here using any chart library like recharts or chart.js for bar_chart_data and line_chart_data */}

    </div>
  );
}
