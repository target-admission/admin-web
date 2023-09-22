import instance from "@/services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getEmployeeSessions = (params: any) => {
  return instance.get(`/sessions/employees`, {
    params,
  });
};

export const useGetEmployeeSessions = (params: any) => {
  return useQuery(["get-all-employee-sessions", params], () =>
    getEmployeeSessions(params)
  );
};

const employeeSessionSignOut = (id: number) => {
  return instance.put(`/sessions/employees/${id}`);
};

export const useEmployeeSessionSignOut = () => {
  const query = useQueryClient();
  return useMutation(employeeSessionSignOut, {
    onSuccess: () => {
      query.invalidateQueries(["get-all-employee-sessions"]);
      query.invalidateQueries(["validate"]);
    },
  });
};