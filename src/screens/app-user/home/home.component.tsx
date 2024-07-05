import React from "react";

import { SafeAreaView, Text} from "react-native";
import { useTypedDispatch } from "store/index";
import { useStyles } from "./home.styles";

export const HomeScreen = () => {
  const styles = useStyles();
  const dispatch = useTypedDispatch();


  return (
    <SafeAreaView>
     <Text>kffkfk</Text>
    </SafeAreaView>
  );
};
