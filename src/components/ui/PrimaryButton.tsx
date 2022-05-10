import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface PrimaryButtonProps {
  title?: string;
  onPress?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress }) => {
  const { height, width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{
        height: height * 0.06,
        width: width * 0.8,
        // backgroundColor: '#1D2241',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
      onPress={onPress}
    >
      <LinearGradient
        // Background Linear Gradient
        // colors={["#9984E870", "#9984E810", "#9984E870"]}
        // colors={["#1D224190", "#9984E810", "#1D224190"]}
        // colors={["#9984E880", "#9984E8"]}
        colors={["#F4E396", "#F4E39650"]}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            // color: "#1D2241",
            color: "#1D2241",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
