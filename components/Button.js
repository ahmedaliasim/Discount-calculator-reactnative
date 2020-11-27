import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
 
  button: {
    backgroundColor: "#2a6948",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
  
 
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];
  const buttonStyles1 = [styles.button1];
  
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}> 
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
