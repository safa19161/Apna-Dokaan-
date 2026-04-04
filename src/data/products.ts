export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  affiliateLink: string;
  featured?: boolean;
}

export const categories = [
  "Electronics",
  "Home & Kitchen",
  "Clothing",
  "Beauty",
  "Books",
];

export const products: Product[] = [
  {
    id: "1",
    title: "Bajaj Pygmy Mini Fan 110MM | USB Charging | Multi-Clip Function | Rechargeable | 4-Hr Back-up | Silent Operation | Longer Battery Life | Energy Efficient | Portable【White】",
    description: "Bajaj Pygmy Mini Fan 110mm | USB Charging Fan | Multi-Clip Function| Rechargeable Fan| Battery Fan| 4-Hr Back-up| Silent Operation| Longer Battery Life| Energy Efficient| Portable Fan| White Table Fan",
    price: 949.00,
    imageUrl: "https://m.media-amazon.com/images/I/51iKBZOWXYL._SL1080_.jpg",
    category: "Electronics",
    affiliateLink: "https://amzn.to/4uY1xcv",
    featured: true,
  },
  {
    id: "2",
    title: "Portronics Ruffpad 15 Re-Writable LCD Screen 38.1cm (15-inch) Writing Pad for Drawing, Playing, Handwriting Gifts for Kids & Adults",
    description: "[REWRITABLE LCD NOTEPAD] : The LCD notepad is the perfect tool for drawing, writing, taking notes, and being creative. Save yourself from the hassle of finding paper for your tiny notes, or ruining your diaries with doodles, just grab the Ruffpad 15 and get started.",
    price: 1199,
    imageUrl: "https://m.media-amazon.com/images/I/61Wf0pRWiRL._SL1500_.jpg",
    category: "Electronics",
    affiliateLink: "https://amzn.to/47OYA4n",
  },
  {
    id: "3",
    title: "Amazon Solimo Plastic Revolving Spice Rack Set of 16 Pieces | Standard Size | Pull Out Shelf | Tabletop | Light Brown",
    description: "Revolving spice rack set for home kitchen use Safe to use; 100% food grade and BPA free plastic Carousel style; for kitchen countertop making it easy to access Spice jars contain 3 holes with twistable lids, making it easy to use and refill Keeps spices fresh and free from odour Easy to clean; can be put through your dishwasher Product is made in India",
    price: 579,
    imageUrl: "https://m.media-amazon.com/images/I/8137ccM2gNL._SL1500_.jpg",
    category: "Home & Kitchen",
    affiliateLink: "https://amzn.to/41ANCM2",
    featured: true,
  },
  {
    id: "4",
    title: "Lymio Cargo for Men || Cotton Cargo Pant || Drawstring Waist Pant (Also Available in Plus Sizes) (38-41)",
    description: "Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men",
    price: 699,
    imageUrl: "https://m.media-amazon.com/images/I/61fScC033bL._SY550_.jpg",
    category: "Clothing",
    affiliateLink: "https://amzn.to/4lZVW1h",
  },
  {
    id: "5",
    title: "Kérastase Discipline Fluidealiste Anti-Frizz Shampoo | Sulphate-Free Shampoo for Frizzy Hair | Infused with Morpho-Kératine, Surface Perfector & High Precision Care Agent | 250ml",
    description: "SMOOTHENS HAIR & CONTROLS FRIZZ: Specially crafted for unruly, frizz-prone hair, the Kérastase Discipline Bain Fluidealiste Gentle Anti-Frizz Shampoo tames flyaways, smoothens hair fibre, and delivers lasting frizz control for 72 hours*.",
    price: 2600,
    imageUrl: "https://m.media-amazon.com/images/I/61n7MBtTpQL._SL1500_.jpg",
    category: "Beauty",
    affiliateLink: "https://amzn.to/4te3dgk",
    featured: true,
  },
  {
    id: "6",
    title: "Harry Potter : The Complete Collection (Set of 7 Books)",
    description: "Loved by millions of readers worldwide, let the greatest children's book series of all time take you on an unforgettable journey. The hope and wonder of Harry Potter's world will make you want to escape to Hogwarts again and again. This magical paperback box set is perfect for gifting!",
    price: 2900,
    imageUrl: "https://m.media-amazon.com/images/I/81vk-9zjgpL._SL1500_.jpg",
    category: "Books",
    affiliateLink: "https://amzn.to/3O3a4ud",
  },
  {
    id: "7",
    title: "iQOO Z10R 5G (Aquamarine, 8GB RAM, 256GB Storage) | 32MP 4K Selfie Camera | Quad-Curved AMOLED Display | Dimensity 7400 Processor with 750K+ AnTuTu",
    description: "Powerful Dimensity 7400 5G Processor with 750K+ AnTuTu Score* - Built on flagship 4nm TSMC process technology to provide exceptional power-efficiency. Comes with Large Graphite cooling area to give excellent heat management.",
    price: 24998,
    imageUrl: "https://m.media-amazon.com/images/I/61WM6IDaBPL._SL1200_.jpg",
    category: "Electronics",
    affiliateLink: "https://amzn.to/3PAlyWx",
    featured: true,
  },
  {
    id: "8",
    title: "ECOVACS DEEBOT N30 White 2 in 1 Robot Vacuum Cleaner & Mop, 2025 New Launch, 10000 Pa Suction, 5200mAh Battery, Covers 3500+ Sq ft in Single Charge, Zero Tangle 2.0 Technology, Advanced TrueMapping",
    description: "WORLD NO. 1 IN ROBOT VACUUM CLEANERS: ECOVACS Offers an unparalleled Complete Hands Free Cleaning experience. Over the years ECOVACS has emerged as the highest-selling Robot Vacuum Cleaner Brand. ECOVACS Robots come with cutting-edge technology, advanced mapping, efficient cleaning, and smart app controls, DESIGNED SPECIALLY FOR INDIAN HOUSES: ECOVACS Robots are specially equipped to handle different floors (Tile, Wooden, Carpet, Marble) and are very efficient in cleaning edges.",
    price: 22999.00,
    imageUrl: "https://m.media-amazon.com/images/I/51LS9nq4PoL._SL1164_.jpg",
    category: "Home & Kitchen",
    affiliateLink: "https://amzn.to/410IOQ2",
  },
  {
    id: "9",
    title: "FLYNGO Vintage Car Open Headlights Key Holder for Home Decor Stylish",
    description: "Vintage Design: This key holder features a vintage car design with open headlights, perfect for a farmhouse or retro-inspired decor.",
    price: 346.00,
    imageUrl: "https://m.media-amazon.com/images/I/71O09dbZeaL._SL1500_.jpg",
    category: "Home & Kitchen",
    affiliateLink: "https://amzn.to/4sPvQ3M",
  },
  {
    id: "10",
    title: "Magic 3D Pen with (20 in 1) 5M for 3D Printing with Speed Control, Advanced Temperature Regulation, OLED Display & Ergonomic Design – Compatible with Variety of Filaments.",
    description: "Next-Gen Smart Technology: Equipped with intelligent control features for seamless 3D printing, making it ideal for artists, designers, hobbyists, and professionals.",
    price: 1,859,
    imageUrl: "https://m.media-amazon.com/images/I/51jkoGBksZL._SL1000_.jpg",
    category: "Electronics",
    affiliateLink: "https://amzn.to/4ca0spC",
  }
];
