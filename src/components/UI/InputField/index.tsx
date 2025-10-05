import { useEffect, useRef, useState, type FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { openModal } from "@/store/slices/modalWindowSlice";
import Icon from "../Icon";
import Button from "../Button";

interface Props {
  className?: string;
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  placeholder?: string;
}

const InputField: FC<Props> = ({
  className,
  onInputChange,
  value,
  placeholder = "Введи имя, фамилию, тег...",
}) => {
  const [lengthValue, setLengthValue] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, serInputValue] = useState<string>(value);

  const dispatch = useDispatch<AppDispatch>();
  const sortType = useSelector((state: RootState) => state.sortType);

  useEffect(() => {
    setLengthValue(value.length);

    const inputValueTim = setTimeout(() => handleInputChange(inputValue), 600);

    return () => clearTimeout(inputValueTim);
  }, [value, inputValue]);

  const handleInputChange = (word: string) => {
    if (word) {
      onInputChange(word);
    } else {
      onInputChange("");
    }
  };

  return (
    <div className={cn(styles.container, className)}>
      <Button
        className={styles.buttonSearch}
        onClick={() => {
          if (inputRef.current) handleInputChange(inputRef.current?.value);
        }}
        icon={
          <Icon
            iconId="icon-search"
            className={cn(styles.buttonSearch__icon, {
              [styles.buttonSearch__icon_black]: lengthValue > 0,
            })}
          />
        }
        aria-label="Поиск"
      />

      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        onChange={(e) => serInputValue(e.target.value)}
        value={inputValue}
        placeholder={placeholder}
        aria-label="Поле поиска"
      />

      <Button
        className={styles.buttonSort}
        onClick={() => dispatch(openModal())}
        icon={
          <Icon
            iconId="icon-sort"
            className={cn(styles.buttonSort__icon, {
              [styles.buttonSort__icon_violet]: sortType === "birthday",
            })}
          />
        }
        aria-label="Сортировка"
      />
    </div>
  );
};

export default InputField;
