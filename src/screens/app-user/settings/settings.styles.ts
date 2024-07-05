import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.palette.white
      },
      contentContainer: {
        marginLeft: scale(16),
        marginRight: scale(16),
        height: '100%',
        justifyContent: "space-between",
      },
      userName: {
        fontWeight: "bold",
        fontSize: scale(16),
        textAlign: 'center'
      }
    }
  )
);
