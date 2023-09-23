import React from "react";

import { Icon } from "@iconify/react";

import type { MenuProps } from "antd";
import {
	// DatePicker,
	Menu,
} from "antd";
import { generatePath, useLocation, useNavigate } from "react-router-dom";

import { Input, Select } from "antd";
import { InlineIcon } from "@iconify/react";
import { ROUTES } from "@pages/Employees/routes/path";
import DatePicker from "@components/antd/DatePicker";
import useQueryContext from "@/hooks/useQueryContext";
import BASE_APP_ROUTES from "@/routes/base-routes";

const items: MenuProps["items"] = [
	{
		label: "Overview",
		key: ROUTES.OVERVIEW,
		icon: (
			<Icon
				icon="ic:twotone-person-pin"
				className="text-base"
			/>
		),
	},
	{
		label: "List",
		key: ROUTES.LIST,
		icon: (
			<Icon
				icon="ic:twotone-person-pin"
				className="text-xl"
			/>
		),
	},
	{
		label: "Trash",
		key: ROUTES.TRASH,
		icon: (
			<Icon
				icon="mdi:trash-can-outline"
				className="text-lg"
			/>
		),
	},
];

const Navigator: React.FC = () => {
	const baseURL = BASE_APP_ROUTES.PRIVATE_ROUTES.USERS;
	// To get the current location pathname
	let location = useLocation();

	// To route
	const navigate = useNavigate();
	const onClick: MenuProps["onClick"] = (e) => {
		navigate(
			generatePath("/app/:base", {
				base: generatePath(baseURL, { "*": e.key }),
			})
		);
	};

	const { search, setSearch, setFilterField, watch } = useQueryContext();

	return (
		<>
			<div className="flex flex-row items-center justify-between gap-2 p-3 text-text">
				<h1 className="text-xl md:text-2xl flex flex-row items-center gap-4 font-bold">
					<Icon icon="la:users" />
					Users
				</h1>
			</div>

			<div className="flex flex-col md:flex-row justify-between gap-2 border-b">
				<Menu
					onClick={onClick}
					selectedKeys={[location.pathname?.split?.("/")[3] || ""]}
					mode="horizontal"
					items={items}
					className={"border-b-0 w-full max-w-md"}
				/>
				<DatePicker.RangePicker
					bordered={false}
					size={"large"}
					allowClear
					allowEmpty={[false, false]}
				/>
			</div>

			<div className="flex flex-row items-center justify-between gap-2 p-3 mt-2">
				<Input
					allowClear
					size="large"
					className="font-semibold max-w-[220px]"
					placeholder="Search..."
					value={search}
					onChange={(e) => {
						setSearch(e.target.value || "");
					}}
					prefix={
						<Icon
							className="text-2xl mr-1 [&_.ant-menu-item-selected>.ant-menu-title-content]:text-text"
							icon="mingcute:search-3-line"
						/>
					}
				/>
				<div className="flex flex-row items-center">
					<p className="font-semibold text-sm underline flex items-center gap-1">
						<InlineIcon
							icon={"pepicons-pencil:down-up"}
							className="text-xl"
						/>{" "}
						Sort By:
					</p>
					<Select
						value={watch("sort")}
						onChange={(v) => setFilterField("sort", v || null)}
						bordered={false}
						popupMatchSelectWidth={false}
						options={[
							{ value: "created_at", label: "Newest" },
							{ value: "updated_at", label: "Last Updated" },
							{ value: "-created_at", label: "Oldest" },
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default Navigator;
