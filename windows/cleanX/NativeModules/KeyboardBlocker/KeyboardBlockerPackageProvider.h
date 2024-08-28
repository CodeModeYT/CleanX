#pragma once

#include "winrt/Microsoft.ReactNative.h"

namespace winrt::MyApp::implementation
{
    struct KeyboardBlockerPackageProvider : winrt::implements<KeyboardBlockerPackageProvider, winrt::Microsoft::ReactNative::IReactPackageProvider>
    {
        void CreatePackage(winrt::Microsoft::ReactNative::IReactPackageBuilder const& packageBuilder) noexcept;
    };
}
