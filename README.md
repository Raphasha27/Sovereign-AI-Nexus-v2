# Sovereign AI Nexus v2

An experimental multi-agent AI orchestration platform that coordinates domain-specific autonomous agents across critical socio-economic sectors. Designed as a proof-of-concept for decentralized, AI-driven governance and infrastructure management.

## Overview

Sovereign AI Nexus v2 is a modular, multi-pillar system where each "pillar" is an independent AI agent with its own backend (FastAPI) and frontend (React/Vite). A Master Command Center provides a unified dashboard, while a master orchestrator (`master_run.py`) launches all pillars simultaneously.

The concept explores how autonomous AI agents -- each specialized in a domain like agriculture, healthcare, energy, cybersecurity, water management, logistics, and social equity -- can operate independently yet be coordinated through a central brain to solve real-world infrastructure and resource challenges.

## Architecture

```
                        ┌─────────────────────────────┐
                        │   Master Command Center      │
                        │   (React + FastAPI Brain)    │
                        │   http://localhost:5180      │
                        └──────────┬──────────────────┘
                                   │ orchestrates
          ┌──────────┬──────────┬──┴──┬──────────┬──────────┬──────────┐
          │          │          │     │          │          │          │
    ┌─────▼──┐ ┌────▼───┐ ┌───▼───┐ ┌─▼────┐ ┌──▼────┐ ┌──▼────┐ ┌───▼─────┐
    │EcoArbi-│ │Kasi-   │ │Cyber  │ │Solar │ │Agri- │ │Health │ │Aqua    │
    │trage AI│ │Logis-  │ │Nexus  │ │Grid  │ │Nexus │ │Nexus  │ │Nexus   │
    │:8000   │ │tics    │ │Sentinel│ │:8003 │ │AI    │ │AI     │ │AI      │
    │        │ │:8001   │ │:8002  │ │      │ │:8004 │ │:8005  │ │:8006   │
    └────────┘ └────────┘ └───────┘ └──────┘ └──────┘ └──────┘ └────────┘
```

Each pillar runs:
- A **FastAPI backend** serving REST APIs (domain-specific AI logic)
- A **React (Vite) frontend** as a dedicated dashboard
- An autonomous **intelligence engine** tailored to its domain

## Pillars & Intelligence Engines

| Pillar | Domain | Engine | API Port |
| :----- | :----- | :----- | :------- |
| **EcoArbitrage AI** | Social fairness & economic stability | Socio-Reasoner AI | 8000 |
| **KasiLogistics** | Township logistics & global exports | Kasi-Route AI | 8001 |
| **CyberNexus Sentinel** | Infrastructure security | Shield AI | 8002 |
| **SolarGrid Sentinel** | Energy grid sovereignty | SolarNexus AI | 8003 |
| **AgriNexus AI** | Food security & agriculture | HarvestGuard AI | 8004 |
| **HealthNexus AI** | Predictive healthcare | HealthGuard AI | 8005 |
| **AquaNexus AI** | Water management | HydroGuard AI | 8006 |

## Tech Stack

- **Frontend:** React 19, Vite (Rolldown), JavaScript
- **Backend:** FastAPI, Python 3, Uvicorn
- **Monorepo:** npm workspaces
- **AI Integration:** OpenAI API (pluggable)
- **Database:** PostgreSQL (via SQLAlchemy/dotenv config)
- **Cache:** Redis
- **Deployment:** Vercel-ready (`vercel.json`)

## Features

- **Multi-agent orchestration** -- launch all pillars with a single command
- **Domain-specific AI agents** -- each pillar solves a focused real-world problem
- **Centralized command center** -- unified dashboard at `localhost:5180`
- **Modular & independent** -- pillars can be scaled, deployed, or developed in isolation
- **RESTful APIs** -- each backend exposes structured endpoints for frontend consumption
- **Global peer integration** -- designed to sync with UN/WHO/UNESCO standards and international peering nodes
- **Real-time dashboarding** -- live metrics, incident feeds, and AI reasoning logs

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- npm

### Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Raphasha27/Sovereign-AI-Nexus-v2.git
cd Sovereign-AI-Nexus-v2

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials and API keys

# Install backend dependencies
pip install -r backend/requirements.txt

# Install all frontend workspaces
npm install
```

### Running

#### Launch all pillars (full system)

```bash
python master_run.py
```

This starts all 7 pillar backends, their frontends, and the Master Command Center.

#### Run a single pillar

Each pillar has its own launcher script. For example:

```bash
python run_app.py          # EcoArbitrage AI
python AgriNexusAI/run_agri.py   # AgriNexus AI
```

#### Run backend and frontend individually

```bash
# Backend (example port 8000)
cd backend && uvicorn main:app --reload --port 8000

# Frontend (example)
cd frontend && npm run dev
```

## Project Structure

```
Sovereign-AI-Nexus-v2/
├── AgriNexusAI/              # Agriculture pillar
│   ├── backend/
│   ├── frontend/
│   └── run_agri.py
├── AquaNexusAI/              # Water management pillar
│   ├── backend/
│   ├── frontend/
│   └── run_aqua.py
├── CyberNexusSentinel/       # Cybersecurity pillar
│   ├── backend/
│   ├── frontend/
│   └── run_nexus.py
├── HealthNexusAI/            # Healthcare pillar
│   ├── backend/
│   ├── frontend/
│   └── run_health.py
├── KasiLogistics/            # Logistics pillar
│   ├── backend/
│   ├── frontend/
│   └── run_kasi.py
├── SolarGridSentinel/        # Energy pillar
│   ├── backend/
│   ├── frontend/
│   └── run_grid.py
├── MasterCommandCenter/      # Central orchestration dashboard
│   ├── backend/
│   ├── frontend/
│   └── run_brain.py
├── backend/                  # EcoArbitrage AI backend (root-level)
│   ├── main.py
│   └── requirements.txt
├── frontend/                 # EcoArbitrage AI frontend (root-level)
├── GrandMasterLauncher.py    # Alternative system launcher
├── master_run.py             # Primary orchestrator (launches all pillars)
├── run_app.py                # Root-level pillar launcher
├── package.json              # Monorepo workspace config
├── vercel.json               # Vercel deployment config
├── SYSTEM_TOPOLOGY.md        # Detailed system architecture
├── .env.example              # Environment variable template
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

## License

MIT -- see [LICENSE](LICENSE) for details.

---

Built by [Raphasha27](https://github.com/Raphasha27).
