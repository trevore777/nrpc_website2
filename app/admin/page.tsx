"use client";

import { useState } from "react";

export default function AdminPage() {
  const [transcript, setTranscript] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/summarise-sermon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ transcript })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setResult(data.result);
    } catch (err: any) {
      setResult(err.message || "Error");
    }

    setLoading(false);
  }

  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <h1>AI Sermon Summary Tool</h1>

      <textarea
        rows={12}
        placeholder="Paste sermon transcript here..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        style={{ width: "100%", marginTop: 20 }}
      />

      <button
        onClick={handleGenerate}
        className="button primary"
        style={{ marginTop: 20 }}
      >
        {loading ? "Generating..." : "Generate Summary"}
      </button>

      {result && (
        <pre
          style={{
            marginTop: 30,
            whiteSpace: "pre-wrap",
            background: "#fff",
            padding: 20,
            borderRadius: 10
          }}
        >
          {result}
        </pre>
      )}
    </div>
  );
}