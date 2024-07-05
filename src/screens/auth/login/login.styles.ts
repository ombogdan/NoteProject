import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
    headerContainer: {
      alignItems: "flex-start"
    },
    headerText: {
      fontSize: scale(30),
      fontWeight: "800",
      marginLeft: scale(10),
      color: theme.palette.textDefault
    },
    buttonContainer: {
      marginBottom: scale(20),
      alignItems: "center"
    },
    divider: {
      height: scale(50)
    },
    btnBox: {
      width: "95%",
      alignItems: "flex-start"
    },
    buttonBox: {
      justifyContent: "flex-start",
      marginLeft: scale(60)
    },
    iconContainer: {
      marginRight: scale(10)
    },
    icon: {
      height: scale(18),
      width: scale(18)
    },
    centeredView: {
      flex: 1
    },
    nameInputContainer: {
      marginTop: scale(20)
    },
    alreadyAUserContainer: {
      marginTop: scale(15),
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-end"
    },
    alreadyAUserText: {
      color: theme.palette.textDefault,
      fontWeight: "500",
      fontSize: scale(15),
    },
    loginText: {
      color: theme.palette.textDefault,
      fontWeight: "bold",
      fontSize: scale(15)
    },
    bottomTextContainer: {
      marginTop: scale(35),
      marginBottom: scale(10),
      alignItems: "center",
      justifyContent: "center"
    },
    bottomTextMain: {
      fontSize: scale(15),
      textAlign: "center",
      color: theme.palette.textDefault
    },
    bottomTextBold: {
      fontWeight: "700",
      fontSize: scale(15),
      padding: scale(50),
      color: theme.palette.textDefault
    },
    signUpButton: {
      marginTop: scale(20),
      marginBottom: scale(25)
    },
    verificationCodeText: {
      fontWeight: "600",
      fontSize: scale(15),
      lineHeight: scale(18),
      color: theme.palette.textDefault,
      opacity: 0.8,
    },
    verificationCodeContainer:{
      marginTop: scale(10),
      width: scale(300),
      marginLeft: scale(15),
    },
    submitButtonContainer:{
      marginTop: scale(74),
      marginBottom: scale(25)
    },
    lottieAnim: {
      height: scale(500)
    }
  })
);
