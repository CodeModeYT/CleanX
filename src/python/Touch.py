# Touchscreen block 
import subprocess
import time
# Replace with your touch device's hardware ID (you can find it in device manager)
TOUCH_DEVICE_HARDWARE_ID = "YOUR_TOUCH_DEVICE_HARDWARE_ID"

def run_command(command):
    try:
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Command failed with error: {e}")

def disable_touch_input():
    print("Disabling touch input...")
    run_command(["devcon", "disable", TOUCH_DEVICE_HARDWARE_ID])

def enable_touch_input():
    print("Enabling touch input...")
    run_command(["devcon", "enable", TOUCH_DEVICE_HARDWARE_ID])

if __name__ == "__main__":
    disable_touch_input()
    time.sleep(30) 
    enable_touch_input()
    print("Touch input restored.")
