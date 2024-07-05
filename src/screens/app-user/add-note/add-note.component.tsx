import React, { useState } from "react";

import { SafeAreaView, View } from "react-native";
import { Header } from "components/header";
import CustomInput from "ui-kit/custom-input/custom-input.component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CustomButton } from "ui-kit/custom-button";
import { useStyles } from "./add-note.styles";
import { useTypedDispatch } from "store/index";
import { userActions } from "store/slices/user";
import { goBack } from "shared/navigation/root-navigator.config";

export const AddNoteScreen = ({ route }: any) => {
  const { note } = route.params;
  const styles = useStyles();
  const dispatch = useTypedDispatch();
  const [description, setDescription] = useState(note?.description ?? "");
  const [noteText, setNoteText] = useState(note?.note ?? "");

  const handleSaveData = () => {
    dispatch(userActions.addNotes({
      id: note ? note.id : new Date().getTime(),
      lastUpdate: new Date().getTime(),
      description,
      note: noteText
    }));
    goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header name="New Note" />
      <KeyboardAwareScrollView
        style={styles.centeredView}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled>
        <View style={styles.dataContainer}>
          <View>
            <CustomInput
              value={description}
              onChangeValue={(value: string) => {
                setDescription(value);
              }}
              placeholder="Description..."
            />
            <View style={{ marginTop: 20 }}>
              <CustomInput
                value={noteText}
                onChangeValue={(value: string) => {
                  setNoteText(value);
                }}
                placeholder="Note..."
                multiline
              />
            </View>
          </View>
          <CustomButton
            title="Save Note"
            onPress={handleSaveData}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
