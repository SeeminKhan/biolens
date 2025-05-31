// UploadForm.js
import React, { useState } from "react";
import { AiOutlineUpload, AiOutlineInfoCircle } from "react-icons/ai";

export default function UploadForm({ setResultData }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResultData(data);
    } catch (error) {
      alert("Error uploading file");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full max-w-md bg-[#1b263b] p-6 rounded-xl shadow-lg"
      style={{ boxShadow: "0 6px 20px rgba(65, 90, 119, 0.6)" }}
    >
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex items-center space-x-2 px-4 py-2 border-2 border-dashed border-[#778da9] rounded-lg text-[#e0e1dd] hover:bg-[#415a77] transition-colors w-full justify-center"
      >
        <AiOutlineUpload size={24} />
        <span>{file ? file.name : "Choose TSV File to Upload"}</span>
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".tsv,.txt"
        onChange={(e) => setFile(e.target.files[0])}
        className="hidden"
      />

      <button
        type="submit"
        className="mt-6 bg-[#415a77] hover:bg-[#778da9] transition-colors text-[#e0e1dd] font-semibold px-6 py-2 rounded-lg shadow-md"
      >
        Upload & Analyze
      </button>

      <p className="mt-4 text-sm text-[#e0e1dd] flex items-center space-x-2 max-w-xs text-center">
        <span>Upload a TSV file containing gene expression data.</span>
      </p>
    </form>
  );
}
