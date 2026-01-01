import subprocess
import os
import sys

def run():
    print("Launching HealthNexus AI... [WELLNESS GUARD ACTIVE]")
    backend_process = subprocess.Popen([sys.executable, "main.py"], cwd=os.path.join(os.getcwd(), "backend"))
    frontend_process = subprocess.Popen("npm run dev", shell=True, cwd=os.path.join(os.getcwd(), "frontend"))
    try:
        backend_process.wait()
        frontend_process.wait()
    except KeyboardInterrupt:
        backend_process.terminate()
        frontend_process.terminate()

if __name__ == "__main__":
    run()
