import cn from "classnames";
import { useEffect, type FC } from "react";
import styles from "./styles.module.scss";
import { useGetUsersQuery } from "@/store/getUsers";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  const isDark = useSelector((state: RootState) => state.isDark);
  const { isError, isLoading, refetch } = useGetUsersQuery("all", {
    pollingInterval: 100000,
    refetchOnReconnect: true,
    refetchOnFocus: true,
    skip: false,
  });

  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        refetch();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isError, refetch]);

  return (
    <div
      className={cn(className, {
        [styles.header__error]: isError,
        [styles.header__loading]: isLoading,
        [styles.header__dark]: isDark,
      })}
    >
      <div className="container">
        <header className={cn(className, styles.header)}>
          <span
            className={cn(styles.header__title, {
              [styles.header__title__white]: isError || isLoading,
            })}
          >
            Поиск
          </span>
          {isLoading && (
            <span className={styles.header__message}>
              Секундочку, гружусь...
            </span>
          )}
          {isError && (
            <span className={styles.header__message}>
              Не могу обновить данные. Проверь соединение с интернетом.
            </span>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
