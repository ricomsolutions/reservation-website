"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "Appetizer" | "Main" | "Dessert" | "Drink";
  image: string;
  rating: number;
  discount?: number;
}

const fallbackMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with parmesan, croutons, and our house Caesar dressing.",
    price: 12.99,
    category: "Appetizer",
    image: "/images/Salad.png",
    rating: 4.5,
    discount: 10,
  },
  {
    id: 2,
    name: "Bruschetta",
    description: "Toasted bread topped with fresh tomatoes, basil, garlic, and olive oil.",
    price: 9.99,
    category: "Appetizer",
    image: "/images/delicious-hummus-plate-still-life-view.jpg",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Soup of the Day",
    description: "A seasonal blend of fresh ingredients crafted by our chef daily.",
    price: 8.99,
    category: "Appetizer",
    image: "/images/colorful-baked-with-cheese-stuffed-peppers-with-minced-meat.jpg",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables.",
    price: 24.99,
    category: "Main",
    image: "/images/ScottishSalmon.png",
    rating: 4.8,
    discount: 15,
  },
  {
    id: 5,
    name: "Beef Steak",
    description: "Premium cut beef steak cooked to your preference with a rich demi-glace sauce.",
    price: 29.99,
    category: "Main",
    image: "/images/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables.jpg",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Chicken Alfredo",
    description: "Tender chicken breast over fettuccine in a creamy parmesan alfredo sauce.",
    price: 18.99,
    category: "Main",
    image: "/images/grilled-chicken-steak-vegetables-marble-background.jpg",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Lamb Chops",
    description: "Herb-crusted lamb chops served with mint jelly and roasted potatoes.",
    price: 32.99,
    category: "Main",
    image: "/images/closeup-roasted-meat-with-sauce-vegetables-fries-plate-table.jpg",
    rating: 4.7,
    discount: 20,
  },
  {
    id: 8,
    name: "Velvet Cake",
    description: "A rich and moist red velvet cake layered with cream cheese frosting.",
    price: 10.99,
    category: "Dessert",
    image: "/images/VelvetCake.png",
    rating: 4.6,
  },
  {
    id: 9,
    name: "Raspberry Cake",
    description: "Light sponge cake with fresh raspberries and whipped cream topping.",
    price: 11.99,
    category: "Dessert",
    image: "/images/rasberrycake.png",
    rating: 4.4,
    discount: 10,
  },
  {
    id: 10,
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.",
    price: 12.99,
    category: "Dessert",
    image: "/images/menu-image-5.png",
    rating: 4.8,
  },
  {
    id: 11,
    name: "Classic Cocktail",
    description: "A timeless blend of premium spirits, fresh citrus, and a splash of bitters.",
    price: 14.99,
    category: "Drink",
    image: "/images/cocktail-topped-with-orange-slice.jpg",
    rating: 4.5,
  },
  {
    id: 12,
    name: "Fresh Juice",
    description: "A refreshing mix of seasonal fruits, cold-pressed and served chilled.",
    price: 7.99,
    category: "Drink",
    image: "/images/elevated-view-fresh-vegetables-black-backdrop.jpg",
    rating: 4.1,
  },
];

const categories = ["All", "Appetizer", "Main", "Dessert", "Drink"] as const;

type Category = (typeof categories)[number];

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch("/api/menu");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMenuItems(data);
      } catch {
        setMenuItems(fallbackMenuItems);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMenu();
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={
              i < fullStars
                ? "text-yellow-400"
                : i === fullStars && hasHalf
                  ? "text-yellow-400 opacity-50"
                  : "text-gray-600"
            }
            size={12}
          />
        ))}
        <span className="ml-1 text-xs text-gray-400">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 text-white">
      <PageHeader subtitle="Our Special" title="Menu" />

      {/* Category Filter Tabs */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#33cc33] text-black shadow-lg shadow-[#33cc33]/25"
                  : "border border-gray-700 bg-transparent text-gray-300 hover:border-[#33cc33] hover:text-[#33cc33]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          /* Menu Grid */
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group overflow-hidden p-0">
                    {/* Image Container */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Discount Badge */}
                      {item.discount && (
                        <div className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                          {item.discount}% OFF
                        </div>
                      )}

                      {/* Rating Badge */}
                      <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 backdrop-blur-sm">
                        {renderStars(item.rating)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          {item.name}
                        </h3>
                        <span className="whitespace-nowrap text-lg font-bold text-[#33cc33]">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="mb-3 line-clamp-2 text-sm text-gray-400">
                        {item.description}
                      </p>
                      <span className="inline-block rounded-full border border-[#33cc33]/30 bg-[#33cc33]/10 px-3 py-1 text-xs font-medium text-[#33cc33]">
                        {item.category}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty state */}
        {!isLoading && filteredItems.length === 0 && (
          <div className="flex min-h-[200px] items-center justify-center">
            <p className="text-gray-400">
              No items found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
