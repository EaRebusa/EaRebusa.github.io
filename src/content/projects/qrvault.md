---
title: "qr-vault"
tagline: "Zero-telemetry Chromium extension for on-screen QR scanning and local TOTP encryption."
role: "Featured"
category: "Security & Web"
techStack: ["TypeScript", "Vite", "Web Crypto API", "Manifest V3", "Shadow DOM", "Vitest"]
metricsOrStatus: "GitHub Release Available (.zip)"
repoUrl: "https://github.com/EaRebusa/qr-vault"
order: 2
---

- Captures and decodes active tab 2FA QR codes directly from the browser viewport without external network calls or cloud syncing.
- Cryptographic key derivation via PBKDF2 (300,000 iterations, SHA-256) and authenticated local encryption via AES-256-GCM with fresh 12-byte IVs.
- Complete DOM style and script isolation of the capture overlay using a closed Shadow DOM tree.
- Hardened memory lifecycle: automatic session auto-lock, rate-limited master password attempts, and 30-second clipboard clearing.
- Strict zero-telemetry boundary enforced through automated unit tests in Vitest; CSP policies manually verified against Manifest V3 specifications.
