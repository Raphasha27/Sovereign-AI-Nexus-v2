import subprocess
import os
import sys

def run():
    print("Initializing CyberNexus Sentinel... [SHIELDS UP]")
    
    # Start Backend on 8002
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
    
    print("Cyber Backend active on http://localhost:8002")
    print("Sentinel HUD launching...")
    
    try:
        backend_process.wait()
        frontend_process.wait()
    except KeyboardInterrupt:
        backend_process.terminate()
        frontend_process.terminate()

if __name__ == "__main__":
    run()
