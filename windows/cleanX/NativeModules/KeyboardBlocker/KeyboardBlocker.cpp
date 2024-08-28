#include "pch.h"
#include "KeyboardBlocker.h"
#include <winuser.h>

namespace winrt::MyApp::implementation
{
    // Global variable to hold the hook handle
    HHOOK hHook = nullptr;

    // Callback function that blocks all keyboard input
    LRESULT CALLBACK LowLevelKeyboardProc(int nCode, WPARAM wParam, LPARAM lParam)
    {
        if (nCode >= 0)
        {
            return 1; // Block input by returning a non-zero value
        }
        return CallNextHookEx(hHook, nCode, wParam, lParam);
    }

    // Function to block keyboard input
    void KeyboardBlocker::BlockKeyboard()
    {
        if (!hHook)
        {
            hHook = SetWindowsHookEx(WH_KEYBOARD_LL, LowLevelKeyboardProc, nullptr, 0);
        }
    }

    // Function to unblock keyboard input
    void KeyboardBlocker::UnblockKeyboard()
    {
        if (hHook)
        {
            UnhookWindowsHookEx(hHook);
            hHook = nullptr;
        }
    }
}
