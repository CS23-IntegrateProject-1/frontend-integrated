import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <h1>This is root</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};