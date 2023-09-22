import React from "react";
import useQueryContext from "@/hooks/useQueryContext";

const Trash: React.FC = () => {
	const { search } = useQueryContext();
	return <div>Trash: {search}</div>;
};

export default Trash;
