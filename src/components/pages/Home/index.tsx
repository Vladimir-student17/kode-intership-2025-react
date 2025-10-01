import cn from "classnames";
import { useState, type FC } from "react";
import styles from "./styles.module.scss";
import TopAppBar from "@/components/ToppAppBar";
import type { UsersList } from "@/types/UserData";
import UserList from "@/components/UserList";
import useSetPathPage from "@/hooks/useSetPathPage";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import ErrorMessage from "@/components/ErrorMessage";

interface Props {
  className?: string;
}

function ErrorFallback(props: FallbackProps) {
  return <ErrorMessage fallProps={props} />;
}

const Home: FC<Props> = ({ className }) => {
  useSetPathPage();
  const [userList, setUserList] = useState<UsersList | undefined>(undefined);

  function handleReset(): void {
    location.reload();
  }

  return (
    <div className="container">
      <div className={cn(className, styles.home)}>
        <TopAppBar setData={setUserList} />
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
          <UserList data={userList} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Home;
