import watchImage1 from "./img/productImages/WatchImage1.jpg";

const Products = [
  {
    id: 156,
    name: "Cpu",
    description: "a computation processing unit",
    number: 1234,
    rating: 4.5,
    beforePrice: 2145,
    price: 2100,
    category: "/computer/computerComponents/cpu/",
    image: [],
    keywords: ["computer", "computerComponents", "cpu", "unit", "processing"],
    quantity: 1,
  },
  {
    id: 182,
    name: "Freezer",
    description: "a freezer to freeze stuff",
    number: 1234,
    rating: 4.49,
    beforePrice: 900,
    price: 600,
    category: "/appliance/freezer/",
    image: ["image", "image2"],
    keywords: ["freezer", "cold"],
    quantity: 1,
  },
  {
    id: 12344,
    name: "new",
    description: "a new to new stuff",
    number: 1234,
    rating: 4.49,
    beforePrice: 900,
    price: 600,
    category: "/appliance/new/hello/here/",
    image: ["image", "image2"],
    keywords: ["freezer", "cold"],
    quantity: 1,
  },
  {
    id: 183,
    name: "cooler",
    description: "a cooler to cool stuff",
    number: 6123,
    rating: 2.13,
    beforePrice: 600,
    price: 300,
    category: "/appliance/cooler/",
    image: [],
    keywords: ["cooler", "cold"],
    quantity: 1,
  },
  {
    id: 113,
    name: "gpu",
    description: "a computation processing unit",
    number: 1213,
    rating: 5.6,
    beforePrice: 10000,
    price: 6000,
    category: "/computer/computerComponents/gpu/",
    image: [],
    keywords: ["computer", "computerComponents", "gpu", "unit", "processing"],
    quantity: 1,
  },
  {
    id: 185,
    name: "Galaxy watch",
    description: "a beautiful smart watch, with black matt silicon strap",
    number: 4596,
    rating: 6,
    beforePrice: 3050,
    price: 2780,
    category: "/accessory/watch/",
    image: [watchImage1],
    keywords: ["galaxy", "watch", "smart", "black", "matt", "silicon"],
    quantity: 1,
  },
  {
    id: 141,
    name: "chair",
    description: "a furniture to sit on",
    number: 1234,
    rating: 4.5,
    beforePrice: 2145,
    price: 2100,
    category: "/appliance/furniture/chair",
    image: [],
    keywords: ["chair", "appliance", "furniture"],
    quantity: 1,
  },
];

export default Products;
