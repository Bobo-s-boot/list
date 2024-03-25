import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fincrm.Fincrm',
  appName: 'Fincrm',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
    GoogleAuth: {
      scopes: ['profile', 'email'],
      clientId:
        '1054855731199-h3ilcl8hnovherlmk69fetsonteht5jo.apps.googleusercontent.com',
      androidClientId:
        '1054855731199-h3ilcl8hnovherlmk69fetsonteht5jo.apps.googleusercontent.com',
      iosClientId:
        '1054855731199-ohqimfmfvbo1a5q45fhpb6ubn5bohb23.apps.googleusercontent.com',
      serverClientId:
        '1054855731199-h3ilcl8hnovherlmk69fetsonteht5jo.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
