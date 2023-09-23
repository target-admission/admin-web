import instance from "@/services";
import { useQuery } from "@tanstack/react-query";

const getNewUsersReport = (params: any) => {
	return instance.get(`/reports/dashboard/users-graph`, {
		params,
	});
};

export const useGetNewUsersReport = (params: any) => {
	return useQuery(
		["/reports/dashboard/users-graph", params],
		() => getNewUsersReport(params),
		{
			select(data) {
				return data.data;
			},
		}
	);
};

const getDashboardStatsReport = (params: any) => {
	return instance.get(`/reports/dashboard/stats`, {
		params,
	});
};

export const useGetDashboardStatsReport = (params: any) => {
	return useQuery(
		["/reports/dashboard/stats", params],
		() => getDashboardStatsReport(params),
		{
			select(data) {
				return data.data;
			},
		}
	);
};
