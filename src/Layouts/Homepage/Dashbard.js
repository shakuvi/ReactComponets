import React from "react";
import TopProductSales from "./Dashboard/TopProductSales";
import TopDashboard from "./Dashboard/TopDashboard";
import SalesReport from "./Dashboard/SalesReport";
import SalesAnalythics from "./Dashboard/SalesAnalythics";
import OrderSuccessful from "./Dashboard/OrderSuccessful";
import MonthlyEarnings from "./Dashboard/MonthlyEarnings";
import ClientRevies from "./Dashboard/ClientRevies";
import Cards from "./Dashboard/Cards";
import Activity from "./Dashboard/Activity";

export default function Dashbard() {
  return (
    <div>
      <TopDashboard />
      <Cards />
      <MonthlyEarnings />
      <SalesAnalythics />
      <SalesReport />
      <Activity />
      <OrderSuccessful />
      <TopProductSales />
      <ClientRevies />
    </div>
  );
}
