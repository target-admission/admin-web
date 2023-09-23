import React from "react";
import useQueryContext from "@/hooks/useQueryContext";
import { useParams } from "react-router-dom";
import { useGetUsersById } from "@/queries/users";

const Item: React.FC = () => {
  const params = useParams();
  const { search } = useQueryContext();
  const { data, isLoading } = useGetUsersById(params.id);
  console.log(data);
  return (
    <div>
      {search}
      hello
    </div>
  );
};

export default Item;
