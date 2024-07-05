import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { DELETE_ICON, EDIT_ICON } from "constants/index";
import { NoteItemTypes } from "./note-item.types";
import { useStyles } from "./note-item.styles";

export const NoteItem = ({ noteItem, onDeleteItem, onEditItem }: NoteItemTypes) => {
  const { note, description, id } = noteItem;
  const styles = useStyles();
  return (
    <>
      <View style={styles.noteContainer}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.mainText}>{note}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteIconContainer}
        onPress={() => {
          onDeleteItem(id);
        }}>
        <Image source={DELETE_ICON} style={styles.deleteIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.editIconContainer}
        onPress={() => {
          onEditItem(noteItem);
        }}>
        <Image source={EDIT_ICON} style={styles.deleteIcon} />
      </TouchableOpacity>
    </>
  );
};
