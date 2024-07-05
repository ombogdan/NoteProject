import React from "react";

import { FlatList, Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { PLUS_BLACK_ICON } from "constants/index";
import { navigate } from "shared/navigation/root-navigator.config";
import { AppUserRoutes } from "shared/navigation/app-user";
import { useTypedDispatch, useTypedSelector } from "store/index";
import { selectNotesList } from "store/selectors/user";
import { NoteItem } from "screens/app-user/home/components/note-item";
import { userActions } from "store/slices/user";
import { useStyles } from "./home.styles";

export const HomeScreen = () => {
  const styles = useStyles();
  const notesList = useTypedSelector(selectNotesList);
  const dispatch = useTypedDispatch();

  const handleAddNote = (note: any) => {
    navigate(AppUserRoutes.AddNote, { note });
  };

  const handleDeleteItem = (id: number) => {
    dispatch(userActions.deleteNoteById(id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notesList}
        keyExtractor={(item) => `note_item_${item.id}`}
        ListFooterComponent={<View style={{ height: 150 }} />}
        renderItem={({ item }) => (
          <NoteItem
            noteItem={item}
            onDeleteItem={handleDeleteItem}
            onEditItem={handleAddNote} />
        )}
      />
      <TouchableOpacity onPress={handleAddNote} style={styles.plusIconContainer}>
        <Image source={PLUS_BLACK_ICON} style={styles.plusIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
