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
        : url[lastUrlElement] === "evoxAcademy"
        ? "Academia"
        : url[lastUrlElement] === "mamAccounts"
        ? "Trading automático Cuentas MAM"
        : url[lastUrlElement] === "commissions"
        ? "Trading automático Comisiones"
        : url[lastUrlElement] === "kindOfAccounts"
        ? "Bridge funds Tipo de cuentas PASO 1"
        : url[lastUrlElement] === "myAccounts"
        ? " BRIDGE FUNDS Mis cuentas"
        : url[lastUrlElement] === "syntheticsPayment"
        ? "BRIDGE FUNDS TIPOS DE CUENTA PASO 2 PAGO SINTETICOS"
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
