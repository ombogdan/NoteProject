import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
      scrollContainer: {
        backgroundColor: theme.palette.white,
        height: scale(400)
      },
      userNameText: {
        fontWeight: "800",
        fontSize: scale(30),
        lineHeight: scale(36),
        color: theme.palette.textDefault
      },
      bottomContainer: {
        height: scale(30)
      },
      buttonsContainer: {
        marginTop: scale(4)
      },
      buttonContainer: {
        marginTop: scale(10),
        height: scale(64)
      },
      logoutContainer: {
        marginTop: scale(25)
      },
      buttonBoxStyle: {
        backgroundColor: theme.palette.transparentGray,
        borderRadius: scale(15),
        flexDirection: "row"
      },
      closeButton: {
        position: "absolute",
        top: scale(-331),
        left: scale(20)
      },
      closeIcon: {
        height: scale(45),
        width: scale(45)
      },
      lottieAnim: {
        height: scale(430)
      }
    }
  )
);
