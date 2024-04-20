interface EditingFlags {
  [key: string]: boolean | undefined;
}

export interface EmployeeNetland {
  id: number;
  name: string;
  age: number;
  position: string;
  isFullTime: boolean;
  isEditing?: EditingFlags;
}
