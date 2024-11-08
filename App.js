import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
        <ModalPortal />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
