import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const menuItems = [
  // Appetizers
  {
    name: "James Town Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    price: 56.0,
    category: "appetizer",
    image: "/images/traditional-delicious-gulas-dish-assortment.jpg",
    rating: 4.5,
  },
  {
    name: "Tokusen Wagyu",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: 40.0,
    category: "appetizer",
    image:
      "/images/chicken-wings-plate-appetizing-potatoes-chicken-wings-onion-herbs.jpg",
    rating: 4.8,
  },
  {
    name: "Avocado Dela Ram",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 27.0,
    category: "appetizer",
    image: "/images/menu-image-5.png",
    rating: 4.3,
  },
  {
    name: "Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    price: 56.0,
    category: "appetizer",
    image: "/images/Salad.png",
    rating: 4.2,
  },
  {
    name: "Butternut Pumpkin",
    description:
      "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    price: 7.0,
    category: "appetizer",
    image:
      "/images/top-view-arrangement-with-delicious-local-food-dish.jpg",
    rating: 4.0,
  },
  {
    name: "Olivas Rellenas",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 90.0,
    category: "appetizer",
    image: "/images/menu-image-9.png",
    rating: 4.7,
  },
  {
    name: "Richo Delmon",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 90.0,
    category: "appetizer",
    image:
      "/images/steak-dinner-with-red-wine-ready-warm-cozy-restaurant.jpg",
    rating: 4.6,
  },
  {
    name: "Tokusen Wagyu Special",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: 40.0,
    category: "appetizer",
    image:
      "/images/chicken-wings-plate-appetizing-potatoes-chicken-wings-onion-herbs.jpg",
    rating: 4.8,
  },

  // Main Dishes
  {
    name: "James Town Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    price: 56.0,
    category: "main",
    image: "/images/traditional-delicious-gulas-dish-assortment.jpg",
    rating: 4.5,
  },
  {
    name: "Tokusen Wagyu",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: 40.0,
    category: "main",
    image:
      "/images/chicken-wings-plate-appetizing-potatoes-chicken-wings-onion-herbs.jpg",
    rating: 4.8,
  },
  {
    name: "Avocado Dela Ram",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 27.0,
    category: "main",
    image: "/images/menu-image-5.png",
    rating: 4.3,
  },
  {
    name: "Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    price: 56.0,
    category: "main",
    image: "/images/Salad.png",
    rating: 4.2,
  },
  {
    name: "Butternut Pumpkin",
    description:
      "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    price: 7.0,
    category: "main",
    image:
      "/images/top-view-arrangement-with-delicious-local-food-dish.jpg",
    rating: 4.0,
  },
  {
    name: "Olivas Rellenas",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 90.0,
    category: "main",
    image: "/images/menu-image-9.png",
    rating: 4.7,
  },
  {
    name: "Richo Delmon",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 90.0,
    category: "main",
    image:
      "/images/steak-dinner-with-red-wine-ready-warm-cozy-restaurant.jpg",
    rating: 4.6,
  },
  {
    name: "Tokusen Wagyu Special",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: 40.0,
    category: "main",
    image:
      "/images/chicken-wings-plate-appetizing-potatoes-chicken-wings-onion-herbs.jpg",
    rating: 4.8,
  },

  // Desserts
  {
    name: "James Town Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    price: 56.0,
    category: "dessert",
    image: "/images/traditional-delicious-gulas-dish-assortment.jpg",
    rating: 4.5,
  },
  {
    name: "Tokusen Wagyu",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: 40.0,
    category: "dessert",
    image:
      "/images/chicken-wings-plate-appetizing-potatoes-chicken-wings-onion-herbs.jpg",
    rating: 4.8,
  },
  {
    name: "Avocado Dela Ram",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 27.0,
    category: "dessert",
    image: "/images/menu-image-5.png",
    rating: 4.3,
  },
  {
    name: "Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    price: 56.0,
    category: "dessert",
    image: "/images/Salad.png",
    rating: 4.2,
  },
  {
    name: "Butternut Pumpkin",
    description:
      "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    price: 7.0,
    category: "dessert",
    image:
      "/images/top-view-arrangement-with-delicious-local-food-dish.jpg",
    rating: 4.0,
  },
  {
    name: "Olivas Rellenas",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 90.0,
    category: "dessert",
    image: "/images/menu-image-9.png",
    rating: 4.7,
  },
  {
    name: "Richo Delmon",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 90.0,
    category: "dessert",
    image:
      "/images/steak-dinner-with-red-wine-ready-warm-cozy-restaurant.jpg",
    rating: 4.6,
  },
  {
    name: "Tokusen Wagyu Special",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: 40.0,
    category: "dessert",
    image:
      "/images/chicken-wings-plate-appetizing-potatoes-chicken-wings-onion-herbs.jpg",
    rating: 4.8,
  },

  // Drinks
  {
    name: "James Town Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    price: 56.0,
    category: "drink",
    image: "/images/traditional-delicious-gulas-dish-assortment.jpg",
    rating: 4.5,
  },
  {
    name: "Tokusen Wagyu",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: 40.0,
    category: "drink",
    image:
      "/images/chicken-wings-plate-appetizing-potatoes-chicken-wings-onion-herbs.jpg",
    rating: 4.8,
  },
  {
    name: "Avocado Dela Ram",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 27.0,
    category: "drink",
    image: "/images/menu-image-5.png",
    rating: 4.3,
  },
  {
    name: "Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    price: 56.0,
    category: "drink",
    image: "/images/Salad.png",
    rating: 4.2,
  },
  {
    name: "Butternut Pumpkin",
    description:
      "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    price: 7.0,
    category: "drink",
    image:
      "/images/top-view-arrangement-with-delicious-local-food-dish.jpg",
    rating: 4.0,
  },
  {
    name: "Olivas Rellenas",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 90.0,
    category: "drink",
    image: "/images/menu-image-9.png",
    rating: 4.7,
  },
  {
    name: "Richo Delmon",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    price: 90.0,
    category: "drink",
    image:
      "/images/steak-dinner-with-red-wine-ready-warm-cozy-restaurant.jpg",
    rating: 4.6,
  },
  {
    name: "Tokusen Wagyu Special",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    price: 40.0,
    category: "drink",
    image:
      "/images/chicken-wings-plate-appetizing-potatoes-chicken-wings-onion-herbs.jpg",
    rating: 4.8,
  },
];

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.activityLog.deleteMany();
  await prisma.reservation.deleteMany();
  await prisma.contactMessage.deleteMany();
  await prisma.menuItem.deleteMany();
  await prisma.user.deleteMany();

  // Create Super Admin
  const hashedPassword = await bcrypt.hash("Admin123!", 12);

  const admin = await prisma.user.create({
    data: {
      name: "Super Admin",
      email: "admin@ricom.com",
      password: hashedPassword,
      role: "SUPER_ADMIN",
      status: "ACTIVE",
    },
  });

  console.log(`Created admin user: ${admin.email}`);

  // Create menu items
  for (const item of menuItems) {
    await prisma.menuItem.create({
      data: item,
    });
  }

  console.log(`Created ${menuItems.length} menu items`);

  // Log the seed activity
  await prisma.activityLog.create({
    data: {
      action: "DATABASE_SEEDED",
      details: `Database seeded with admin user and ${menuItems.length} menu items`,
      userId: admin.id,
    },
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
