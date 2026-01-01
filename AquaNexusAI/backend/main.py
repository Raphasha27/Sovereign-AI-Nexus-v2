from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI(title="AquaNexus AI - Water Sovereignty Guard")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"system": "AquaNexus AI", "status": "Hydraulic Stability Nominal", "focus": "Clean Water Resilience"}

@app.get("/api/water-metrics")
async def water_metrics():
    return {
        "dam_levels_avg": "74.2%",
        "daily_purification_yield": "1.2B Liters",
        "detected_leak_reduction": "28%",
        "water_quality_index": "98/100",
        "regional_grids": [
            {"region": "Vaal River System", "status": "Optimal", "pressure": "Stable"},
            {"region": "Cape Town Aquifers", "status": "Monitoring", "pressure": "Dynamic"},
            {"region": "Ethekwini Grid", "status": "Critical Intervention", "pressure": "Low"}
        ]
    }

@app.get("/api/aqua-intelligence")
async def aqua_intelligence():
    anomalies = [
        {"issue": "Acoustic Leak Detection", "location": "Sandton Pipe Network", "severity": 0.88},
        {"issue": "Turbidity Spike", "location": "Vaal Treatment Plant", "severity": 0.65}
    ]
    
    solutions = []
    for a in anomalies:
        if a["severity"] > 0.80:
            solutions.append({
                "problem": a["issue"],
                "ai_solution": "Autonomous Pressure Modulation & Robotic Pipe Sealing: Deploying AquaBot-S1.",
                "purpose": "Saving 15ML of potable water per day.",
                "outcome_prediction": "Pressure stabilized in 4 mins"
            })
        else:
            solutions.append({
                "problem": a["issue"],
                "ai_solution": "Neural Filtration Re-routing: Shifting flow to auxiliary bio-reactors.",
                "purpose": "Guaranteeing Blue Drop water standards despite input contamination.",
                "outcome_prediction": "Purity restored in 2 hours"
            })
            
    return {
        "engine": "HydroGuard AI v3.1",
        "active_interventions": solutions
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8006)
