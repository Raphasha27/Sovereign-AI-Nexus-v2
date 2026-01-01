from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import random
from datetime import datetime

app = FastAPI(title="SolarGrid Sentinel - Decentralized Energy AI")

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
        "platform": "SolarGrid Sentinel",
        "objective": "Decentralized Energy Arbitrage",
        "developer": "Raphasha27",
        "grid_status": "Stabilized"
    }

@app.get("/api/grid-metrics")
async def get_grid_metrics():
    # STRESS TEST (Comment out below to simulate collapse)
    # return { "current_generation": "0.0 MW", "load_shedding_risk": "TOTAL COLLAPSE", "grid_status": "🔴 BLACKOUT" }
    
    return {
        "current_generation": "42.5 MW",
        "community_usage": "21.2 MW",
        "excess_distributed": "21.3 MW",
        "revenue_generated": "R 142,500",
        "load_shedding_risk": "Low",
        "grid_status": "Nominal"
    }

@app.get("/api/energy-trades")
async def energy_trades():
    return [
        {"id": "SOL-201", "source": "Soweto West Cluster", "target": "Industrial Zone 4", "amount": "5.2 MW", "profit": "R 12,400", "time": "Just now"},
        {"id": "SOL-202", "source": "Sandton Solar Farm", "target": "Residential Block B", "amount": "2.8 MW", "profit": "R 4,200", "time": "12 mins ago"},
        {"id": "SOL-203", "source": "Diepsloot Microgrid", "target": "Grid Backup Alpha", "amount": "1.5 MW", "profit": "R 2,100", "time": "1 hr ago"}
    ]

@app.get("/api/forecast")
async def get_forecast():
    # Simulate energy storage vs demand forecast
    return [
        {"time": "14:00", "generation": 85, "demand": 30},
        {"time": "16:00", "generation": 70, "demand": 45},
        {"time": "18:00", "generation": 40, "demand": 90},
        {"time": "20:00", "generation": 10, "demand": 80},
    ]

@app.get("/api/grid-intelligence")
async def get_grid_intelligence():
    # Grid Stability & Crisis Resolution
    grid_anomalies = [
        {"area": "Johannesburg CBD", "instability": 0.92, "cause": "Peak Demand Spike"},
        {"area": "Durban South", "instability": 0.45, "cause": "Minor Transformer Fluctuation"},
    ]
    
    actions = []
    for a in grid_anomalies:
        if a["instability"] > 0.80:
            actions.append({
                "crisis": f"Imminent Load-Shedding in {a['area']}",
                "ai_solution": "Autonomous Microgrid Isolation: Disconnecting from the unstable main grid and powering from 100% community solar/batteries.",
                "purpose": "Shielding critical services and businesses from blackouts.",
                "success_probability": "98%"
            })
        else:
            actions.append({
                "crisis": f"Voltage Instability in {a['area']}",
                "ai_solution": "Neural Phase Balancing: Adjusting energy distribution across residential phases using smart inverter coordination.",
                "purpose": "Prolonging infrastructure lifespan and reducing maintenance costs.",
                "success_probability": "92%"
            })
            
    return {
        "engine": "SolarNexus Stability AI",
        "grid_solutions": actions
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8003)
