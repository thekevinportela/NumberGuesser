import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
  Image,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
// import { BilboSwashCaps_400Regular } from "@expo-google-fonts/bilbo-swash-caps";
import LottieView from "lottie-react-native";

const background = require("../../assets/images/dice.jpg");

const StartGame = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState("");
  const resetNumber = () => {
    setNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert(
        `Entry is Invalid.`,
        `Please choose a number between 1 and 99.`,
        [{ text: "Okay", style: "default", onPress: resetNumber }]
      );
      return;
    } else {
      navigation.navigate("GameScreen", { chosenNumber });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer} pointerEvents={"none"}>
        <LottieView
          autoPlay
          // resizeMode="contain"
          style={{
            //   width: 1000,
            //   height: 1000,
            //   backgroundColor: "#eeeeee",
            // position: "absolute",
            // top: 0,
            // left: 0,
            backgroundColor: "transparent",
            // opacity: 0.5,
          }}
          source={require("../../assets/lotties/nightSky.json")}
        />
      </View>
      <Image style={styles.background} resizeMode="cover" source={background} />
      <Text
        style={{
          paddingBottom: 50,
          textAlign: "center",
          // color: "#9984E8",
          color: "#F4E396",
          fontWeight: "bold",
          fontSize: 70,
          fontFamily: "Megrim_400Regular",
        }}
      >
        Number Guesser
      </Text>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType={"number-pad"}
        onChangeText={setNumber}
        value={number}
      />
      <View style={{ paddingTop: 20 }}>
        <PrimaryButton title="Reset" onPress={resetNumber} />
      </View>
      <View style={{ paddingTop: 20 }}>
        <PrimaryButton title="Confirm" onPress={confirmInputHandler} />
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  animationContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: -1,
    // justifyContent: "center",
  },
  background: {
    // flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: -5,
    justifyContent: "center",
  },
  textInput: {
    // color: "#9984E8",
    color: "#F4E396",
    fontSize: 42,
    padding: 5,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#1D224190",
    height: 80,
    width: 80,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 2,
    // borderColor: "#9984E8",
    borderColor: "#F4E396",
  },
});
