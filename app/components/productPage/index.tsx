"use client";
import React from "react";

import { APISale } from "@/api/product";
import Header from "./header";
import ProductDescription from "./productDescription";
import SalesLineChart from "./salesLineChart";
import SalesDataTable from "./salesDataTable";

export interface ProductPageProps {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
  sales: APISale[];
}

const ProductPage = (props: ProductPageProps): JSX.Element => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="mx-8 my-20">
        <div className="flex space-x-5 w-full">
          <ProductDescription {...props} />
          <div className="flex-col space-y-5 w-full min-w-0">
            <SalesLineChart salesData={props.sales} />
            <SalesDataTable salesData={props.sales} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
