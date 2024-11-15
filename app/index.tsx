import { Text, View } from "react-native";
import { Provider } from "react-redux"
import { store } from "@/app/store";
import HomeScreen from "@/app/screens/HomeScreen";
import MapScreen from "@/app/screens/MapScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStaticNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options= {{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="MapScreen" 
              component={MapScreen} 
              options= {{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
