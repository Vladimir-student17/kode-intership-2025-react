import { useEffect, useState, type FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import InputField from "../InputField";
import { departmentConfig } from "@/configs/departamentConfig";
import RadioGroup from "@/components/RadioGroup";
import ModalWindowSort from "../ModalWindowSort";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import type { UsersList } from "@/types/UserData";
import { useGetUsersQuery } from "@/store/getUsers";
import type { DepartamentData } from "@/types/DepartamentData";
import findUser from "@/configs/findUsers";
import { useSearchParams } from "react-router-dom";

interface Props {
  className?: string;
  setData: React.Dispatch<React.SetStateAction<UsersList | undefined>>;
}

const TopAppBar: FC<Props> = ({ className, setData }) => {
  const showModal = useSelector((state: RootState) => state.showModal);
  const [searchParam, setSearchParam] = useSearchParams();
  const [valueInput, setValueInput] = useState<string>(
    searchParam.get("search") || ""
  );
  const [departament, setDepartament] = useState<DepartamentData>(
    (searchParam.get("departament") as DepartamentData) || "all"
  );
  const { data } = useGetUsersQuery(departament, {
    pollingInterval: 1000 * 60 * 5,
    refetchOnReconnect: true,
  });
  useEffect(() => {
    if (data) {
      const newArr = [...findUser(data, valueInput)];
      setData(newArr);
    }
    setSearchParam({
      search: valueInput.toLowerCase(),
      departament: departament.toLowerCase(),
    });
  }, [data, setData, valueInput, departament]);

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
