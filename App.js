import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SettingsProvider } from './src/context/settings';
import { Navigation } from './src/navigation';

export default () => {
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <Navigation />
      </SettingsProvider>
    </SafeAreaProvider>
  );
}
