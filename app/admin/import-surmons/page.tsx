"use client";

import { useState } from "react";

export default function ImportSermonsPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleImport() {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/import-sermons");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Import failed");
      }

      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Import failed";
      setResult(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <span className="eyebrow">Admin</span>
      <h1>Import sermons from YouTube</h1>
      <p className="lead">
        This page calls the import endpoint and shows the returned result.
      </p>

      <button
        className="button primary"
        onClick={handleImport}
        disabled={loading}
      >
        {loading ? "Importing..." : "Import latest sermons"}
      </button>

      {result ? (
        <pre
          style={{
            marginTop: 24,
            background: "#fff",
            padding: 20,
            borderRadius: 16,
            overflowX: "auto",
            whiteSpace: "pre-wrap"
          }}
        >
          {result}
        </pre>
      ) : null}
    </div>
  );
}