import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
    centeredView: {
      flex: 1
    },
    headerContainer: {
      alignItems: "flex-start"
    },
    headerText: {
      fontSize: scale(30),
      fontWeight: "800",
      marginLeft: scale(10),
      color: theme.palette.textDefault
    },
    container: {
      flex: 1,
      justifyContent: "space-between",
      marginLeft: scale(16),
      marginRight: scale(16)
    },
    nameInputContainer: {
      marginTop: scale(20)
    },
    signUpButton: {
      marginTop: scale(20),
      marginBottom: scale(25)
    }
  })
);
