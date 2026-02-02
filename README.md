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

### iOS (local dev)

Prereqs: Xcode + CocoaPods.

```bash
cd ios
pod install
cd ..
npx react-native start
# in another terminal:
npx react-native run-ios --simulator "iPhone 17 Pro" --no-packager
```

## CI: Build an Ad Hoc IPA (GitHub Actions)

This repo includes a GitHub Actions workflow:
- `.github/workflows/ios-adhoc-ipa.yml`

This produces a **Release Ad Hoc** `.ipa` as a workflow artifact (no App Store / no TestFlight).

### Required GitHub Secrets

- `APPLE_TEAM_ID` (your team id)
- `IOS_BUNDLE_ID` (e.g. `org.reactjs.native.example.StackPerformance`)
- `IOS_SIGNING_CERT_P12_BASE64` (base64 of your exported `Apple Distribution` .p12)
- `IOS_SIGNING_CERT_PASSWORD` (password you used when exporting the .p12)
- `IOS_ADHOC_PROFILE_BASE64` (base64 of the downloaded Ad Hoc `.mobileprovision`)

After secrets are set, run the workflow manually (Actions → **iOS (Ad Hoc IPA)** → Run workflow). Download the IPA artifact from the run.

### Replace the dog image

Replace `assets/dog-placeholder.png` with your own image (keep the same filename), or update the `require(...)` in `src/screens/Dog1Screen.tsx`.
