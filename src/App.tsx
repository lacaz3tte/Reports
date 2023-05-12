import Authorisation from "./pages/Authorisation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartComponent from "./pages/StartComponent";
import MainMenu from "./pages/MainMenu";
import NewReport from "./pages/NewReport";
import { ReportsProvider } from "./components/ReportsContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authorisation />,
    },
    {
      path: "/menu",
      element: <MainMenu />,
    },
    {
      path: "/newreport",
      element: <NewReport />,
    },
  ]);

  return (
    <StartComponent>
      <ReportsProvider>
        <RouterProvider router={router} />
      </ReportsProvider>
    </StartComponent>
  );
}

export default App;
