from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

app = FastAPI(title="Kasi-Logistics 2.0 - Township Connectivity AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DispatchOrder(BaseModel):
    hub: str
    destination: str
    product_type: str

@app.get("/")
async def root():
    return {
        "platform": "Kasi-Logistics 2.0",
        "vision": "Bridging Townships to Global Chains",
        "developer": "Raphasha27",
        "status": "Ready"
    }

@app.get("/api/hubs")
async def get_hubs():
    return [
        {"name": "Soweto Hub Alpha", "coordinates": [-26.2485, 27.8540], "active_deliveries": 42, "status": "Optimized"},
        {"name": "Tembisa Logistics Peak", "coordinates": [-25.9964, 28.2268], "active_deliveries": 31, "status": "Busy"},
        {"name": "Khayelitsha Gateway", "coordinates": [-34.0378, 18.6657], "active_deliveries": 18, "status": "Ready"},
        {"name": "Umlazi Stream", "coordinates": [-29.9678, 30.8872], "active_deliveries": 25, "status": "Optimized"}
    ]

@app.get("/api/global-bridge")
async def global_bridge():
    return [
        {"id": "TR-901", "product": "Agri-Nectar (Organic)", "origin": "Free State", "destination": "Rotterdam, NL", "stage": "In Transit", "vessel": "Global Shield 42"},
        {"id": "TR-902", "product": "Cyber-Nodes", "origin": "Sandton", "destination": "Dubai, UAE", "stage": "Clearing Customs", "vessel": "Air Cargo 787"},
        {"id": "TR-903", "product": "Kasi-Fusion Apparel", "origin": "Mamelodi", "destination": "New York, USA", "stage": "Clearing Customs", "vessel": "Atlantic Express"}
    ]

@app.get("/api/logistics-intelligence")
async def get_logistics_intelligence():
    # Solving the 'Township Last Mile' problem
    problems = [
        {"issue": "Road Infrastructure Unmapped", "hub": "Umlazi", "severity": "High"},
        {"issue": "Merchant Consolidation Failure", "hub": "Soweto", "severity": "Medium"},
    ]
    
    solutions = []
    for p in problems:
        if p["severity"] == "High":
            solutions.append({
                "problem": p["issue"],
                "ai_solution": "Deploying Dynamic Ad-hoc Routing using real-time community movement data.",
                "purpose": "Seamless Global Connectivity for local artisans.",
                "target_metric": "0% delivery failure rate"
            })
        else:
            solutions.append({
                "problem": p["issue"],
                "ai_solution": "Neural Merchant Batching: Grouping 50+ local parcels for bulk international shipping.",
                "purpose": "Reducing export costs by 65% for small businesses.",
                "target_metric": "Profitability threshold reached"
            })
            
    return {
        "engine": "Kasi-Route Optimization v3",
        "active_interventions": solutions
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)
