// App.js
import { useState } from "react";
import React from "react";
import UploadForm from "./components/UploadForm";
import ResultsDisplay from "./components/ResultsDisplay";

export default function App() {
  const [resultData, setResultData] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4"
      style={{ backgroundColor: "#0d1b2a" }}
    >
      <h1
        className="text-4xl font-extrabold mb-10 text-center"
        style={{ color: "#e0e1dd", textShadow: "0 2px 8px #415a77" }}
      >
        Cancer Classifier
      </h1>

      <UploadForm setResultData={setResultData} />

      {resultData && <ResultsDisplay result={resultData} />}
    </div>
  );
}
