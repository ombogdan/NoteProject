export interface NoteItemTypes {
  noteItem: {note?: string, description?: string, id: number};
  onDeleteItem: (id: number) => void;
  onEditItem: (noteItem: any) => void;
}
