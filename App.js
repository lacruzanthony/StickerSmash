import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
const PlaceHolderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceHolderImage} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
F;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 16,
  },
});
