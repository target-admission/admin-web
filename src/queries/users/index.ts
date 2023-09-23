import instance from "@/services";
import { useQuery } from "@tanstack/react-query";

const getUsers = (params: any) => {
  return instance.get(`/users`, {
    params,
  });
};

export const useGetUsers = (params: any) => {
  return useQuery(["/users", params], () => getUsers(params));
};
