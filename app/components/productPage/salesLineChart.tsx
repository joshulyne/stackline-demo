import dynamic from "next/dynamic";
import React from "react";

import { APISale } from "@/api/product";

const NivoResponsiveLine = dynamic(
  () => import("@nivo/line").then((m) => m.ResponsiveLine),
  { ssr: false }
);

const SalesLineChart = (props: { salesData: APISale[] }): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="p-5">
        <p className="text-2xl text-gray-600">Retail Sales</p>
        <div style={{ height: 500 }}>
          <NivoResponsiveLine
            data={salesDataToNivoData(props.salesData)}
            theme={{
              tooltip: {
                container: {
                  color: "#141b2d",
                },
              },
            }}
            margin={{ top: 20, right: 120, bottom: 60, left: 50 }}
            xScale={{ format: "%Y-%m-%d", type: "time", useUTC: false }}
            xFormat="time:%Y-%m-%d"
            axisBottom={{
              format: "%b",
              tickValues: "every 1 month",
            }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            isInteractive
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

function salesDataToNivoData(salesData: APISale[]) {
  const retailSales = salesData.map((sale) => {
    return {
      x: sale.weekEnding,
      y: sale.retailSales,
    };
  });

  const retailerMargins = salesData.map((sale) => {
    return {
      x: sale.weekEnding,
      y: sale.retailerMargin,
    };
  });

  return [
    {
      id: "Retail Sales",
      data: retailSales,
    },
    {
      id: "Retail Margins",
      data: retailerMargins,
    },
  ];
}

export default SalesLineChart;
