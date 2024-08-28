#pragma once

#include "winrt/Microsoft.ReactNative.h"

namespace winrt::MyApp::implementation
{
    struct KeyboardBlocker
    {
        KeyboardBlocker() = default;

        static void BlockKeyboard();
        static void UnblockKeyboard();
    };
}
