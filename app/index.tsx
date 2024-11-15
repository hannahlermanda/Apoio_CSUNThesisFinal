import { Text, View } from "react-native";
import { Provider } from "react-redux"
import { store } from "@/app/store";
import HomeScreen from "@/app/screens/HomeScreen";
//1) Set up  Redux


export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
