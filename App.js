import { NavigationContainer } from '@react-navigation/native';
import { GuestAppNavigator } from './src/base/GuestAppNavigator';
import { HeaderContextProvider } from './src/context/HeaderContext';

export default function App() {

  return (
    <NavigationContainer>
      <HeaderContextProvider>
        <GuestAppNavigator />
      </HeaderContextProvider>
    </NavigationContainer>
  )
}
