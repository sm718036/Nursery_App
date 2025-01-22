import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function PlantCategories() {
  const plantsCatalogue = {
    categories: [
      {
        id: 1,
        name: "Indoor Plants",
        plants: [
          {
            id: 101,
            name: "Snake Plant",
            price: 15.99,
            description: "Low-maintenance plant perfect for indoors.",
            imgUrl:
              "https://images.unsplash.com/photo-1613498717076-c0d2d82ecf2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuYWtlJTIwcGxhbnR8ZW58MHwwfDB8fHww",
          },
          {
            id: 102,
            name: "Peace Lily",
            price: 18.49,
            description: "A beautiful plant that purifies indoor air.",
            imgUrl:
              "https://images.unsplash.com/photo-1575805501150-e064fbd815dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBlYWNlJTIwTGlseXxlbnwwfDB8MHx8fDA%3D",
          },
          {
            id: 103,
            name: "Aloe Vera",
            price: 12.99,
            description: "Known for its medicinal properties and easy care.",
            imgUrl:
              "https://images.unsplash.com/photo-1711915498871-d0f2d47674c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFsb2UlMjBWZXJhfGVufDB8MHwwfHx8MA%3D%3D",
          },
          {
            id: 104,
            name: "Spider Plant",
            price: 10.99,
            description: "A resilient plant that thrives indoors.",
            imgUrl:
              "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BpZGVyJTIwUGxhbnR8ZW58MHwwfDB8fHww",
          },
          {
            id: 105,
            name: "English Ivy",
            price: 14.99,
            description: "A climbing plant that is easy to grow in pots.",
            imgUrl:
              "https://images.unsplash.com/photo-1542347369-6fb75718485c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVuZ2xpc2glMjBpdnl8ZW58MHwwfDB8fHww",
          },
        ],
      },
      {
        id: 2,
        name: "Succulents",
        plants: [
          {
            id: 201,
            name: "Echeveria",
            price: 8.99,
            description: "A popular rosette-shaped succulent.",
            imgUrl:
              "https://images.unsplash.com/photo-1637634378394-69f3f3c6b646?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWNoZXZlcmlhfGVufDB8MHwwfHx8MA%3D%3D",
          },
          {
            id: 202,
            name: "Jade Plant",
            price: 20.99,
            description: "A tree-like succulent that grows slowly.",
            imgUrl:
              "https://images.unsplash.com/photo-1597334133882-7027ac9bd95e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEphZGUlMjBQbGFudHxlbnwwfDB8MHx8fDA%3D",
          },
          {
            id: 203,
            name: "Cactus",
            price: 5.49,
            description: "A drought-tolerant plant perfect for sunny spaces.",
            imgUrl:
              "https://images.unsplash.com/photo-1509222413196-40eb6b6b96e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENhY3R1c3xlbnwwfDB8MHx8fDA%3D",
          },
          {
            id: 204,
            name: "Sedum",
            price: 6.99,
            description: "A hardy, drought-resistant succulent.",
            imgUrl:
              "https://images.unsplash.com/photo-1566221259779-b9f64bde5219?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VkdW18ZW58MHwwfDB8fHww",
          },
          {
            id: 205,
            name: "String of Pearls",
            price: 12.49,
            description: "A unique trailing succulent with round beads.",
            imgUrl:
              "https://images.unsplash.com/photo-1648070024741-43f8fa965966?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RyaW5nJTIwb2YlMjBQZWFybHN8ZW58MHwwfDB8fHww",
          },
        ],
      },
      {
        id: 3,
        name: "Flowering Plants",
        plants: [
          {
            id: 301,
            name: "Rose",
            price: 12.99,
            description: "A classic flowering plant with fragrant blooms.",
            imgUrl:
              "https://images.unsplash.com/photo-1518931479438-62470470be9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZXxlbnwwfDB8MHx8fDA%3D",
          },
          {
            id: 302,
            name: "Tulip",
            price: 10.49,
            description: "A bright spring flower with various colors.",
            imgUrl:
              "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHVsaXB8ZW58MHwwfDB8fHww",
          },
          {
            id: 303,
            name: "Sunflower",
            price: 8.99,
            description: "Large, yellow blooms that follow the sun.",
            imgUrl:
              "https://images.unsplash.com/photo-1512238701577-f182d9ef8af7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3VuZmxvd2VyfGVufDB8MHwwfHx8MA%3D%3D",
          },
          {
            id: 304,
            name: "Orchid",
            price: 25.99,
            description: "Elegant flowers with delicate, exotic patterns.",
            imgUrl:
              "https://images.unsplash.com/photo-1586799958784-8687bc5d659f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T3JjaGlkfGVufDB8MHwwfHx8MA%3D%3D",
          },
          {
            id: 305,
            name: "Lily",
            price: 14.99,
            description: "A fragrant flower often associated with elegance.",
            imgUrl:
              "https://images.unsplash.com/photo-1542478080-8c03409bbf22?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TGlseXxlbnwwfDB8MHx8fDA%3D",
          },
        ],
      },
      {
        id: 4,
        name: "Herbs",
        plants: [
          {
            id: 401,
            name: "Basil",
            price: 3.99,
            description: "A fragrant herb perfect for cooking.",
            imgUrl:
              "https://plus.unsplash.com/premium_photo-1661697942008-430d3e8937d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFzaWwlMjBoZXJifGVufDB8MHwwfHx8MA%3D%3D",
          },
          {
            id: 402,
            name: "Mint",
            price: 2.99,
            description: "A refreshing herb with a cool flavor.",
            imgUrl:
              "https://plus.unsplash.com/premium_photo-1694699354812-fead620b7d4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWludCUyMGhlcmJ8ZW58MHwwfDB8fHww",
          },
          {
            id: 403,
            name: "Rosemary",
            price: 4.49,
            description: "A fragrant herb used in cooking and home decor.",
            imgUrl:
              "https://plus.unsplash.com/premium_photo-1661697218343-7bc09e2bbdd7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Um9zZW1hcnl8ZW58MHwwfDB8fHww",
          },
          {
            id: 404,
            name: "Thyme",
            price: 3.49,
            description:
              "A versatile herb often used in Mediterranean cuisine.",
            imgUrl:
              "https://images.unsplash.com/photo-1625128143202-bd596f7639d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGh5bWUlMjBoZXJifGVufDB8MHwwfHx8MA%3D%3D",
          },
          {
            id: 405,
            name: "Oregano",
            price: 3.79,
            description: "A flavorful herb used in various dishes.",
            imgUrl:
              "https://plus.unsplash.com/premium_photo-1700064759190-f8a6b2b27f7f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8T3JlZ2FubyUyMGhlcmJ8ZW58MHwwfDB8fHww",
          },
        ],
      },
      {
        id: 5,
        name: "Trees",
        plants: [
          {
            id: 501,
            name: "Ficus Tree",
            price: 40.99,
            description: "A small tree with large glossy leaves.",
            imgUrl:
              "https://images.unsplash.com/photo-1590238158712-974f9ae90efb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZpY3VzJTIwVHJlZXxlbnwwfDB8MHx8fDA%3D",
          },
          {
            id: 502,
            name: "Maple Tree",
            price: 55.99,
            description: "A large tree known for its beautiful fall foliage.",
            imgUrl:
              "https://images.unsplash.com/photo-1734168323006-4bfe707108ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFwbGUlMjBUcmVlfGVufDB8MHwwfHx8MA%3D%3D",
          },
          {
            id: 503,
            name: "Oak Tree",
            price: 60.49,
            description: "A sturdy tree with strong branches and acorns.",
            imgUrl:
              "https://images.unsplash.com/photo-1592888320559-4544ed5bda71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T2FrJTIwVHJlZXxlbnwwfDB8MHx8fDA%3D",
          },
          {
            id: 504,
            name: "Palm Tree",
            price: 35.99,
            description: "A tropical tree with long, feathery leaves.",
            imgUrl:
              "https://images.unsplash.com/photo-1432298026442-0eabd0a98870?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFsbSUyMFRyZWV8ZW58MHwwfDB8fHww",
          },
          {
            id: 505,
            name: "Citrus Tree",
            price: 45.99,
            description:
              "A fruit-bearing tree that produces fresh citrus fruits.",
            imgUrl:
              "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENpdHJ1cyUyMFRyZWV8ZW58MHwwfDB8fHww",
          },
        ],
      },
    ],
  };
  const {cart} = useSelector(state => state.cart)
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-3 p-2">
        {plantsCatalogue.categories.map((category) => {
          return (
            <div key={category.id}>
              <h1 className="text-center text-2xl font-semibold md:text-4xl underline  mb-4">
                {category.name}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-4 mb-2">
                {category.plants.map((plant) => {
                  return <ProductCard key={plant.id} product={plant} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PlantCategories;
