# StackPerformance

Bare React Native app showing:

- Bottom tabs: **Home** + **Profile**
- Home button launches a 3-screen stack flow
  - Screen 1 shows a placeholder dog image
  - Next → Next → Done returns back to Home

## Run

### Install JS deps

```bash
npm install
```

### iOS

Prereqs: Xcode + CocoaPods.

```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

### Replace the dog image

Replace `assets/dog-placeholder.png` with your own image (keep the same filename), or update the `require(...)` in `src/screens/Dog1Screen.tsx`.
