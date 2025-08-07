
import { Product } from '@/lib/models/Products';
import Link from 'next/link';
import dbConnect from '@/lib/dbConnect';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

export default async function ProductsPage() {
  await dbConnect();
  interface ProductType {
    _id: string;
    name: string;
    __v: number;
    images: string[];
    description?: string;
    price?: number;

  }
  const products = (await Product.find().lean()) as ProductType[];

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-black'>
        <Carousel className="w-full max-w-sm ">
          <CarouselContent className="-ml-1">
            {products.map((product, index) => (
              <CarouselItem key={product._id} className="pl-1 md:basis-1 lg:basis-sm">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Link href={`/products/${product._id}`} className="flex flex-col items-center">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={300}
                          height={200}
                          style={{ objectFit: "cover", width: "100%", height: "auto" }}
                        />
                        <span className="text-2xl font-semibold">{product.name}</span>
                        <span className="text-lg font-bold ">${product.price}</span>
                        <p className='text-center'>{product.description}</p>
                        <span className="text-sm text-gray-500 m-2">View Details</span>

                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>


  );
}
