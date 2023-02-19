import { NavLink, Outlet } from "react-router-dom";
import { routesConfig } from "../routesConfig";

export const Layout = () => {
  return (
    <main>
      <header>
        {routesConfig
          .filter((r) => !r.hiddenOnTab)
          .map((config) => (
            <NavLink
              role={"button"}
              to={config.path}
              className={({ isActive }) => (isActive ? "active" : "outline")}
              key={config.path}
            >
              {config.title}
            </NavLink>
          ))}
      </header>

      <div>
        <Outlet />
      </div>
    </main>
  );
};
