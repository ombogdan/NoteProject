import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";
import { SCREEN_WIDTH } from "constants/index";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
    container: {
      height: scale(50),
      backgroundColor: theme.palette.white,
      width: SCREEN_WIDTH,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 100
    },
    rightContainer: {
      flexDirection: "row"
    },
    resetIcon: {
      height: scale(20),
      width: scale(20),
      marginLeft: scale(16),
      transform: [{ rotate: "180deg" }],
    },
    name: {
      fontWeight: "bold",
      fontSize: scale(16)
    }
  })
);
