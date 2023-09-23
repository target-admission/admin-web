import React from "react";
import useQueryContext from "@/hooks/useQueryContext";

const Overview: React.FC = () => {
	const { search } = useQueryContext();
	return <div>Overview: {search}</div>;
};

export default Overview;
