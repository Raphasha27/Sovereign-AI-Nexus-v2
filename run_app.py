import subprocess
import os
import sys

def run():
    print("Starting EcoArbitrage AI (Agentic Guard)...")
    
    # Start Backend
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
    
    print("AI Backend running on http://localhost:8000")
    print("Frontend running... Check the terminal output for the Vite link.")
    
    try:
        backend_process.wait()
        frontend_process.wait()
    except KeyboardInterrupt:
        backend_process.terminate()
        frontend_process.terminate()

if __name__ == "__main__":
    run()
