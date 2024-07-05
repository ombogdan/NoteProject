import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.palette.white
      },
      plusIcon: {
        width: scale(30),
        height: scale(30)
      },
      plusIconContainer: {
        position: "absolute",
        bottom: scale(10),
        right: scale(10),
        borderWidth: 1,
        padding: scale(5),
        borderRadius: scale(5),
        borderColor: theme.palette.textDefault
      }
    }
  )
);
