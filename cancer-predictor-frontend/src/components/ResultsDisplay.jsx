// ResultsDisplay.js
import React from "react";
import { AiOutlineBarChart } from "react-icons/ai";

export default function ResultsDisplay({ result }) {
  const { sample_name, prediction, log_info, gene_expression_data, chart_image_url } =
    result;

  return (
    <div
      className="max-w-3xl mx-auto bg-[#1b263b] p-8 rounded-2xl shadow-xl mt-10"
      style={{ boxShadow: "0 10px 30px rgba(65, 90, 119, 0.7)" }}
    >
      <h2
        className="text-3xl font-semibold mb-4 text-[#e0e1dd]"
        style={{ textShadow: "0 2px 6px #415a77" }}
      >
        Prediction Result
      </h2>

      <div className="mb-6 text-[#e0e1dd] space-y-2">
        <p>
          <span className="font-bold text-[#778da9]">Sample:</span> {sample_name}
        </p>
        <p className="font-bold text-green-400">
          <span className="font-bold text-[#778da9]">Prediction:</span> {prediction}
        </p>
        <p className="italic text-[#778da9]">{log_info}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-3 text-[#e0e1dd] flex items-center space-x-2">
          <AiOutlineBarChart size={24} />
          <span>Top 5 Gene Expressions</span>
        </h3>
        <ul className="text-[#e0e1dd] space-y-1 list-disc list-inside text-sm max-h-40 overflow-auto">
          {gene_expression_data.map((gene, index) => (
            <li key={index}>
              <span className="font-semibold text-[#778da9]">{gene.gene}</span>: {gene.value}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-4 text-[#e0e1dd]">Visualization</h3>
        <img
          src={chart_image_url}
          alt="Gene Expression Chart"
          className="w-full rounded-xl border border-[#415a77] shadow-lg"
          style={{ maxHeight: "400px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
