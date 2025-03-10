import React, {useEffect} from 'react';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';
import {FocusAwareStatusBar} from './src/Component/UI/FocusAwareStatusBar';
import {store, persistor} from './src/Redux/store';
import RootStack from './src/Navigation/RootStack';
import UserAuth from './src/Navigation/UserAuth';
import { StatusBar } from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide splash screen
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

const MainNavigation = () => {
  const isAuth = useSelector(store => store?.isAuth);
  const userDetail = useSelector(store => store?.userDetails);

  console.log(userDetail?.type, 'userDetail?.type=====>');

  return (
    <NavigationContainer>
      <FocusAwareStatusBar />
      {isAuth ? (
        userDetail?.type == 1 ? (
          <RootStack />
        ) : (
          <>
            <UserAuth />
          </>
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};
