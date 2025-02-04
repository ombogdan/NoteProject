import React from "react";
import { Text, TextInput, View } from "react-native";
import { CustomInputProps } from "ui-kit/custom-input/custom-input.types";
import { useTheme } from "shared/theme/ThemeProvider";
import { useStyles } from "./custom-input.styles";

const CustomInput = ({
                       value,
                       name,
                       onChangeValue,
                       errorMessage,
                       styleContainer,
                       styleInput,
                       placeholder,
                       keyboardType = "default",
                       multiline
                     }: CustomInputProps) => {
  const styles = useStyles({ value, error: errorMessage, multiline });
  const { theme } = useTheme();

  return (
    <View style={[styles.container, styleContainer]}>
      {name && (
        <View style={styles.label}>
          <Text style={styles.labelText}>
            {name}
          </Text>
        </View>
      )}
      <View style={[styles.inputContainer, styleInput]}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeValue}
          value={value}
          secureTextEntry={keyboardType === 'visible-password'}
          keyboardType={keyboardType}
          placeholder={placeholder}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          placeholderTextColor={theme.palette.textDefaultTransparent}
        />
      </View>
      {errorMessage && (
        <Text style={styles.errorMessage}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default CustomInput;
