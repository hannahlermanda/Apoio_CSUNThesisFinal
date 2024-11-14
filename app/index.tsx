import { Text, View } from "react-native";
import { Provider } from "react-redux"
import { store } from "@/app/store";
//1) Set up  Redux


export default function App() {
  return (
    <Provider store={store}>
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Let's build UBER! :D</Text>
    </View>
    </Provider>
  );
}
