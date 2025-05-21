import React, { useState } from "react";
import { generateGeminiContent } from "../Api/geminiApi";

export default function GetStarted() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateGeminiContent(input);
      const outputText = result.candidates?.[0]?.content?.parts?.[0]?.text;
      setResponse(outputText || "No response.");
    } catch (err) {
      setResponse("Error: " + err);
    }
    setLoading(false);
    setInput("");
  };

  return (
    <div className="p-4 min-h-screen container-gradient">
      <div className="mt-4 p-2 bg-transparent text-white rounded">
        {response.split(/(\*\*[^\*]+\*\*)/g).map((part, index) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
          }
          return <span key={index}>{part}</span>;
        })}
      </div>

      <form
        onSubmit={handleSubmit}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="flex justify-between items-center border-2 border-gray-400 rounded-2xl bg-transparent px-2 py-1">
          <input
            className="w-full px-3 py-2 text-white bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="app-button rounded-xl m-2 "
            type="submit"
            disabled={loading}>
            {loading ? "Loading..." : "Ask"}
          </button>
        </div>
      </form>
    </div>
  );
}
