#include "pch.h"
#include "KeyboardBlockerPackageProvider.h"
#include "KeyboardBlocker.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::MyApp::implementation
{
    void KeyboardBlockerPackageProvider::CreatePackage(IReactPackageBuilder const& packageBuilder) noexcept
    {
        packageBuilder.AddModule(L"KeyboardBlocker", winrt::Microsoft::ReactNative::MakeModuleProvider<KeyboardBlocker>());
    }
}
