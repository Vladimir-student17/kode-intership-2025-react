import cn from "classnames";
import { useEffect, useState, type FC } from "react";
import styles from "./styles.module.scss";
import TopAppBar from "@/components/entities/ToppAppBar";
import UserList from "@/components/entities/UserList";
import useSetPathPage from "@/hooks/useSetPathPage";
import { useGetUsersQuery } from "@/store/getUsers";
import type { DepartamentData } from "@/types/DepartamentData";
import { useSearchParams } from "react-router-dom";
import ErrorMessage from "@/components/entities/ErrorMessage";
import findUser from "@/configs/findUsers";

interface Props {
  className?: string;
}

const Home: FC<Props> = ({ className }) => {
  useSetPathPage();
  const [searchParams, setSearchParam] = useSearchParams();
  const [valueInput, setValueInput] = useState<string>(
    searchParams.get("search") || ""
  );
  const [departament, setDepartament] = useState<DepartamentData>(
    (searchParams.get("departament") as DepartamentData) || "all"
  );

  const { data, isSuccess, isError, isLoading, refetch } = useGetUsersQuery(
    departament || "all",
    {
      pollingInterval: 1000 * 60 * 5,
      refetchOnReconnect: true,
    }
  );

  useEffect(() => {
    const newSearchParamsDep = new URLSearchParams(searchParams);

    if (departament && departament !== "all") {
      newSearchParamsDep.set("departament", departament);
    } else {
      newSearchParamsDep.delete("departament");
    }
    setSearchParam(newSearchParamsDep);
  }, [departament]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (valueInput) {
      newSearchParams.set("search", valueInput.toLowerCase().trim());
    } else {
      newSearchParams.delete("search");
    }
    setSearchParam(newSearchParams);
  }, [valueInput]);

  return (
    <div className="container">
      <div className={cn(className, styles.home)}>
        <TopAppBar
          setValueInput={setValueInput}
          valueInput={valueInput}
          setDepartament={setDepartament}
          departament={departament}
        />
        {isSuccess && <UserList data={[...findUser(data, valueInput)]} />}
        {isLoading && <UserList data={Array(5)} />}
        {isError && <ErrorMessage refetch={refetch} />}
      </div>
    </div>
  );
};

export default Home;
