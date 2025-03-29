import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './src/navigation/AuthStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
