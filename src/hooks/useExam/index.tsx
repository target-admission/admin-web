import { usePaginate } from "@tam11a/react-use-hooks";
import React from "react";
import { useGetExams } from "@/queries/exams";
import { IOption } from "../useRole/types";

const useExam = () => {
  const { setSearch, getQueryParams } = usePaginate({
    defaultParams: {
      limit: 40,
    },
  });

  const [exam, setExam] = React.useState<IOption[]>([]);
  const { data: examData, isLoading: examLoading } = useGetExams(
    getQueryParams()
  );

  React.useEffect(() => {
    if (!examData) return;
    var d: IOption[] = [];
    examData?.data?.data?.map?.(
      (s: { id: string; first_name: string; last_name: string }) => {
        d.push({
          value: s.id,
          label: `${s.first_name} ${s.last_name}`,
          data: s,
        });
      }
    );
    setExam(d);
  }, [examData]);

  return {
    isExamLoading: examLoading,
    exam,
    searchExam: (value: string) => {
      setSearch(value);
    },
  };
};

export default useExam;
