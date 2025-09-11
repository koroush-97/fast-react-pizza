import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}

      <Header />
    <div className="overflow-y-auto ">
        <main className="mx-auto max-w-3xl bg-red-500">
        <Outlet />
      </main>

    </div>
      
      <CartOverview />
    </div>
  );
}
