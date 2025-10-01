import { useEffect, useRef, useState, type FC } from "react";
import Button from "../Button";
import Icon from "../Icon";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/store";
import { openModal } from "@/store/slices/modalWindowSlice";

interface Props {
  className?: string;
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
  onClick?: () => void;
  value: string;
  placeholder?: string;
}

const InputField: FC<Props> = ({
  className,
  onInputChange,
  value,
  placeholder = "Введи имя, тег, почту...",
}) => {
  const [lengthValue, setLengthValue] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const sortType = useSelector<RootState>((state) => state.sortType);

  useEffect(() => {
    setLengthValue(value.length);
  }, [value]);

  const handleInputChange = (e: string) => {
    if (e) {
      onInputChange(e);
    } else {
      onInputChange("");
    }
  };

  const handleSortClick = () => {
    dispatch(openModal());
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
        onChange={(e) => handleInputChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        aria-label="Поле поиска"
      />

      <Button
        className={styles.buttonSort}
        onClick={handleSortClick}
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
