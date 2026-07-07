# AI SOC Simulator 🛡️

A React-based web application designed to simulate a Security Operations Center (SOC) dashboard. This tool analyzes system logs and classifies potential security threats using mocked detection logic, demonstrating core concepts of incident response and threat analysis.

## 🎯 Features

*   **Threat Detection Simulation:** Automatically analyzes logs to detect common web vulnerabilities and attack vectors.
*   **Vulnerability Classification:** Identifies specific threats including:
    *   SQL Injection (SQLi)
    *   Cross-Site Scripting (XSS)
    *   Local File Inclusion (LFI)
    *   Server-Side Request Forgery (SSRF)
    *   Remote Code Execution (RCE) / Command Injection
*   **Severity Indicators:** Visually categorizes threats by severity levels (Low, Medium, High, Critical) with dynamic UI highlighting.
*   **Actionable Remediation:** Provides immediate, industry-standard mitigation strategies for each detected threat.

## 🛠️ Tech Stack

*   **Frontend:** React, TypeScript, Vite
*   **Styling:** Tailwind CSS (via utility classes)
*   **Architecture:** Component-based UI with simulated async API calls.

## 🚀 How to Run Locally
git clone https://github.com/NeonDungeonMaster/ai-soc-simulator.git