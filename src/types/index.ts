export type IUserId = string;
export type ISessionId = number;

//data grid types

import {
  GridCallbackDetails,
  GridColDef,
  GridFeatureMode,
  GridRowSelectionModel,
} from "@mui/x-data-grid";

export type GridNativeColTypes =
  | "string"
  | "number"
  | "date"
  | "dateTime"
  | "boolean"
  | "singleSelect";

export type GridAlignment = "left" | "right" | "center";

export type IDataTable = {
  columns: GridColDef[];
  rows: any;
  isLoading?: boolean;
  getRowId?: any;
  checked?: boolean;
  rowCount?: number;
  paginationMode?: GridFeatureMode;
  page?: number;
  onPageChange?: (newPage: number) => void;
  pageSize?: number;
  onPageSizeChange?: (newLimit: number) => void;
  checkboxSelection?: boolean;
  onSelectionModelChange?: (
    rowSelectionModel: GridRowSelectionModel,
    details: GridCallbackDetails<any>
  ) => void;
  selectionModel?: GridRowSelectionModel;
  keepNonExistentRowsSelected?: boolean;
};
