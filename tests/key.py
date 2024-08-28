import keyboard
import time

def block_all_keys():
    # List of common keys to block, including the Windows key
    keys = [
        'esc', 'enter', 'tab', 'shift', 'ctrl', 'alt', 'space', 'backspace',
        'up', 'down', 'left', 'right', 'delete', 'home', 'end', 'page up', 'page down',
        'windows', 'win'
    ]
    
    # Block all alphanumeric keys
    for i in range(97, 123):  # a-z
        keyboard.block_key(chr(i))
    for i in range(48, 58):  # 0-9
        keyboard.block_key(chr(i))

    # Block all function keys (F1 to F12)
    for i in range(1, 13):
        keyboard.block_key(f'f{i}')
    
    # Block all other keys in the list
    for key in keys:
        keyboard.block_key(key)

def unblock_all_keys():
    # Unblock all alphanumeric keys
    for i in range(97, 123):  # a-z
        keyboard.unblock_key(chr(i))
    for i in range(48, 58):  # 0-9
        keyboard.unblock_key(chr(i))

    # Unblock all function keys (F1 to F12)
    for i in range(1, 13):
        keyboard.unblock_key(f'f{i}')
    
    # Unblock other keys
    keys = [
        'esc', 'enter', 'tab', 'shift', 'ctrl', 'alt', 'space', 'backspace',
        'up', 'down', 'left', 'right', 'delete', 'home', 'end', 'page up', 'page down',
        'windows', 'win'
    ]
    for key in keys:
        keyboard.unblock_key(key)

if __name__ == "__main__":
    # Block all keys
    block_all_keys()
    print("Keyboard blocked for 30 seconds.")
    
    # Wait for 30 seconds
    time.sleep(30)
    
    # Unblock all keys
    unblock_all_keys()
    print("Keyboard unblocked.")
