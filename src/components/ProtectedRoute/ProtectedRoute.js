import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  // const [isLocationSavedNews, setIsLocationSavedNews] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // let location = useLocation();
  // useEffect(() => {
  //   if (location.pathname === "/saved-news") {
  //     setIsLocationSavedNews(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (props.isLoggedIn) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, [props.isLoggedIn]);

  // useEffect(() => {
  //   if (isLocationSavedNews && !isLoggedIn) {
  //     props.onSetIsPopupOpened(true);
  //     props.onSetIsFormLoginActive(true);

  //   } else {
  //     props.onSetIsPopupOpened(false);
  //     props.onSetIsFormLoginActive(false);
  //   }
  // }, [isLocationSavedNews, isLoggedIn]);

  return (
    <Route path={props.path}>
      {props.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />}
    </Route>
  );
}

export default ProtectedRoute;
