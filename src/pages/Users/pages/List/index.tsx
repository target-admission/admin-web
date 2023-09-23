import useQueryContext from "@/hooks/useQueryContext";
import { useGetUsers } from "@/queries/users";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import UserColumn from "./components/userColumn";

const List: React.FC = () => {
  const { getQueryParams, page } = useQueryContext();

  const { data, isLoading } = useGetUsers({ getQueryParams });
  console.log(data);

  return (
    <div className="p-3">
      <DataGrid
        columns={UserColumn()}
        rows={data?.data?.data || []}
        loading={isLoading}
        getRowId={(r: any) => r?.id}
        rowCount={data?.data?.total || 0}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: page } },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        paginationMode={"server"}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default List;
