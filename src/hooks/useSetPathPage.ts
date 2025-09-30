import { togglePage } from "@/store/slices/togglePageSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useSetPathPage = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(togglePage(window.location.pathname));
  }, [dispatch]);
};

export default useSetPathPage;
