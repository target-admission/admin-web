import { GridColDef } from "@mui/x-data-grid";
// import { useNavigate } from "react-router-dom";

const UserColumn = (): GridColDef[] => {
  //   const navigate = useNavigate();

  return [
    {
      headerName: "ID",
      headerAlign: "center",
      field: "id",
      align: "center",
      // width: 200,
      flex: 1,
      sortable: false,
      // hide: true,
    },
    {
      headerName: "Title",
      headerAlign: "center",
      field: "title",
      align: "center",
      minWidth: 200,
      flex: 1,
      sortable: false,
      // hide: true,
      renderCell: (data: any) =>
        [data?.row?.first_name, data?.row?.last_name].join(" ") || "-",
    },
    {
      headerName: "Username",
      headerAlign: "center",
      field: "username",
      align: "center",
      width: 100,
      minWidth: 80,
      sortable: false,
      // hide: true,
    },
    {
      headerName: "Gender",
      headerAlign: "center",
      field: "gender",
      align: "center",
      width: 80,
      minWidth: 60,
      flex: 1,
    },
    {
      headerName: "Email",
      headerAlign: "center",
      field: "email",
      align: "center",
      width: 100,
      minWidth: 80,
      flex: 1,
    },
    {
      headerName: "Phone",
      headerAlign: "center",
      field: "phone",
      align: "center",
      width: 100,
      minWidth: 80,
      flex: 1,
      //   renderCell: (data: any) => `${data?.row?.["address.sector"] || "N/A"}`,
    },

    {
      headerName: "Address",
      headerAlign: "center",
      field: "address",
      align: "center",
      flex: 1,
      width: 280,
      minWidth: 250,
      //   renderCell: (data: any) => `${data?.row?.["address.road"] || "N/A"}`,
    },

    // {
    //   headerName: "Handovered At",
    //   headerAlign: "center",
    //   field: "flat.handovered_at",
    //   minWidth: 130,
    //   flex: 1,
    //   align: "center",
    //   renderCell: (data: any) =>
    //     data.row["flat.handovered_at"]
    //       ? `${moment(data.row["flat.handovered_at"]).format("ll")}`
    //       : "-",
    // },

    // {
    //   headerName: "Action",
    //   field: "action",
    //   width: 200,
    //   minWidth: 180,
    //   // flex: 1,
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    //   renderCell: (data: any) => (
    //     <>
    //       <IconButton
    //         color="primary"
    //         onClick={() => navigate(`/app/user/details/${data.row?.id}`)}
    //         className="text-sm"
    //         // disabled={!checkAccess(defaultPermissions.leadS.FULL)}
    //       >
    //         <p>View</p>
    //       </IconButton>

    //       {data?.row?.deleted_at ? (
    //         <>
    //           <RestoreButton id={data?.row?.id} />

    //           {/* Restore Button Here */}
    //           <DeleteButton id={data?.row?.id} permanent={true} />
    //         </>
    //       ) : (
    //         <DeleteButton id={data?.row?.id} />
    //       )}
    //     </>
    //   ),
    // },
  ];
};

export default UserColumn;
