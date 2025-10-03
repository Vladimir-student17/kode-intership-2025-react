import { useEffect, useState, type FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { departmentConfig } from "@/configs/departamentConfig";
import RadioGroup from "@/components/entities/RadioGroup";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import type { UsersList } from "@/types/UserData";
import { useGetUsersQuery } from "@/store/getUsers";
import type { DepartamentData } from "@/types/DepartamentData";
import findUser from "@/configs/findUsers";
import { useSearchParams } from "react-router-dom";
import InputField from "../../UI/InputField";
import ModalWindowSort from "../ModalWindowSort";

interface Props {
  className?: string;
  setData: React.Dispatch<React.SetStateAction<UsersList | undefined>>;
}

const TopAppBar: FC<Props> = ({ className, setData }) => {
  const showModal = useSelector((state: RootState) => state.showModal);
  const [searchParams, setSearchParam] = useSearchParams();
  const [valueInput, setValueInput] = useState<string>(
    searchParams.get("search") || ""
  );
  const [departament, setDepartament] = useState<DepartamentData>(
    searchParams.get("departament") as DepartamentData
  );
  const { data } = useGetUsersQuery(departament || "all", {
    pollingInterval: 1000 * 60 * 5,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (data) {
      const newArr = [...findUser(data, valueInput)];
      setTimeout(() => setData(newArr), 400);
    }
  }, [data, setData, valueInput, departament]);

  useEffect(() => {
    const newSearchParamsDep = new URLSearchParams(searchParams);

    if (departament && departament !== "all") {
      newSearchParamsDep.set("departament", departament);
    } else {
      newSearchParamsDep.delete("departament");
    }
    setSearchParam(newSearchParamsDep);
  }, [valueInput, departament]);

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
    <div className={cn(className, styles.form)}>
      <InputField onInputChange={setValueInput} value={valueInput} />
      <RadioGroup
        options={departmentConfig}
        name="departments"
        defaultValue={departament}
        onChange={setDepartament}
      />
      {showModal && <ModalWindowSort />}
    </div>
  );
};

export default TopAppBar;
