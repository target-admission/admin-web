import { useGetEmployeesById } from "@/queries/employees";
import previewAttachment from "@/utilities/s3Attachment";
import { stringAvatar } from "@/utilities/stringAvatar";
import { Avatar } from "@mui/material";
import { Spin } from "antd";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";

const Details: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isLoading } = useGetEmployeesById(id);
	console.log(data);
	return (
		<Spin spinning={isLoading}>
			<div className="mx-auto max-w-2xl">
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border border-slate-200 p-3 rounded-3xl">
					<Avatar
						className="rounded-2xl w-32 h-32 aspect-square"
						variant="square"
						src={previewAttachment(data?.display_picture)}
						alt={[data?.first_name, data?.last_name].join(" ")}
						{...stringAvatar([data?.first_name, data?.last_name].join(" "))}
					/>
					<div>
						<p className="text-2xl font-bold">
							{[data?.first_name, data?.last_name].join(" ")}
						</p>
						<p className="text-text-light font-semibold">
							@{data?.username || "-"}
						</p>

						<p className="text-text-light text-xs mt-2">
							Created {moment(data?.created_at).calendar()}
						</p>
						<p className="text-text-light text-xs">
							Last Updated {moment(data?.updated_at).calendar()}
						</p>
					</div>
				</div>
			</div>
		</Spin>
	);
};

export default Details;
