import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
      noteContainer: {
        margin: scale(10),
        padding: scale(8),
        borderWidth: 1,
        borderRadius: scale(10)
      },
      description: {
        fontWeight: "bold",
        fontSize: scale(14)
      },
      mainText: {
        marginTop: scale(5)
      },
      deleteIcon: {

        height: scale(25),
        width: scale(25)
      },
      deleteIconContainer: {
        position: "absolute",
        top: 0,
        right: scale(15),
        backgroundColor: theme.palette.white
      },
      editIconContainer: {
        position: "absolute",
        top: 0,
        right: scale(50),
        backgroundColor: theme.palette.white
      }
    }
  )
);
