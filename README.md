# MedTech App

The application is built with Expo Router and React Native and currently runs with local prototype data. It does not yet connect to a backend or perform production facial analysis.

## Features

- Face-analysis entry screen with progress and landmark visualisation components.
- Personalised treatment-plan screen with selectable exercise groups.
- Recovery dashboard with:
	- recovery radar chart;
	- date selector;
	- progress photo placeholder;
	- symmetry and synkinesis score cards;
	- recovery trend chart; and
	- recovery goal progress.
- Portrait mobile layout with web support through React Native Web.
- Typed Expo Router routes and TypeScript source code.

## Technology

- Expo SDK 57
- React 19
- React Native 0.86
- Expo Router
- TypeScript
- React Native SVG and Reanimated

## Requirements

Install the following before starting development:

- Node.js compatible with the installed Expo SDK. Node.js 20 LTS or newer is recommended.
- npm, included with Node.js.
- Git, if you are cloning the repository.
- For a physical-device workflow: the Expo Go app on an Android or iOS device.
- For Android development: Android Studio, an Android SDK, and an Android emulator.
- For iOS development: macOS with Xcode and an iOS Simulator. iOS simulators cannot be run on Windows.

You can verify the basic tools with:

```powershell
node --version
npm --version
```

## Setup

From the repository root, move into the Expo project and install dependencies:

```powershell
cd my-app
npm install
```

No environment file or API key is required for the current prototype.

## Start the app

Start the Expo development server:

```powershell
npm start
```

Expo will print a QR code and keyboard shortcuts in the terminal. Use one of these workflows:

- **Expo Go:** Scan the QR code with Expo Go while the phone and computer are on the same network.
- **Android emulator:** Start an emulator in Android Studio, then run `npm run android`.
- **iOS Simulator:** On macOS, start a simulator and run `npm run ios`.
- **Web:** Run `npm run web` to open the React Native Web version in a browser.

If the device cannot reach the development server over the local network, start Expo with a tunnel:

```powershell
npx expo start --tunnel
```

## Available commands

Run these commands from `my-app`:

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Expo development server. |
| `npm run android` | Start Expo and open the Android target. |
| `npm run ios` | Start Expo and open the iOS target. |
| `npm run web` | Start the web target. |
| `npm run lint` | Run Expo's lint checks. |
| `npm run reset-project` | Move the starter example into `app-example` and create a blank `app` directory. Use only when intentionally resetting the template. |

## User flow and routes

The app uses file-based routing under `my-app/src/app`:

1. `/` displays the face-analysis experience.
2. The analysis flow can continue to `/treatment-plan`.
3. The treatment-plan screen lets the user select exercise groups and continue to `/dashboard`.
4. `/dashboard` displays recovery analytics and provides a **Retake Analysis** action that returns to `/`.

The root layout hides the default navigation header. Add new screens as files in `src/app` and navigate with Expo Router.

## Project structure

```text
my-app/
├── assets/images/          App icons, splash assets, and prototype imagery
├── src/app/                Expo Router screens and root layout
│   ├── _layout.tsx         Global stack configuration
│   ├── index.tsx           Face-analysis entry route
│   ├── treatment-plan.tsx  Exercise selection route
│   └── dashboard.tsx       Recovery analytics route
├── src/components/        Reusable UI components by feature
├── src/constants/          Theme and shared constants
├── src/hooks/              Reusable React hooks
├── src/global.css          Global web styles
├── app.json                Expo application configuration
├── package.json            Scripts and dependencies
└── tsconfig.json           TypeScript configuration
```

## Development notes

- Use the `@/` import alias for modules under `my-app/src`.
- Keep feature-specific components in the matching `src/components` subdirectory.
- The app is configured for portrait orientation.
- Expo typed routes and the React Compiler are enabled in `app.json`.
- Dashboard scores, chart values, dates, user details, and recovery progress are currently hard-coded in `src/app/dashboard.tsx`.
- Treatment-plan exercise definitions are currently hard-coded in `src/app/treatment-plan.tsx`.
- Replace prototype values with service or state-layer data before using the app with real patient information.

## Quality checks

Run linting after making changes:

```powershell
cd my-app
npm run lint
```

For a quick route smoke test, start the app and open `/`, `/treatment-plan`, and `/dashboard` on the target platform. Check that scrolling works, exercise selection updates the summary, and both navigation buttons resolve to the expected screen.

## Troubleshooting

### Expo cannot connect to the device

Confirm the phone and computer are on the same network. If that is not possible, use `npx expo start --tunnel`. Corporate or public networks may block device discovery.

### The bundler is using stale data

Stop the development server and restart it with a cleared cache:

```powershell
npx expo start --clear
```

### Android or iOS commands cannot find a simulator

Ensure the relevant emulator or simulator is installed, booted, and visible to the operating system before running the platform command. Windows supports Android tooling but not the iOS Simulator.

### Dependency or native-module problems

Install dependencies from `my-app` and use Expo's version-aware installer when adding Expo packages:

```powershell
npm install
npx expo install <package-name>
```

## Data, privacy, and production readiness

This repository is a UI prototype. It currently has no authentication, persistence, API integration, consent flow, clinical validation, or production-grade handling of health data. Do not enter real patient information or treat the displayed scores and recommendations as medical advice.

Before production use, add a reviewed backend contract, secure authentication and storage, explicit consent and privacy controls, validated clinical logic, error/loading states for remote data, and platform release configuration.

## License

See [my-app/LICENSE](my-app/LICENSE) for the project license.

## Further reading

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router documentation](https://docs.expo.dev/router/introduction/)
- [Expo SDK 57 documentation](https://docs.expo.dev/versions/v57.0.0/)
- [React Native documentation](https://reactnative.dev/docs/getting-started)