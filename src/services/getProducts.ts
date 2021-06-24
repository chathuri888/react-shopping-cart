import { Product } from "../entities/Product";
import products from "../data/products.json";

import { normalizePRoducts } from "../library/Normalize";

import { Promise } from "bluebird";

export default async function getProducts(): Promise<Product[]> {
  const formateData = normalizePRoducts(products);
  return Promise.delay(1000, formateData);
}
