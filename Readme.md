# Youtube Player

It's a simple project to better understand how to work with youtube players

## ✔️ Techniques and technologies used

- `Using React Native with Expo`: The expo makes setting up the environment easy;
- `Use the library React Native Youtube-iframe`: A wrapper of the **Youtube-iframe API** built for react native.
 -   ✅ Works seamlessly on both ios and android platforms
-   ✅ Does not rely on the native youtube service on android (prevents unexpected crashes, works on phones without the youtube app)
-   ✅ Uses the webview player which is known to be more stable compared to the native youtube app
-   ✅ Access to a vast API provided through the iframe youtube API
-   ✅ Supports multiple youtube player instances in a single page
-   ✅ Fetch basic video metadata without API keys (uses oEmbed)
-   ✅ Works on modals and overlay components
-   ✅ Expo support
	- **link** https://lonelycpp.github.io/react-native-youtube-iframe/

- `Use the ScreenOrientation from expo`: Screen Orientation is defined as the orientation in which graphics are painted on the device. For example, the figure below has a device in a vertical and horizontal physical orientation, but a portrait screen orientation.
	-  **link** https://docs.expo.dev/versions/latest/sdk/screen-orientation/

## 🛠️ Open and run the project

To install React Native with Expo on your OS, follow the steps in https://docs.expo.dev/get-started/installation/ and https://docs.expo.dev/get-started/create-a-new-app/
##### After that, clone the repository and:
- run pm install or yarn
- run expo start or yarn start
