This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


## Step 3:Start JSON server

1. create a db.json file to save json data
2. npm i json-server
3. json-server --watch db.json --port 8000 --host YOUR_DEVICE_IP_ADDRESS
4. #make sure both devices( mobile and pc connected the same network)
   
                                     
                                                                       

## Step 4: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

#OUTPUT
User List
![Screenshot_20240122_141903_CRUDOperation](https://github.com/Jagtap01sumit/React-Native-CRUD-Operations/assets/109575992/95022c97-b91b-4935-b1e3-0604c416688a) 

Add new User
![Screenshot_20240122_142052_CRUDOperation](https://github.com/Jagtap01sumit/React-Native-CRUD-Operations/assets/109575992/5f6f92bf-ce36-45d4-9d0c-ff9c0281a376)

Delete User
![Screenshot_20240122_141911_CRUDOperation](https://github.com/Jagtap01sumit/React-Native-CRUD-Operations/assets/109575992/409a7368-cb08-4ca6-a75d-af215146d72e)

Update User Data
![Screenshot_20240122_142116_CRUDOperation](https://github.com/Jagtap01sumit/React-Native-CRUD-Operations/assets/109575992/4c85fc45-5a8f-48cf-b189-355859073755)









