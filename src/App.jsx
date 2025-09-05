import { createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";

createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Error />,
  },
]);

function App() {
  return <div>Hello vite</div>;
}

export default App;
