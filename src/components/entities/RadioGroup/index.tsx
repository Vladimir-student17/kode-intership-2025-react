import type { DepartamentData } from "@/types/DepartamentData";
import { type FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import type { Departament } from "@/types/Departament";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface Props {
  className?: string;
  name: string;
  options: Departament[];
  defaultValue: string;
  onChange: React.Dispatch<React.SetStateAction<DepartamentData>>;
}
const RadioGroup: FC<Props> = ({
  className,
  name,
  options,
  defaultValue = "all",
  onChange,
}) => {
  const isDark = useSelector((state: RootState) => state.isDark);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value as DepartamentData;
    if (newValue) {
      onChange(newValue);
    } else {
      onChange("all");
    }
  };

  return (
    <div
      className={cn(className, styles.radioGroup, {[styles.radioGroup__dark]: isDark})}
      aria-labelledby={`${name}-legend`}
    >
      {options.map(({ value, label }) => (
        <label
          className={cn(styles.radioGroup__label, {
            [styles.radioGroup__label_isAcive]: defaultValue === value,
          })}
          key={value}
        >
          <input
            className={styles.radioGroup__input}
            type="radio"
            name={name}
            value={value}
            onChange={(e) => handleChange(e)}
          />
          {label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
