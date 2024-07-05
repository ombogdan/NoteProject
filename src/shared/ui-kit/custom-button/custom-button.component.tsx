import React from "react";
import { View, Pressable, Text, Image } from "react-native";
import { ButtonProps } from "shared/ui-kit/custom-button/custom-button.types";
import { RIGHT_ARROW_ICON } from "constants/index";
import { BallIndicator } from "react-native-indicators";
import { useStyles } from "./custom-button.styles";

const CustomButton = ({
                        title,
                        icon,
                        onPress,
                        containerStyle,
                        buttonBoxStyle,
                        disabled = false,
                        isLoading = false,
                        settings,
                        textStyles
                      }: ButtonProps) => {
  const styles = useStyles();

  const onButtonPress = () => {
    if (!disabled) {
      onPress();
    }
  };

  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <Pressable
        onPress={onButtonPress}
        style={[styles.buttonBox, buttonBoxStyle]}
        disabled={disabled || isLoading}>
        {!settings ?
          <View>
            {icon &&
              <View>
                {icon}
              </View>
            }
            {isLoading ?
              <BallIndicator color='white' size={30}/>
              :
              <Text style={[styles.btnText, textStyles]}>{title}</Text>
            }
          </View>
          :
          <View style={styles.mainContainer}>
            {isLoading ?
              <BallIndicator color='black' size={30}/>
              :
              <Text style={[styles.btnTextBlack, textStyles]}>{title}</Text>
            }
            <Image source={RIGHT_ARROW_ICON} style={styles.rightArrowIcon} resizeMode="contain" />
          </View>
        }
      </Pressable>
    </View>
  );
};

export default CustomButton;
