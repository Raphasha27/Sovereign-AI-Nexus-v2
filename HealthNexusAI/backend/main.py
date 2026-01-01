from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI(title="HealthNexus AI - Predictive Wellness Guard")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"system": "HealthNexus AI", "status": "Vitals Nominal", "focus": "Preventative Community Care"}

@app.get("/api/health-vitals")
async def health_vitals():
    return {
        "community_wellness_index": 82,
        "active_outbreak_suppression": 2,
        "mobile_clinics_dispatched": 45,
        "medication_stock_stability": "94%",
        "regional_health": [
            {"region": "Gauteng", "status": "Stable", "risk": "Low"},
            {"region": "KwaZulu-Natal", "status": "Monitoring", "risk": "Medium"},
            {"region": "Western Cape", "status": "Optimized", "risk": "Low"}
        ]
    }

@app.get("/api/health-intelligence")
async def health_intelligence():
    anomalies = [
        {"issue": "Pre-outbreak Pattern Detected", "region": "Alexandra", "confidence": 0.89},
        {"issue": "Pharmacy Stock Depletion", "region": "Khayelitsha", "confidence": 0.76}
    ]
    
    solutions = []
    for a in anomalies:
        if a["confidence"] > 0.85:
            solutions.append({
                "problem": a["issue"],
                "ai_solution": "Autonomous Quarantine & Targeted Resource Deployment: Dispatching Smart-Meds Drones.",
                "purpose": "Averting localized health crisis before saturation.",
                "outcome_prediction": "92% suppression rate"
            })
        else:
            solutions.append({
                "problem": a["issue"],
                "ai_solution": "Resource Arbitrage: Transferring excess stock from Stable Zones to Khayelitsha centers.",
                "purpose": "Zero-stockout policy for chronic medication.",
                "outcome_prediction": "Stability restored in 12 hours"
            })
            
    return {
        "engine": "HealthGuard AI v2.0",
        "active_interventions": solutions
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8005)
