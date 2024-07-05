import React, { useState } from "react";

import { Text, View } from "react-native";
import CustomInput from "ui-kit/custom-input/custom-input.component";
import { CustomButton } from "ui-kit/custom-button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTypedDispatch } from "store/index";
import { useStyles } from "./login.styles";

const LoginScreen = () => {
  const styles = useStyles();
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const dispatch = useTypedDispatch();

  const handleGoLogin = () => {
  };


  const handleValidation = () => {
    let isValid = true;
    // if (!emailRegexp.test(email)) {
    //   setEmailError("Please enter valid email address");
    //   isValid = false;
    // }

    return isValid;
  };

  const handleLogin = async () => {
    const isValidForm = handleValidation();
    if (!isValidForm) {
      return;
    }
    setIsLoading(true);
    try {
      // await api.auth.login({ email });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // @ts-ignore
      setEmailError(error?.response?.data?.message ?? "");
    }
  };

  const handleSubmitCode = async () => {
    const isValidForm = handleValidation();
    if (!isValidForm) {
      return;
    }
    let apiUserMeRes;
    let apiUserLoginRes;
    setIsLoading(true);
    try {
      // apiUserLoginRes = await api.auth.checkCode({ email, code: codeVerification });
      // await asyncStorageService.setAccessToken(apiUserLoginRes.data.access_token);

      try {
        // apiUserMeRes = await api.auth.getMe();
      } catch (error) {
        return Promise.reject(error);
      }
      // dispatch(userActions.userLogin(apiUserMeRes.data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // @ts-ignore
      // setCodeVerificationError(error?.response?.data?.message ?? "");
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.centeredView}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      scrollEnabled>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{"WelcomeBack"}</Text>
        </View>
        <View style={styles.nameInputContainer}>
          <CustomInput
            name="Username"
            value={userName}
            onChangeValue={(value: string) => {
              setEmailError("");
              setUserName(value);
            }}
            keyboardType="email-address"
            placeholder="tom@gmail.com"
            errorMessage={emailError}
          />
        </View>
        <View style={styles.signUpButton}>
          <CustomButton
            title="Login"
            isLoading={isLoading}
            onPress={handleLogin}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
