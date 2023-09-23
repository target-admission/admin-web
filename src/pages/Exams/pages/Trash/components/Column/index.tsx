import { useDeleteExams } from "@/queries/exams";
import { IExamId } from "@/types";
import handleResponse from "@/utilities/handleResponse";
import { message } from "@components/antd/message";
import Iconify from "@components/iconify";
import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { Button } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const Column = (): GridColDef[] => {
  const { mutateAsync: Delete, isLoading: isDeleteLoading } = useDeleteExams();

  const onDelete = async (
    id: IExamId,
    permanent: any = null,
    restore: any = null
  ) => {
    message.open({
      type: "loading",
      content: permanent
        ? "Deleting Exam Permanently.."
        : restore
        ? "Restoring Exam.."
        : "Deleting Exam..",
      duration: 0,
    });
    const res = await handleResponse(() =>
      Delete({
        id,
        params: {
          permanent,
          restore,
        },
      })
    );

    message.destroy();

    if (res.status) {
      message.success(res.message);
      return true;
    } else {
      message.error(res.message);
      return false;
    }
  };

  return [
    {
      headerName: "ID",
      headerAlign: "center",
      field: "id",
      align: "center",
      width: 60,
      minWidth: 50,
      filterable: false,
      sortable: false,
    },
    {
      headerName: "Title",
      headerAlign: "center",
      field: "name",
      align: "center",
      flex: 1,
      width: 180,
      minWidth: 150,
      filterable: false,
      sortable: false,
    },

    {
      headerName: "Description",
      headerAlign: "center",
      field: "description",
      align: "center",
      width: 280,
      minWidth: 250,
      flex: 1,
      filterable: false,
      sortable: false,
      valueFormatter(params) {
        return params.value || "-";
      },
    },
    {
      headerName: "Question Bank",
      headerAlign: "center",
      field: "question_bank",
      align: "center",
      width: 180,
      minWidth: 150,
      // flex: 1,
      filterable: false,
      sortable: false,
      // valueFormatter(params) {
      //   return params.value.name || "-";
      // },
    },
    {
      headerName: "Exam Duration",
      headerAlign: "center",
      field: "duration",
      align: "center",
      width: 180,
      minWidth: 150,
      // flex: 1,
      filterable: false,
      sortable: false,
    },
    {
      headerName: "Negative Mark",
      headerAlign: "center",
      field: "negative_mark",
      align: "center",
      width: 180,
      minWidth: 150,
      // flex: 1,
      filterable: false,
      sortable: false,
    },
    {
      headerName: "Exam Type",
      headerAlign: "center",
      field: "type",
      align: "center",
      width: 180,
      minWidth: 150,
      // flex: 1,
      filterable: false,
      sortable: false,
    },
    {
      headerName: "Attendee Type",
      headerAlign: "center",
      field: "attendee_type",
      align: "center",
      width: 180,
      minWidth: 150,
      // flex: 1,
      filterable: false,
      sortable: false,
    },

    {
      headerName: "Created At",
      headerAlign: "center",
      field: "created_at",
      align: "center",
      width: 220,
      minWidth: 200,
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
            <Link to={`/app/exams/i/${params.id}`}>
              <Button type="dashed">View</Button>
            </Link>
          }
          label="Details"
        />,
        <GridActionsCellItem
          icon={
            <Link to={`/app/exams/i/${params.id}/edit`}>
              <Iconify icon={"fluent:edit-12-regular"} className="text-lg" />
            </Link>
          }
          label="Edit"
        />,

        <GridActionsCellItem
          icon={
            <Iconify icon={"ic:twotone-restore-page"} className="text-lg" />
          }
          disabled={isDeleteLoading}
          showInMenu
          label="Restore"
          onClick={() => onDelete(params.id, null, true)}
        />,
        <GridActionsCellItem
          icon={
            <Iconify
              icon={"icon-park-twotone:delete-five"}
              className="text-lg"
            />
          }
          disabled={isDeleteLoading}
          showInMenu
          label="Permanently Delete"
          onClick={() => onDelete(params.id, true)}
        />,
      ],
    },
  ];
};

export default Column;
