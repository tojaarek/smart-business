import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import { useEffect } from "react";
import { fetchUsers } from "./redux/app.actions";
import { useAppDispatch } from "./redux/hooks";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./redux/app.selectors";
import Loader from "./components/Loader/Loader";

const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return isLoading ? <Loader /> : <DashboardPage />;
};

export default App;
