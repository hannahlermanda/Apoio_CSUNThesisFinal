import { Text, View } from "react-native";
import { Provider } from "react-redux"
import { store } from "@/app/store";
import HomeScreen from "@/app/screens/HomeScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
//1) Set up  Redux


export default function App() {
  return (
    <Provider store={store}>
        <SafeAreaProvider>
          <HomeScreen />
        </SafeAreaProvider>
    </Provider>
  );
}
