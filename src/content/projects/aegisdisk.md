---
title: "AegisDisk"
tagline: "Windows storage forensics and low-level recovery utility with direct IOCTL access."
role: "Featured"
category: "Systems / Low-Level"
techStack: ["Rust 2024", "Win32 / windows-sys", "Ratatui", "Crossterm", "Direct I/O", "Worker Channels"]
metricsOrStatus: "GitHub Release Available (.exe)"
repoUrl: "https://github.com/EaRebusa/AegisDisk"
order: 1
---

- Implements a modular hardware abstraction layer (`src/hal`) isolating raw physical disk handles from imaging, telemetry, and forensic recovery logic.
- Queries raw ATA/SCSI/NVMe telemetry using Win32 storage IOCTLs and aligned memory sector buffers.
- Background worker thread manages disk imaging operations, communicating live progress to the Ratatui TUI over `crossbeam-channel`.
- Built-in boot disk safety interlocks preventing destructive fake-capacity write probing on the active Windows OS drive.
- Architecture drafted via technical spec; agent-generated driver modules audited for memory safety and storage handle disposal.
