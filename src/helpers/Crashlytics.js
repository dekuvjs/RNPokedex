import crashlytics from '@react-native-firebase/crashlytics';

export const reportError = error => {
  crashlytics().recordError(error);
};
