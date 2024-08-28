# Trackpad block
import subprocess
import time

# Replace with your trackpad's hardware ID (you can find it in the device manager)
TRACKPAD_HARDWARE_ID = "YOUR_TRACKPAD_HARDWARE_ID"

def run_command(command):
    try:
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Command failed with error: {e}")

def disable_trackpad():
    print("Disabling trackpad...")
    run_command(["devcon", "disable", TRACKPAD_HARDWARE_ID])

def enable_trackpad():
    print("Enabling trackpad...")
    run_command(["devcon", "enable", TRACKPAD_HARDWARE_ID])

if __name__ == "__main__":
    disable_trackpad()
    time.sleep(30)
    enable_trackpad()
    print("Trackpad input restored.")
