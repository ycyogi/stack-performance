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

## CI: Build & upload to TestFlight (GitHub Actions)

This repo includes a GitHub Actions workflow: `.github/workflows/ios-testflight.yml`.

Recommended distribution for installing on your phone: **TestFlight**.

### Required GitHub Secrets

- `APP_STORE_CONNECT_KEY_ID`
- `APP_STORE_CONNECT_ISSUER_ID`
- `APP_STORE_CONNECT_API_KEY_P8` (base64 of your AuthKey_XXXX.p8)
- `APPLE_TEAM_ID`
- `IOS_BUNDLE_ID` (e.g. `com.yourcompany.stackperformance`)

For signing, this workflow uses **fastlane match** (recommended):
- `MATCH_GIT_URL` (private repo URL for match)
- `MATCH_PASSWORD`

After secrets are set, run the workflow manually (Actions → iOS (TestFlight) → Run workflow). Then install via the TestFlight app.

### Replace the dog image

Replace `assets/dog-placeholder.png` with your own image (keep the same filename), or update the `require(...)` in `src/screens/Dog1Screen.tsx`.
