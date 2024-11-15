import { FieldTypeKind } from "../Enums/enums";

export default interface ColumnDefinition {
  Title: string;
  FieldTypeKind: FieldTypeKind; // Change based on the type of column
  Required: boolean
}