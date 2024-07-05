import { Dimensions, StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.palette.white
      },
      centeredView: {
        paddingLeft: scale(16),
        paddingRight: scale(16)
      },
      dataContainer: {
        justifyContent: "space-between",
        height: Dimensions.get('window').height -scale(150)
      }
    }
  )
);
