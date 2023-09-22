import useQueryContext from "@/hooks/useQueryContext";
import React from "react";

const Item: React.FC = () => {
	const { search } = useQueryContext();
	return <div>{search}</div>;
};

export default Item;
