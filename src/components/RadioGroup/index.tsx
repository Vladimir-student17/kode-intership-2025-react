import type { DepartamentData } from "@/types/DepartamentData";
import { type FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import type { Departament } from "@/types/Departament";

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
  defaultValue,
  onChange,
}) => {
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
      className={cn(className, styles.radioGroup)}
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
