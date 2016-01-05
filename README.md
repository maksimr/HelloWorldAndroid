## HelloWorldAndroid


## Prepare

Before start to develop you should [setup Android environment](https://facebook.github.io/react-native/docs/android-setup.html)
After setup we should install project dependencies and create android emulator

```sh
npm install
npm run emulator-create-android
```


## Develop

```sh
npm start
npm run emulator-android
npm run develop-android
```


## Android

```sh
android update sdk --no-ui -t \
tools,\
platform-tool,\
build-tools-21.0.1,\
extra-android-support,\
extra-android-m2repository,\
sys-img-x86-android-23,\
sys-img-x86_64-android-23
```

## Debugging

Official [documentation](https://facebook.github.io/react-native/docs/debugging.html)
F2 open debug menu for android emulator
