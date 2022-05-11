import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import LottieView from "lottie-react-native";

function rand(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomGuess = (min: number, max: number) => {
  const rndNum = rand(min, max);

  return rndNum;
};

let minBoundary = 1;
let maxBoundary = 99;
const GameScreen = ({ route, chosenNumber, onPress }: any) => {
  // const { chosenNumber } = route.params;
  const navigation = useNavigation();

  const initialGuess = getRandomGuess(minBoundary, maxBoundary);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    if (currentGuess === chosenNumber) {
      setGameOver(true);
      minBoundary = 1;
      maxBoundary = 99;
    }
  }, [currentGuess, chosenNumber]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "higher" && currentGuess > chosenNumber)
    ) {
      Alert.alert("BITCH!", "Stop Lying.");
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    console.log("", { minBoundary, maxBoundary });
    const newRndNumber = getRandomGuess(minBoundary, maxBoundary);

    setCurrentGuess(newRndNumber);
  };
  console.log("currentGuess", currentGuess);
  const playAgainPress = () => {
    setTimeout(() => setCurrentGuess(initialGuess), 1000);
    setGameOver(false);
    onPress();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // colors={["#13254E", "#FB369E"]}
        colors={["#1D2241", "#FB369E"]}
        style={styles.background}
      />
      <Text
        style={{
          paddingBottom: 80,
          fontSize: 45,
          fontWeight: "600",
          color: "#F4E396",
          fontFamily: "Megrim_400Regular",
        }}
      >
        Let me guess...
      </Text>

      <LinearGradient
        colors={["#F4E396", "#FB369E"]}
        style={styles.sunBackground}
      >
        <View style={styles.sun}>
          <View
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              zIndex: -1,
              // borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LottieView
              autoPlay
              resizeMode="contain"
              speed={0.06}
              style={{
                // left: "2%",
                width: 420,
                height: 420,
                //   backgroundColor: "#eeeeee",
                // position: "absolute",
                // top: 0,
                // left: 0,
                backgroundColor: "transparent",
              }}
              source={require("../../assets/lotties/9606-wave-loader.json")}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              height: 80,
              width: 80,
              borderRadius: 40,
              backgroundColor: "#1D2241",
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 40,
                fontWeight: "700",
                color: "#F4E396",
                // paddingBottom: 30,
              }}
            >
              {currentGuess}
            </Text>
          </View>
          {!gameOver ? (
            <>
              <Text
                style={{
                  textAlign: "center",
                  color: "#1D2241",
                  fontSize: 22,
                  paddingBottom: 15,
                }}
              >
                HIGHER OR LOWER?
              </Text>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity
                  onPress={nextGuessHandler.bind(this, "higher")}
                >
                  <Entypo
                    name="chevron-up"
                    size={60}
                    color="#1D2241"
                    style={{ paddingRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={nextGuessHandler.bind(this, "lower")}
                >
                  <Entypo
                    name="chevron-down"
                    size={60}
                    color="#1D2241"
                    style={{ paddingLeft: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <Text
                style={{ color: "#1D2241", fontSize: 40, paddingBottom: 15 }}
              >
                GAME OVER
              </Text>
              <PrimaryButton title="Play Again" onPress={playAgainPress} />
            </>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  sun: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  sunBackground: {
    backgroundColor: "#F4E396",
    borderRadius: 150,
  },
});
