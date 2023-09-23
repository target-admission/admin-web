import { usePaginate } from "@tam11a/react-use-hooks";
import React from "react";
import { useGetTopics } from "@/queries/topics";
import { IOption } from "../useRole/types";

const useTopic = () => {
  const { setSearch, getQueryParams } = usePaginate({
    defaultParams: {
      limit: 40,
    },
  });

  const [topic, setTopic] = React.useState<IOption[]>([]);
  const { data: topicData, isLoading: topicLoading } = useGetTopics(
    getQueryParams()
  );

  React.useEffect(() => {
    if (!topicData) return;
    var d: IOption[] = [];
    topicData?.data?.data?.map?.(
      (s: { id: string; first_name: string; last_name: string }) => {
        d.push({
          value: s.id,
          label: `${s.first_name} ${s.last_name}`,
          data: s,
        });
      }
    );
    setTopic(d);
  }, [topicData]);

  return {
    isTopicLoading: topicLoading,
    topic,
    searchTopic: (value: string) => {
      setSearch(value);
    },
  };
};

export default useTopic;
