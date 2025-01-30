# React Native Timer App

This is a **React Native** Timer app that allows users to create, manage, and track timers by category. It includes features such as starting, pausing, resetting, and deleting timers. The app also supports bulk actions for timers in the same category. When a timer completes, a congratulatory message pops up, and the timer can be deleted.

## Features

- **Create Timers**: Users can create new timers with a name, duration (in seconds), and category.
- **Manage Timers**: Timers can be started, paused, and reset based on their current state.
- **Bulk Actions**: Users can start, pause, or reset all timers within a specific category at once.
- **Timer Progress**: Each timer has a progress bar showing the remaining time.
- **Completion Notifications**: A modal congratulates users when a timer completes.
- **Delete Timers**: After a timer is completed, users can delete it.
- **Categories**: Timers can be grouped into categories for easy management.

---

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start


# Using npm
npm run android

# OR using Yarn
yarn android
