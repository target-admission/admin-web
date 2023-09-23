import Iconify from "@components/iconify";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { Button } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const Column = (): GridColDef[] => {
  return [
    {
      headerName: "ID",
      headerAlign: "center",
      field: "id",
      align: "center",
      flex: 1,
      filterable: false,
      sortable: false,
    },
    {
      headerName: "Title",
      headerAlign: "center",
      field: "first_name",
      align: "center",
      minWidth: 250,
      flex: 1,
      filterable: false,
      sortable: false,
      valueGetter(params) {
        return (
          [params?.row?.first_name, params?.row?.last_name].join(" ") || "-"
        );
      },
    },
    {
      headerName: "Username",
      headerAlign: "center",
      field: "username",
      align: "center",
      flex: 1,
      minWidth: 200,
      filterable: false,
      sortable: false,
      valueFormatter(params) {
        return `@${params.value}`;
      },
    },
    {
      headerName: "Gender",
      headerAlign: "center",
      field: "gender",
      align: "center",
      width: 120,
      minWidth: 120,
      flex: 1,
      sortable: false,
    },
    {
      headerName: "Phone",
      headerAlign: "center",
      field: "phone",
      align: "center",
      width: 100,
      minWidth: 80,
      flex: 1,
      filterable: false,
      sortable: false,
    },
    {
      headerName: "Email",
      headerAlign: "center",
      field: "email",
      align: "center",
      width: 200,
      minWidth: 140,
      flex: 1,
      filterable: false,
      sortable: false,
    },
    {
      headerName: "Role",
      headerAlign: "center",
      field: "role",
      align: "center",
      width: 200,
      minWidth: 140,
      flex: 1,
      filterable: false,
      sortable: false,
      valueFormatter(params) {
        return params?.value?.name ? `${params.value.name}` : "-";
      },
    },
    {
      headerName: "Verified At",
      headerAlign: "center",
      field: "verified_at",
      align: "center",
      flex: 1,
      width: 280,
      minWidth: 250,
      filterable: false,
      sortable: false,
      valueFormatter(params) {
        return params.value ? moment(params.value).format("lll") : "-";
      },
    },
    {
      headerName: "Created At",
      headerAlign: "center",
      field: "created_at",
      align: "center",
      flex: 1,
      width: 280,
      minWidth: 250,
      filterable: false,
      sortable: false,
      valueFormatter(params) {
        return moment(params.value).format("lll");
      },
    },
    {
      field: "actions",
      type: "actions",
      flex: 1,
      minWidth: 160,
      getActions: (params) => [
        <GridActionsCellItem
          disableRipple
          disableTouchRipple
          disableFocusRipple
          className="hover: bg-transparent"
          icon={
            <Link to={`/app/employees/i/${params.id}`}>
              <Button type="dashed">View</Button>
            </Link>
          }
          label="Details"
        />,
        <GridActionsCellItem
          icon={
            <Link to={`/app/employees/i/${params.id}/edit`}>
              <Iconify icon={"fluent:edit-12-regular"} className="text-lg" />
            </Link>
          }
          label="Edit"
        />,
        <GridActionsCellItem
          icon={
            <Iconify icon={"icon-park-twotone:delete"} className="text-lg" />
          }
          showInMenu
          label="Delete"
          onClick={() => {}}
        />,
      ],
    },
  ];
};

export default Column;
