import { NavigationContainer } from '@react-navigation/native';
import { GuestAppNavigator } from './src/base/GuestAppNavigator';
import { EventContextProvider } from './src/context/EventContext';
import { HeaderContextProvider } from './src/context/HeaderContext';

export default function App() {

  return (
    <NavigationContainer>
      <HeaderContextProvider>
        <EventContextProvider>
          <GuestAppNavigator />
        </EventContextProvider>
      </HeaderContextProvider>
    </NavigationContainer>
  )
}
