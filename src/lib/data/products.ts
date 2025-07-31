


export type Product={
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string[];
    stock: number;
}

const products :Product[]=[
      {
    id: '1',
    name: 'Hair Perfector',
    description: 'A nourishing heat protector and Prefector serum for silky smooth and strong hair .',
    imageUrl: ['https://olaplex.com/cdn/shop/files/PLP_Bestsellers_Category_572x800_40cbca03-393d-4492-8d95-a32a75755387.jpg?v=1739198701','https://olaplex.com/cdn/shop/files/PLP_double_mb_2x_750_1.gif?v=1753374169&width=1200','https://olaplex.com/cdn/shop/files/PLP_Shampooconditioner_Category_572x800_4ee19cc1-0fd5-4618-b438-c538be100685.jpg?v=1739200366', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yFkyYKM8uS0WOtDGtaiOgqvIk-yV6sMD7MeJmU6vgHDZE1NYxNsTNL9HDuxwjIv-zFw&usqp=CAU' ],
    price: 19.99,
    stock: 12,
  },
  {
    id: '2',
    name: 'Shampoo',
    description: 'Cleanses, hydrates and refreshes your scalp.',
    imageUrl: ['https://images.heb.com/is/image/HEBGrocery/001858900-1','https://images.heb.com/is/image/HEBGrocery/001858900-2?jpegSize=150&hei=1400&fit=constrain&qlt=75&v=1', 'https://images.heb.com/is/image/HEBGrocery/001858900-4?jpegSize=150&hei=1400&fit=constrain&qlt=75&v=1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYI9EUhgcF_FBUHo5ll9bG-aYbf-tCZRC-S-oWgWpwZ3oOgEWwO7AgkhgO0LbLkmhCmxY&usqp=CAU' ],
    price: 14.99,
    stock: 7,
  },
  {
    id: '3',
    name: 'Hair Styling Spray',
    description: 'Hairspray might just be the unsung hero of your hair care lineup',
    imageUrl: [ 'https://colorwowhair.com/cdn/shop/products/CW535_CultFavorite_295ml_2048x2048_ce524510-1ff1-4ce8-b8c4-49c3d5346fcf_1600x.jpg?v=1666362520','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAAKttpQ6glTnqzaE-gW_Jm8yc-AD-aXteA&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6cm3iLvzIs_Vf1zv07M3Ji7kcVH0npDlXA&s', 'https://www.sephora.com/productimages/product/p469058-av-02-zoom.jpg'],
    price: 16.49,
    stock: 4,
  },
     {
    id: '4',
    name: 'Conditioner',
    description: 'Conditions and instantly detangles to prevent breakage; strengthens and repairs with the power of plants',
    imageUrl: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjH2ORAOmXgIiU--bmba-Jkp4r2Gfy0qIkg&s','https://arual.com/wp-content/uploads/2020/09/Li%CC%81nea-Arga%CC%81n-Formato-grande-1-600x600.jpg','https://arual.com/wp-content/uploads/2020/09/Li%CC%81nea-Arga%CC%81n-Acondicionador-4-600x600.jpg', 'https://www.byrdie.com/thmb/HWuiGkxWa4Z9V29_QZICpJkKRt8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/byr-conditioners-tested-tout-b13e13bd39f8440789ee9373bdd8ba75.jpg'],
    price: 19.99,
    stock: 12,
  },
  {
    id: '5',
    name: 'Paddle Brush',
    description: 'Professional paddle brush features extended bristles for easy detangling and reduces stress to hair and scalp during blow-drying and styling. Ideal for smoothing hair during blow-drying to create smooth, straight styles.',
    imageUrl: ['https://www.vocehaircare.com/cdn/shop/files/Photo03b_1200.jpg?v=1684873736&width=416','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRd-kboDG62fWsdNPTCQIRPjJoGDy3g1Fush5wZChu3bUG-R-4mIvTG_0j_ya7lBBs4vA&usqp=CAU','https://www.lilyengland.com/cdn/shop/products/RGPaddle-Brush---Lifestyle-Image-Before-_-After_1080x.jpg?v=1637925379'],
    price: 14.99,
    stock: 7,
  },
  {
    id: '6',
    name: 'Conditioner',
    description: 'Perfect curls, every time. Enhanced with Digital T3 SinglePass® technology, the T3 SinglePass Curling Wand is designed to create shiny polished curls in just one pass. A smart microchip continually monitors and adjusts power to minimise heat fluctuations and maintain consistent temperature. High-performance ceramic heaters ensure even heat, free of hot spots, for one-pass styling.',
    imageUrl: [ 'https://www.conair.com/on/demandware.static/-/Sites-master-us/default/dw2fdf0719/images/Hair/Styling_Men_and_Women/Curling_Irons/cd701gn-conair-curling-iron-main/inset_cd701gn-conair-curling-iron-inset1.png','https://di2ponv0v5otw.cloudfront.net/posts/2022/09/24/632f13b9c5df6c7b2a62c83f/m_wp_632f145db635f8c7f71bebb4.webp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbskqOXDt9PdQeUbE5yVffN5alPk7kpKEJA&s','https://www.chrisandsons.co.uk/media/catalog/product/6/1/61121_61121ze.jpg'],
    price: 16.49,
    stock: 4,
  },
]