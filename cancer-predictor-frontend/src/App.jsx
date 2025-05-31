import { useState } from "react";
import React from "react";
import UploadForm from "./components/UploadForm";
import ResultsDisplay from "./components/ResultsDisplay";
import { FaMicroscope } from "react-icons/fa";

function App() {
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0d1b2a] text-[#e0e1dd] p-6">
      <div className="text-center mb-10">
        <FaMicroscope className="text-6xl mx-auto text-[#778da9] mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold mb-2">🧬 Cancer Classifier</h1>
        <p className="text-[#778da9] max-w-md mx-auto">
          Upload a <span className="font-semibold text-[#e0e1dd]">TSV file</span> containing gene expression data to predict cancer type.
        </p>
      </div>

      <UploadForm setResultData={setResultData} setLoading={setLoading} />
      {loading && <p className="mt-4 text-[#778da9]">Analyzing data, please wait...</p>}
      {resultData && !loading && <ResultsDisplay result={resultData} />}
    </div>
  );
}

export default App;
