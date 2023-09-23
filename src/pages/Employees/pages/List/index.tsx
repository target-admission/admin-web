import React from "react";
import useQueryContext from "@/hooks/useQueryContext";
import { useGetEmployees } from "@/queries/employees";
import { Spin } from "antd";

const List: React.FC = () => {
	const { getQueryParams } = useQueryContext();

	const { data, isLoading } = useGetEmployees({
		...getQueryParams(),
	});
	console.log(data);
	return (
		<Spin spinning={isLoading}>
			<div className="min-h-[60vh]"></div>
		</Spin>
	);
};

export default List;
