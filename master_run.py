import subprocess
import os
import sys

def run_pillar(name, path, script):
    print(f"[*] Starting Pillar: {name} in {path}")
    return subprocess.Popen([sys.executable, script], cwd=os.path.join(os.getcwd(), path))

def run_master():
    print("="*60)
    print("      THE RAPHAHSA27 NEXUS: MASTER COMMAND ACTIVATION")
    print("="*60)
    
    processes = []
    
    # EcoArbitrage (Social)
    processes.append(run_pillar("EcoArbitrage AI", ".", "run_app.py"))
    
    # KasiLogistics
    processes.append(run_pillar("Kasi-Logistics 2.0", "KasiLogistics", "run_kasi.py"))
    
    # CyberNexus
    processes.append(run_pillar("CyberNexus Sentinel", "CyberNexusSentinel", "run_nexus.py"))
    
    # SolarGrid
    processes.append(run_pillar("SolarGrid Sentinel", "SolarGridSentinel", "run_grid.py"))
    
    # AgriNexus
    processes.append(run_pillar("AgriNexus AI", "AgriNexusAI", "run_agri.py"))
    
    # HealthNexus
    processes.append(run_pillar("HealthNexus AI", "HealthNexusAI", "run_health.py"))
    
    # AquaNexus
    processes.append(run_pillar("AquaNexus AI", "AquaNexusAI", "run_aqua.py"))
    
    # Sovereign Brain (Master Backend)
    processes.append(run_pillar("Sovereign Brain", "MasterCommandCenter", "run_brain.py"))
    
    # Master Command Center (Frontend only launcher)
    print("[*] Starting MASTER COMMAND CENTER Dashboard...")
    processes.append(subprocess.Popen("npm run dev", shell=True, cwd=os.path.join(os.getcwd(), "MasterCommandCenter", "frontend")))

    print("\n[SUCCESS] The Sovereign AI Nexus is now Live.")
    print("[INFO] Access the Master Dashboard on http://localhost:5180")
    
    try:
        for p in processes: p.wait()
    except KeyboardInterrupt:
        for p in processes: p.terminate()

if __name__ == "__main__":
    run_master()
