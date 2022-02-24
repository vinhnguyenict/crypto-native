import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {enableFreeze} from 'react-native-screens';

import ThemeProvider from './src/contexts/ThemeContext';
import AuthProvider from './src/contexts/AuthContext';
// import {LanguageProvider} from './src/contexts/LanguageContext';

import BottomTabs from './src/navigation/BottomTabs';
import {
  SplashScreen,
  NotificationScreen,
  SearchScreen,
  ScanScreen,
  ProfileScreen,
  LoginScreen,
  RegisterScreen,
  ConfirmCodeRegister,
  ForgotPasswordScreen,
  SecurityScreen,
  SettingScreen,
  PreferenceSettingScreen,
  DepositScreen,
  WithdrawScreen,
  TransferScreen,
} from './src/screens';
import {NAVIGATES} from './src/config';

const queryClient = new QueryClient();
const AppStack = createNativeStackNavigator();
enableFreeze(true);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          {/* <LanguageProvider> */}
          <NavigationContainer>
            <AppStack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Splash"
            >
              <AppStack.Screen name="Splash" component={SplashScreen} />
              <AppStack.Screen name="App" component={BottomTabs} />
              <AppStack.Screen name={NAVIGATES.SCAN} component={ScanScreen} />
              <AppStack.Screen
                name={NAVIGATES.PROFILE}
                component={ProfileScreen}
              />
              <AppStack.Screen name={NAVIGATES.LOGIN} component={LoginScreen} />
              <AppStack.Screen
                name={NAVIGATES.REGISTER}
                component={RegisterScreen}
              />
              <AppStack.Screen
                name={NAVIGATES.CONFIRM_CODE}
                component={ConfirmCodeRegister}
              />
              <AppStack.Screen
                name={NAVIGATES.FORGOT_PASSWORD}
                component={ForgotPasswordScreen}
              />
              <AppStack.Screen
                name={NAVIGATES.SECURITY}
                component={SecurityScreen}
              />
              <AppStack.Screen
                name={NAVIGATES.SETTING}
                component={SettingScreen}
              />
              <AppStack.Screen
                name={NAVIGATES.DEPOSIT}
                component={DepositScreen}
              />
              <AppStack.Screen
                name={NAVIGATES.WITHDRAW}
                component={WithdrawScreen}
              />
              <AppStack.Screen
                name={NAVIGATES.TRANSFER}
                component={TransferScreen}
              />
              <AppStack.Screen
                name={NAVIGATES.PREFERENCE_SETTING}
                component={PreferenceSettingScreen}
              />
              <AppStack.Screen
                name={NAVIGATES.NOTIFICATION}
                component={NotificationScreen}
              />
              <AppStack.Screen
                name={NAVIGATES.SEARCH}
                component={SearchScreen}
              />
            </AppStack.Navigator>
          </NavigationContainer>
          {/* </LanguageProvider> */}
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
