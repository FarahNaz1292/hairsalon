
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
import NavigationBar from '@/component/NavigationBar';
import Footer from '@/component/Footer';

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
    <NavigationBar/>
<div className='relative'>
   <div><Image src="https://www.aveda.com/media/export/cms/Site_Refreshes/FY24/PLP_Headers/Desktop/NewHaircare_PLPBanners_Desktop.jpg" alt="aveda bg" width={450} height={200} className='w-full'/></div>
  <div className='absolute top-1/4 left-10'>
    <h1 className='text-5xl font-bold'>New in hair<br/> care</h1>
    <h2 className='text-2xl font-semibold'>Explore our latest launches and exciting <br/>innovations for hair and scalp.</h2>
  </div>
 
</div>

      <div className='flex flex-col p-4 items-center justify-center bg-black '>
        <h1 className='text-2xl font-bold text-white m-4'>Favorite Products</h1>
        <Carousel className="w-full max-w-7xl">
          <CarouselContent className="-ml-2">
            {products.map((product, index) => (
              <CarouselItem key={product._id} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card className=''>
                    <CardContent className="flex  items-center justify-center gap-2 p-4">
                      <Link href={`/products/${product._id}`} className="flex flex-col items-center">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={300}
                          height={200}  
                             className="rounded-md object-cover w-full h-[200px]" 
                        />
                        <span className="text-2xl font-semibold">{product.name}</span>

                        <span className="text-md  text-gray-500 m-2">View Details</span>

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
      <Footer/>
    </>


  );
}
