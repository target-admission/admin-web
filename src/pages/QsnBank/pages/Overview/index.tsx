import React from "react";
import useQueryContext from "@/hooks/useQueryContext";
import { Card, Spin, Tag } from "antd";

const Overview: React.FC = () => {
	const { search } = useQueryContext();
	const [stats, setStats] = React.useState<any>(null);
	return (
		<div className="p-3">
			<Spin spinning={false}>
				<div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-6">
					<Card
						size="small"
						className="shadow-md bg-[#B3ECF4]"
						bordered={false}
					>
						<h1 className="font-semibold text-text-light">
							Total Question Banks
						</h1>

						<div className="flex flex-row items-center justify-between">
							<span className="font-bold text-xl text-text-dark">
								{stats?.total_users || 0}
							</span>
							<Tag
								color="#fff"
								className="text-text-light font-semibold rounded-xl"
							>
								+2.5%
							</Tag>
						</div>
					</Card>
					<Card
						size="small"
						className="shadow-md bg-[#FEE0A0]"
						bordered={false}
					>
						<h1 className="font-semibold text-text-light">New Question Bank</h1>

						<div className="flex flex-row items-center justify-between">
							<span className="font-bold text-xl text-text-dark">
								{stats?.new_users || 0}
							</span>
							<Tag
								color="#fff"
								className="text-text-light font-semibold rounded-xl"
							>
								+2.5%
							</Tag>
						</div>
					</Card>
					<Card
						size="small"
						className="shadow-md bg-[#ffd8be]"
						bordered={false}
					>
						<h1 className="font-semibold text-text-light">Visited Today</h1>

						<div className="flex flex-row items-center justify-between">
							<span className="font-bold text-xl text-text-dark">
								{stats?.skipped_exams || 0}
							</span>
							<Tag
								color="#fff"
								className="text-text-light font-semibold rounded-xl"
							>
								+2.5%
							</Tag>
						</div>
					</Card>
					<Card
						size="small"
						className="shadow-md bg-[#ffbebe]"
						bordered={false}
					>
						<h1 className="font-semibold text-text-light">
							Deleted Question Bank
						</h1>

						<div className="flex flex-row items-center justify-between">
							<span className="font-bold text-xl text-text-dark">
								{stats?.deleted_users || 0}
							</span>
							<Tag
								color="#fff"
								className="text-text-light font-semibold rounded-xl"
							>
								+2.5%
							</Tag>
						</div>
					</Card>
				</div>
			</Spin>
		</div>
	);
};

export default Overview;
