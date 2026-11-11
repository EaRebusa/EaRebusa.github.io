---
title: "RESQ Emergency Dispatch"
tagline: "Commissioned offline emergency SOS system operating over Bluetooth Low Energy mesh."
role: "Featured"
category: "Mobile / IoT"
techStack: ["Kotlin", "Android SDK", "Jetpack Compose", "BLE Scanning", "MapLibre", "Room DB"]
metricsOrStatus: "Commissioned Research Prototype"
repoUrl: "https://github.com/EaRebusa/RESQ-Proof-of-Concept"
order: 4
---

- Commissioned client proof-of-concept application built to dispatch emergency SOS signals without active cellular network coverage.
- Implements an Android connected-device foreground service (`SosBleScannerService`) for continuous low-power Bluetooth LE beacon scanning and packet parsing.
- Embedded vector mapping using MapLibre SDK for local geospatial positioning and route visualization.
- Clean MVVM architecture separating raw BLE transport, local Room database persistence, and reactive Jetpack Compose views.
