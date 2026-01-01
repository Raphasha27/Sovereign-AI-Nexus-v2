import subprocess
import os
import sys

def run():
    print("Launching Sovereign Brain [PORT 8007]...")
    script_dir = os.path.dirname(os.path.abspath(__file__))
    backend_process = subprocess.Popen([sys.executable, "main.py"], cwd=os.path.join(script_dir, "backend"))
    try:
        backend_process.wait()
    except KeyboardInterrupt:
        backend_process.terminate()

if __name__ == "__main__":
    run()
