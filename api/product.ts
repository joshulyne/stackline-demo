import * as productData from "../data/stackline_frontend_assessment_data_2021.json";

export interface APIProduct {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: APIReview[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: APISale[];
}

export interface APIReview {
  customer: string;
  review: string;
  score: number;
}

export interface APISale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export const PRODUCT_DATA: APIProduct[] = productData;

export const apiGetProductbySlug = (slug: string): APIProduct | undefined => {
  const product = Object.values(PRODUCT_DATA).filter((p) => p.id == slug);
  return product[0];
};

export const apiGetReviewsByProductSlug = (slug: string): APIReview[] => {
  const product = Object.values(PRODUCT_DATA).filter((p) => p.id == slug);
  return product[0].reviews;
};

export const apiGetSalesByProductSlug = (slug: string): APISale[] => {
  const product = Object.values(PRODUCT_DATA).filter((p) => p.id == slug);
  return product[0].sales;
};
