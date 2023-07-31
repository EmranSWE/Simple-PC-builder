import React from "react";

import DashboardLayout from "@/components/Layouts/DashboardLayout";
import RootLayout from "@/components/Layouts/RootLayout";

const PcBuilder = () => {
  return (
    <div>
      <h1>Admin page</h1>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
