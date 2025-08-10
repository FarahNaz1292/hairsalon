'use client';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


interface ReviewsType {
  _id: string;
  reviewer: {
    _id: string;
    username: string;
    email: string;
    image: string;
  };
  productReview: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

const ClientsReviews = ({ review }: { review:ReviewsType[]  }) => {
   if (!review || review.length === 0) return null;
  return (
    <div className='flex flex-col container mx-auto justify-center items-center m-4'>
      <h1 className='text-2xl font-bold'>
        Look what our customers have to say about our products.
      </h1>

      <Carousel opts={{ align: "start", loop: true }} className='m-4'>
        <CarouselContent>
          {review.map((reviews) => (
            <CarouselItem key={reviews._id}>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={reviews.reviewer.image} />
                  <AvatarFallback>
                    {reviews.reviewer.username[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">@{reviews.reviewer.username}</p>
                  <p className="text-sm text-muted-foreground">{reviews.comment}</p>
                  <p className="text-yellow-500 text-sm">Rating: {reviews.rating}/5</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default ClientsReviews


