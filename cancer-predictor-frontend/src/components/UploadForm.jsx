import { useState } from "react";
import React from "react";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function UploadForm({ setResultData, setLoading }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/predict", formData);
      setResultData(res.data);
    } catch (error) {
      alert("Error uploading file");
      console.error(error);
      setResultData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1b263b] p-6 rounded-xl shadow-lg w-full max-w-xl text-center">
      <input
        type="file"
        accept=".tsv,text/tab-separated-values"
        onChange={(e) => setFile(e.target.files[0])}
        className="file-input rounded file-input-bordered w-full bg-[#778da9] text-black file:bg-[#415a77] file:border-none file:text-white file:font-medium"
      />
      <button
        type="submit"
        className="mt-4 bg-[#415a77] text-white px-6 py-2 rounded hover:bg-[#778da9] flex items-center justify-center gap-2 transition"
      >
        <FaCloudUploadAlt className="text-xl" />
        Upload & Analyze
      </button>
    </form>
  );
}
