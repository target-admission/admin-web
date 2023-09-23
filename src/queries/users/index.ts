import instance from "@/services";
import { IUserId } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getUsers = (params: any) => {
  return instance.get(`/users`, {
    params,
  });
};

export const useGetUsers = (params: any) => {
  return useQuery(["/users", params], () => getUsers(params));
};

const getUsersById = (id?: IUserId) => {
  return instance.get(`/users/${id}`);
};

export const useGetUsersById = (id?: IUserId) => {
  return useQuery(["/users/:id", id], () => getUsersById(id), {
    enabled: !!id,
    select(data) {
      return data.data.data;
    },
  });
};
