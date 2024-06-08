import React from "react";
import { notFound } from "next/navigation";

import { APIProduct, apiGetProductbySlug } from "@/api/product";
import ProductPage from "@/app/components/productPage";

export default async function Product({ params }: Params) {
  const product = apiGetProductbySlug(params.slug);
  if (!product) {
    return notFound();
  }

  return (
    <ProductPage
      title={product.title}
      image={product.image}
      subtitle={product.subtitle}
      tags={product.tags}
      sales={product.sales}
    />
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): APIProduct {
  const product = apiGetProductbySlug(params.slug);

  if (!product) {
    return notFound();
  }

  return product;
}
