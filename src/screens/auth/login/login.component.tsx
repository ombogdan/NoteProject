import React, { useState } from "react";

import { SafeAreaView, Text, View } from "react-native";
import CustomInput from "ui-kit/custom-input/custom-input.component";
import { CustomButton } from "ui-kit/custom-button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTypedDispatch } from "store/index";
import { useStyles } from "./login.styles";
import { asyncStorageService } from "services/async-storage-service";
import { userActions } from "store/slices/user";

const LoginScreen = () => {
  const styles = useStyles();
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useTypedDispatch();

  const handleValidation = () => {
    let isValid = true;
    if (userName.length < 2) {
      setUsernameError("Please enter minimum 2 characters");
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError("Please enter minimum 6 characters");
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async () => {
    const isValidForm = handleValidation();
    if (!isValidForm) {
      return;
    }
    setIsLoading(true);
    try {
      setTimeout(async () => {
        await asyncStorageService.setAccessToken("apiUserLoginRes.data.access_token");
        dispatch(userActions.userLogin());
        setIsLoading(false);
      }, 1400);
    } catch (error) {
      setIsLoading(false);
      // @ts-ignore
      setUsernameError(error?.response?.data?.message ?? "");
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.centeredView}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      scrollEnabled>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{"WelcomeBack"}</Text>
        </View>
        <View>
          <View style={styles.nameInputContainer}>
            <CustomInput
              name="Username"
              value={userName}
              onChangeValue={(value: string) => {
                setUsernameError("");
                setUserName(value);
              }}
              keyboardType="email-address"
              placeholder="tom@gmail.com"
              errorMessage={usernameError}
            />
          </View>
          <View style={styles.nameInputContainer}>
            <CustomInput
              name="Password"
              value={password}
              onChangeValue={(value: string) => {
                setPasswordError("");
                setPassword(value);
              }}
              keyboardType="visible-password"
              placeholder="****"
              errorMessage={passwordError}
            />
          </View>
        </View>
        <View style={styles.signUpButton}>
          <CustomButton
            title="Login"
            isLoading={isLoading}
            onPress={handleLogin}
          />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
