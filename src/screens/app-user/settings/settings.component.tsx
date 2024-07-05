import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useStyles } from "./settings.styles";
import { useTypedDispatch, useTypedSelector } from "store/index";
import { selectUserName } from "store/selectors/user";
import { CustomButton } from "ui-kit/custom-button";
import { authThunks } from "store/thunks";

export const SettingsScreen = () => {
  const styles = useStyles();
  const userName = useTypedSelector(selectUserName);
  const dispatch = useTypedDispatch();

  const handleLogout = async () => {
    await dispatch(authThunks.userLogout());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.userName}>{userName}</Text>
        <CustomButton
          title="Logout"
          onPress={handleLogout}
        />
      </View>
    </SafeAreaView>
  );
};
