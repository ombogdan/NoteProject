import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ value, error, scale, theme, multiline }: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: theme.palette.transparentGray,
      borderRadius: scale(15),
      width: "100%",
      paddingHorizontal: scale(15),
      paddingVertical: scale(12),
      height:  multiline ? scale(220) : scale(68),
    },
    input: {
      fontSize: scale(15),
      height: multiline ? scale(200) : scale(22),
      margin: 0,
      padding: 0,
      width: '100%',
      fontWeight: !value ? 'bold' : 'normal',
      color: theme.palette.textDefault
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center"
    },
    label: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: scale(5)
    },
    labelText: {
      color: !error ? theme.palette.textDefault : theme.palette.red
    },
    errorMessage: {
      color: theme.palette.red,
      marginTop: scale(12)
    }
  })
);
