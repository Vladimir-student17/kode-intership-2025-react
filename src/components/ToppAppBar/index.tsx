import { useState, type FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import InputField from "../InputField";
import { departmentConfig } from "@/configs/departamentConfig";
import RadioGroup from "@/components/RadioGroup";
import ModalWindowSort from "../ModalWindowSort";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

interface Props {
  className?: string;
}

const TopAppBar: FC<Props> = ({ className }) => {
  const showModal = useSelector((state: RootState) => state.showModal);

  const [valueInput, setValueInput] = useState<string>("");
  const [departament, setDepartament] = useState<string>("all");

  return (
    <div className={cn(className, styles.form)}>
      <InputField onInputChange={setValueInput} value={valueInput} />
      <RadioGroup
        options={departmentConfig}
        name="deportaments"
        defaultValue={departament}
        onChange={setDepartament}
      />
      {showModal && <ModalWindowSort />}
    </div>
  );
};

export default TopAppBar;
