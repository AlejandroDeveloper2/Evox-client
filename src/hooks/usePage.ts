import React from "react";
import { useLocation } from "react-router-dom";

const usePage = (): string => {
  const [page, setPage] = React.useState<string>("");
  const location = useLocation();

  const getCurrentPage = (): string => {
    const url = location.pathname.split("/");
    const lastUrlElement = url.length - 1;
    const currentPage =
      url[lastUrlElement] === "dashboard"
        ? "Inicio"
        : url[lastUrlElement] === "referrals"
        ? "Referidos"
        : url[lastUrlElement] === "profile"
        ? "Mi Perfil"
        : "Equipo";
    return currentPage;
  };

  React.useEffect(() => {
    setPage(getCurrentPage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return page;
};

export default usePage;
