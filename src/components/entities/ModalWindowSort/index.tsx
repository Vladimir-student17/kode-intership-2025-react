import { type FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/slices/modalWindowSlice";
import { setAbcType, setBirthdayType } from "@/store/slices/sortSlice";
import type { RootState } from "@/store/store";
import Button from "@/components/UI/Button";
import Icon from "@/components/UI/Icon";

interface Props {
  className?: string;
}

const ModalWindowSort: FC<Props> = ({ className }) => {
  const dispatch = useDispatch();
  const valueSort = useSelector((state: RootState) => state.sortType);
  const closeModalTimeMS: number = 400;

  return (
    <div className={cn(className, styles.modalWrapper)}>
      <div className={styles.modalWindow}>
        <div className={styles.modalWindow__top}>
          <span className={styles.modalWindow__title}>Сортировка</span>
          <Button
            className={styles.modalWindow__close}
            onClick={() => dispatch(closeModal())}
            icon={<Icon iconId="icon-close" />}
          />
        </div>
        <div className={styles.radioGroup}>
          <div className={styles.custom_inputRadio}>
            <input
              className={styles.custom_inputRadio__input}
              type="radio"
              id="sort-abc"
              name="sort"
              value={"abc"}
              checked={valueSort === "abc"}
              onChange={() => {
                dispatch(setAbcType());
                setTimeout(() => dispatch(closeModal()), closeModalTimeMS);
              }}
            />
            <span
              className={cn(styles.custom_inputRadio__checkbox, {
                [styles.custom_inputRadio__checkbox_active]:
                  valueSort === "abc",
              })}
            ></span>
            <label
              className={styles.custom_inputRadio__label}
              htmlFor="sort-abc"
            >
              По алфавиту
            </label>
          </div>
          <div className={styles.custom_inputRadio}>
            <input
              className={styles.custom_inputRadio__input}
              type="radio"
              id="sort-birthday"
              name="sort"
              value={"birthday"}
              checked={valueSort === "birthday"}
              onChange={() => {
                dispatch(setBirthdayType());
                setTimeout(() => dispatch(closeModal()), closeModalTimeMS);
              }}
            />
            <span
              className={cn(styles.custom_inputRadio__checkbox, {
                [styles.custom_inputRadio__checkbox_active]:
                  valueSort === "birthday",
              })}
            ></span>
            <label
              className={styles.custom_inputRadio__label}
              htmlFor="sort-birthday"
            >
              По дню рождения
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalWindowSort;
