import { type FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { departmentConfig } from "@/configs/departamentConfig";
import RadioGroup from "@/components/entities/RadioGroup";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import InputField from "../../UI/InputField";
import ModalWindowSort from "../ModalWindowSort";
import type { DepartamentData } from "@/types/DepartamentData";

interface Props {
  className?: string;
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
  valueInput: string;
  setDepartament: React.Dispatch<React.SetStateAction<DepartamentData>>;
  departament: DepartamentData;
}

const TopAppBar: FC<Props> = ({
  className,
  setValueInput,
  valueInput,
  setDepartament,
  departament,
}) => {
  const showModal = useSelector((state: RootState) => state.showModal);

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
