import instance from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICreateEmployee } from "./types";

const createEmployee = (data: ICreateEmployee) => {
	return instance.post("/employees", data);
};

export const useCreateEmployee = () => {
	const queryClient = useQueryClient();
	return useMutation(createEmployee, {
		onSuccess: () => queryClient.invalidateQueries(["/employees"]),
	});
};
