import instance from "@/services";
import { ISubjectId } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
