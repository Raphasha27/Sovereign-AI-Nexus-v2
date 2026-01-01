from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import random

app = FastAPI(title="CyberNexus Sentinel - AI Security Command")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "system": "CyberNexus Sentinel",
        "status": "Shields Up",
        "threat_level": "Minimal",
        "developer": "Raphasha27"
    }

@app.get("/api/security-status")
async def security_status():
    return {
        "firewall_active": True,
        "ai_scan_count": 12409,
        "blocked_attacks_24h": 412,
        "threat_level": "Alpha-1",
        "nodes": [
            {"id": "Gauteng-Secure", "load": 42, "status": "Secure"},
            {"id": "WesternCape-Nexus", "load": 68, "status": "Active Analysis"},
            {"id": "KZN-Shield", "load": 15, "status": "Secure"}
        ]
    }

@app.get("/api/threat-logs")
async def threat_logs():
    return [
        {"id": "NX-01", "type": "Brute Force Attempt", "source": "192.x.x.x", "status": "Neutralized", "time": "2 mins ago"},
        {"id": "NX-02", "type": "DDoS Anomaly", "source": "Botnet B-7", "status": "Filtered", "time": "15 mins ago"},
        {"id": "NX-03", "type": "Phishing Vector", "source": "External Mail", "status": "Quarantined", "time": "1 hr ago"}
    ]

@app.get("/api/adaptive-defense")
async def get_adaptive_defense():
    # Behavioral Pattern Detection
    threat_patterns = [
        {"pattern": "Anomalous Traffic Spike - Gov Nodes", "certainty": 0.98},
        {"pattern": "Lateral Movement in Finance Cluster", "certainty": 0.85},
    ]
    
    responses = []
    for tp in threat_patterns:
        if tp["certainty"] > 0.95:
            responses.append({
                "detection": tp["pattern"],
                "countermeasure": "Autonomous Quantum-Resistant Sharding: Dividing sensitive data across 10 encrypted nodes.",
                "purpose": "Absolute Zero-Day Protection",
                "risk_mitigation": "Critical"
            })
        else:
            responses.append({
                "detection": tp["pattern"],
                "countermeasure": "Neural Honey-Potting: Redirecting traffic to a simulated environment for deep packet analysis.",
                "purpose": "Threat Intelligence Gathering",
                "risk_mitigation": "Moderate"
            })
            
    return {
        "shield_status": "Maximum",
        "intelligence_mode": "Predictive Defense Active",
        "active_countermeasures": responses
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8002)
