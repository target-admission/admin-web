import React from "react";
import useQueryContext from "@/hooks/useQueryContext";

const Item: React.FC = () => {
	const { search } = useQueryContext();
	return <div>{search}</div>;
};

export default Item;
