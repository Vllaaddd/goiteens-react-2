import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Suspense } from "react";

export default function App() {
  return (
    <Suspense>
      <div className="container">
        <Navigation />
        <Outlet />
      </div>
    </Suspense>
  );
}