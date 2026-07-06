export interface ThreatAnalysis {
  threat_type: string;
  severity_level: string;
  analysis_summary: string;
  remediation: string;
}

export async function analyzeSecurityLog(log: string): Promise<ThreatAnalysis> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (log.includes("OR '1'='1'")) {
    return {
      threat_type: "SQL Injection (SQLi)",
      severity_level: "High",
      analysis_summary: "Attempt to manipulate SQL query logic to bypass authentication or extract data from the database.",
      remediation: "Implement parameterized queries (Prepared Statements) or use a secure ORM framework."
    };
  } else if (log.includes("etc/passwd")) {
    return {
      threat_type: "Local File Inclusion (LFI)",
      severity_level: "Critical",
      analysis_summary: "Attempt to read sensitive system files (etc/passwd) via directory traversal manipulation.",
      remediation: "Sanitize user input by restricting the use of '../' and limit application access to specific directories."
    };
  } else if (log.includes("<img src=x")) {
    return {
      threat_type: "Cross-Site Scripting (XSS)",
      severity_level: "Medium",
      analysis_summary: "Detected an attempt to inject malicious JavaScript code via an unescaped image tag.",
      remediation: "Escape and encode all user-supplied input and configure a strict Content Security Policy (CSP)."
    };
  } else if (log.includes("169.254.169.254")) {
    return {
      threat_type: "Server-Side Request Forgery (SSRF)",
      severity_level: "Critical",
      analysis_summary: "Attacker is attempting to access internal cloud provider metadata (AWS/GCP) via the proxy endpoint.",
      remediation: "Strictly validate URLs and restrict the server from making requests to internal IP ranges (169.254.x.x, 10.x.x.x)."
    };
  } else if (log.includes("/bin/bash")) {
    return {
      threat_type: "Remote Code Execution (RCE) / Command Injection",
      severity_level: "Critical",
      analysis_summary: "Critical attempt to execute arbitrary OS commands on the server via manipulated HTTP headers.",
      remediation: "Patch vulnerable services immediately and avoid passing unsanitized user input to the system shell."
    };
  } else {
    return {
      threat_type: "False Positive / Normal Traffic",
      severity_level: "Low",
      analysis_summary: "Log appears to be standard legitimate system activity. No malicious patterns detected.",
      remediation: "No immediate action required. Continue standard network and log monitoring."
    };
  }
}