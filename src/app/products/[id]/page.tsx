
import dbConnect from '@/lib/dbConnect'
import { Product } from '@/lib/models/Products'
import React from 'react'

import SingleProductPage from '@/component/SingleProductPage'
interface SingleProductPageProps {
  Product: []
}
const page = async function ({ params }: { params: { id: string } }) {
  await dbConnect();
 const product = await Product.findById(params.id);

  if (!product) return <div>Product not found</div>;

  return <SingleProductPage product={JSON.parse(JSON.stringify(product))} />;
}

export default page