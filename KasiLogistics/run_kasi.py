import subprocess
import os
import sys

def run():
    print("Launching Kasi-Logistics 2.0 Ecosystem...")
    
    # Start Backend on 8001
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
    
    print("Kasi Backend (FastAPI) running on http://localhost:8001")
    print("Logistics Dashboard launching via Vite...")
    
    try:
        backend_process.wait()
        frontend_process.wait()
    except KeyboardInterrupt:
        backend_process.terminate()
        frontend_process.terminate()

if __name__ == "__main__":
    run()
