import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
