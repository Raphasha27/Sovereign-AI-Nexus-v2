import subprocess
import os
import sys

def run():
    print("Initializing Agri-Nexus AI... [HARVEST GUARD ACTIVE]")
    
    # Start Backend on 8004
    backend_process = subprocess.Popen(
        [sys.executable, "main.py"],
        cwd=os.path.join(os.getcwd(), "backend")
    )
    
    # Start Frontend
    frontend_process = subprocess.Popen(
        "npm run dev",
        shell=True,
        cwd=os.path.join(os.getcwd(), "frontend")
    )
    
    print("Agri API active on http://localhost:8004")
    print("Harvest Dashboard launching via Vite...")
    
    try:
        backend_process.wait()
        frontend_process.wait()
    except KeyboardInterrupt:
        backend_process.terminate()
        frontend_process.terminate()

if __name__ == "__main__":
    run()
