import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RIGHT_ARROW_ICON } from "constants/index";
import { goBack } from "shared/navigation/root-navigator.config";
import { CustomHeaderProps } from "components/header/header.types";
import { useStyles } from "./header.styles";

const Header = ({ name }: CustomHeaderProps) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image source={RIGHT_ARROW_ICON} style={styles.resetIcon} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.resetIcon} />
    </View>
  );
};


export default Header;
