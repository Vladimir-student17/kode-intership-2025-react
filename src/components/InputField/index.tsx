import { useRef, type FC } from "react";
import Button from "../Button";
import Icon from "../Icon";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  onInputChange: React.Dispatch<React.SetStateAction<string>>; 
  onClick?: () => void;
  value: string;
  placeholder?: string; //
}

const InputField: FC<Props> = ({
  className,
  onInputChange,
  value,
  placeholder = "Введи имя, тег, почту...",
}) => {
  const inputRef = useRef(null);

  const handleInputChange = (e: string) => {
    if(e) {
      onInputChange(e)
    } else {
      onInputChange('')
    }
  
  };

  return (
    <div className={cn(styles.container, className)}>
      <Button
        className={styles.buttonSearch}
        onclick={() => console.log("click")}
        icon={
          <Icon iconId="icon-search" className={styles.buttonSearch__icon} />
        }
        aria-label="Поиск"
      />

      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        onChange={(e) => handleInputChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        aria-label="Поле поиска"
      />

      <Button
        className={styles.buttonSort}
        onclick={() => console.log("click")}
        icon={<Icon iconId="icon-sort" />}
        aria-label="Сортировка"
      />
    </div>
  );
};

export default InputField;
