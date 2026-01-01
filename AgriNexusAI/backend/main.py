from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import random

app = FastAPI(title="Agri-Nexus AI - The Smart Harvest Shield")

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
        "platform": "Agri-Nexus AI",
        "mission": "Securing the South African Food Chain",
        "status": "Operational"
    }

@app.get("/api/yield-stats")
async def yield_stats():
    return {
        "active_farmers": 1420,
        "arable_land_optimized": "12,500 Hectares",
        "projected_harvest_boost": "+38%",
        "market_price_stability": "High",
        "regional_clusters": [
            {"region": "Limpopo Fruit Belt", "status": "Harvest Ready", "optimization": 94},
            {"region": "Free State Grain Hub", "status": "Seeding Optimized", "optimization": 88},
            {"region": "Western Cape Vineyards", "status": "Climate Monitoring", "optimization": 91}
        ]
    }

@app.get("/api/agri-intelligence")
async def agri_intelligence():
    # Purpose-driven AI for Agriculture
    threats = [
        {"issue": "Pre-harvest Crop Spoilage", "origin": "Eastern Cape Cluster", "severity": 0.85},
        {"issue": "Market Price Exploitation", "origin": "Limpopo Smallholders", "severity": 0.72}
    ]
    
    solutions = []
    for t in threats:
        if t["severity"] > 0.80:
            solutions.append({
                "problem": t["issue"],
                "ai_solution": "Deploying Mobile Neural Cooling Units & AI-Driven Route Shortening.",
                "purpose": "Reducing pre-consumer waste by 40% and ensuring food reaches Soweto in under 6 hours.",
                "impact_metric": "Freshness Factor: Optimal"
            })
        else:
            solutions.append({
                "problem": t["issue"],
                "ai_solution": "Direct-to-Consumer Arbitrage Engine: Connecting smallholders directly to Gately/Johannesburg retailers via blockchain transparency.",
                "purpose": "Decentralizing the food market and doubling farmer profit margins.",
                "impact_metric": "Profit Margin: +110%"
            })
            
    return {
        "engine": "HarvestGuard AI v1.2",
        "active_interventions": solutions
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8004)
