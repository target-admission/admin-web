import instance from "@/services";
import { ISubjectId } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICreateSubject } from "./types";

const getSubjects = (params: any) => {
  return instance.get(`/subjects`, {
    params,
  });
};

export const useGetSubjects = (params: any) => {
  return useQuery(["/subjects", params], () => getSubjects(params), {
    select(data) {
      return data.data;
    },
  });
};

const createSubject = (data: ICreateSubject) => {
  return instance.post("/subjects", data);
};

export const useCreateSubject = () => {
  const queryClient = useQueryClient();
  return useMutation(createSubject, {
    onSuccess: () => queryClient.invalidateQueries(["/subjects"]),
  });
};

const deleteSubject = ({ id, params }: { id: ISubjectId; params?: any }) => {
  return instance.delete(`/subjects/${id}`, { params });
};

export const useDeleteSubject = () => {
  const query = useQueryClient();
  return useMutation(deleteSubject, {
    onSuccess: () => {
      query.invalidateQueries(["/subjects"]);
      query.invalidateQueries(["/subjects/:id"]);
    },
  });
};
