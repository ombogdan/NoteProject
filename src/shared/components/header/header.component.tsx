import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { LIKE_ICON, RESET_CHAT_ICON, SETTINGS_ICON } from "constants/index";
import { navigate } from "shared/navigation/root-navigator.config";
import { CustomHeaderProps } from "components/header/header.types";
import { AppUserRoutes } from "shared/navigation/app-user";
import { useStyles } from "./header.styles";

const Header = ({ onResetChat, isLoading }: CustomHeaderProps) => {
  const styles = useStyles();

  const handlePressLike = () => {
    navigate(AppUserRoutes.MoodTracker);
  };

  const handlePressSettings = () => {
    navigate(AppUserRoutes.Settings);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onResetChat} disabled={isLoading}>
        <Image source={RESET_CHAT_ICON} style={styles.resetIcon} resizeMode="contain" />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={handlePressLike}>
          <Image source={LIKE_ICON} style={styles.musicIcon} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressSettings}>
          <Image source={SETTINGS_ICON} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Header;
