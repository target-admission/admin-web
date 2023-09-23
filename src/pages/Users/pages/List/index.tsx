import useQueryContext from "@/hooks/useQueryContext";
import { useGetUsers } from "@/queries/users";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import UserColumn from "./components/userColumn";

const List: React.FC = () => {
  const { getQueryParams } = useQueryContext();

  const { data } = useGetUsers({ getQueryParams });
  console.log(data);

  return (
    <div className="p-3">
      <DataGrid columns={UserColumn()} rows={data?.data?.data || []} />
    </div>
  );
};

export default List;
