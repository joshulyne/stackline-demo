import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { APISale } from "@/api/product";

const columns = [
  {
    field: "weekEnding",
    headerName: "Week Ending",
    flex: 1,
  },
  {
    field: "retailSales",
    headerName: "Retail Sales",
    flex: 1,
  },

  {
    field: "wholesaleSales",
    headerName: "Wholesale Sales",
    flex: 1,
  },
  {
    field: "unitsSold",
    headerName: "Units Sold",
    flex: 1,
  },
  {
    field: "retailerMargin",
    headerName: "Retailer Margin",
    flex: 1,
  },
];

const SalesDataTable = (props: { salesData: APISale[] }): JSX.Element => {
  return (
    <div className=" bg-white">
      <Box
        height="50vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#666666",
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#666666",
          },
        }}
      >
        <DataGrid rows={salesDataToTable(props.salesData)} columns={columns} />
      </Box>
    </div>
  );
};

function formatToUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function salesDataToTable(salesData: APISale[]) {
  return salesData.map((s, i) => {
    return {
      id: i,
      weekEnding: s.weekEnding,
      retailSales: formatToUSD(s.retailSales),
      wholesaleSales: formatToUSD(s.wholesaleSales),
      unitsSold: s.unitsSold,
      retailerMargin: formatToUSD(s.retailerMargin),
    };
  });
}

export default SalesDataTable;
