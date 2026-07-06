import { useState } from 'react';
import { getRandomLog } from './threats';
import { analyzeSecurityLog, type ThreatAnalysis } from './socAgent';

export default function App() {
  const [logs, setLogs] = useState<string[]>([]);
  const [analysis, setAnalysis] = useState<ThreatAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const runSimulation = async () => {
    setLoading(true);
    const newLog = getRandomLog();
    setLogs([newLog, ...logs].slice(0, 5));
    const result = await analyzeSecurityLog(newLog);
    setAnalysis(result);
    setLoading(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-500 font-bold animate-pulse';
      case 'High': return 'text-orange-500 font-bold';
      case 'Medium': return 'text-yellow-400 font-bold';
      case 'Low': return 'text-green-400 font-bold';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-red-500">AI SOC Simulator</h1>
      <button 
        onClick={runSimulation}
        className="bg-blue-600 px-4 py-2 rounded mb-6 hover:bg-blue-700 transition"
      >
        {loading ? 'Analyzing...' : 'Generate Threat'}
      </button>

      {analysis && (
        <div className="bg-gray-800 p-6 rounded border border-gray-700 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">{analysis.threat_type}</h2>
          <p className="mb-1">
            <strong>Severity:</strong> <span className={getSeverityColor(analysis.severity_level)}>{analysis.severity_level}</span>
          </p>
          <p className="mb-1"><strong>Summary:</strong> {analysis.analysis_summary}</p>
          <p className="mt-2 text-blue-300"><strong>Fix:</strong> {analysis.remediation}</p>
        </div>
      )}
    </div>
  );
}