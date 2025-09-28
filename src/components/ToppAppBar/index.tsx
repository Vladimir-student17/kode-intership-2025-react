import { useState, type FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import InputField from "../InputField";
import { deportamentConfif } from "@/configs/deportamentConfig";
import RadioGroup from "@/components/RadioGroup";

interface Props {
  className?: string;
}

const TopAppBar: FC<Props> = ({ className }) => {
  const [valueInput, setValueInput] = useState<string>("");
  const [deportament, setDeportament] = useState<string>("");

  return (
    <div className={cn(className, styles.form)}>
      <InputField onInputChange={setValueInput} value={valueInput} />
      <RadioGroup
        options={deportamentConfif}
        name="deportaments"
        defaultValue={deportament}
        onChange={setDeportament}
      />
    </div>
  );
};

export default TopAppBar;
