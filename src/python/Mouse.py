# Mouse (and keyboard) block lol, couldnt get it to work blokcing only mouse unfortunately 
import ctypes
import time

user32 = ctypes.WinDLL('user32', use_last_error=True)

def block_mouse_input():
    print("Blocking all input. Press Ctrl+C to terminate the script.")
    user32.BlockInput(True)
    try:
        for i in range(30):
            print(f"Input blocked! Enabling again in {30-i} seconds.")
            time.sleep(1)
    except KeyboardInterrupt:
        print("Input blocking interrupted by user.")
    finally:
        user32.BlockInput(False)
        print("Input unblocked.")

if __name__ == "__main__":
    block_mouse_input()
