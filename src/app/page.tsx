"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiSearch, FiMail } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

/* ---------- data ---------- */
const categories = [
  { name: "Pizza", image: "/images/pizza_4058619.png" },
  { name: "Pastries", image: "/images/rasberrycake.png" },
  { name: "Vegetarian", image: "/images/lettuce_4442990.png" },
  { name: "Burgers", image: "/images/hamburger_3075935.png" },
];

const serveItems = [
  { name: "Starter", category: "African", rating: 9.8, discount: "-40%", image: "/images/top-view-arrangement-with-delicious-local-food-dish.jpg" },
  { name: "Main Dish", category: "American", rating: 6.0, discount: "-12%", image: "/images/grilled-chicken-steak-vegetables-marble-background.jpg" },
  { name: "Drinks", category: "Mexican", rating: 8.0, discount: "-10%", image: "/images/cocktail-topped-with-orange-slice.jpg" },
  { name: "Desserts", category: "Italian", rating: 5.8, discount: "-5%", image: "/images/VelvetCake.png" },
  { name: "Appetizers", category: "Italian", rating: 5.8, discount: "-22%", image: "/images/delicious-hummus-plate-still-life-view.jpg" },
  { name: "Side Dish", category: "Italian", rating: 5.8, discount: "-8%", image: "/images/Salad.png" },
];

const popularFoods = [
  { name: "Hamburger & Fries", discount: "-40%", image: "/images/ham & fries.jpg" },
  { name: "Pizza", discount: "-15%", image: "/images/pizza & coke.jpg" },
  { name: "Noodles", discount: "40%", image: "/images/noodles.jpg" },
  { name: "Steak", discount: "40%", image: "/images/steak.jpg" },
];

const galleryImages = [
  "/images/pexels-pixabay-262047.jpg",
  "/images/pexels-reneasmussen-2504911.jpg",
  "/images/pexels-scottwebb-305832.jpg",
  "/images/pexels-rachel-claire-5490965.jpg",
  "/images/pexels-rachel-claire-5531012.jpg",
  "/images/pexels-kseniachernaya-4450334.jpg",
  "/images/pexels-lina-12238219.jpg",
  "/images/pexels-valeriya-20184670.jpg",
];

/* ---------- component ---------- */
export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white pt-20 overflow-hidden">
      {/* ===== 1. Hero ===== */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/hero-image.jpg"
          alt="Restaurant interior with ambient lighting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Discover &amp; <span className="text-[#33cc33]">Book</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            The best restaurant at the best price
          </p>

          {/* Search bar */}
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 max-w-xl mx-auto">
            <FiSearch className="text-[#33cc33] text-xl mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search for a restaurant, cuisine, or dish..."
              className="bg-transparent outline-none w-full text-white placeholder-gray-400"
            />
            <button className="bg-[#33cc33] hover:bg-[#2ab52a] text-black font-semibold px-6 py-2 rounded-full ml-3 transition-colors shrink-0">
              Search
            </button>
          </div>
        </motion.div>
      </section>

      {/* ===== 2. Popular Categories ===== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Popular <span className="text-[#33cc33]">Categories</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-[#33cc33]/50 transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <div className="relative w-20 h-20">
                <Image src={cat.image} alt={cat.name} fill className="object-contain" />
              </div>
              <span className="font-semibold text-lg">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== 3. Our Menu ===== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Image
              src="/images/menuimage.png"
              alt="Our restaurant menu showcase"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-[#33cc33]">Menu</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We offer a diverse menu that brings together flavors from around the
              world. From hand-crafted appetizers to exquisite main courses, every
              dish is prepared with the freshest ingredients and culinary passion.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you crave a classic steak, fresh seafood, or plant-based
              delights, our chefs have something special waiting for you.
            </p>
            <Link
              href="/menu"
              className="inline-block bg-[#33cc33] hover:bg-[#2ab52a] text-black font-semibold px-8 py-3 rounded-full transition-colors"
            >
              View More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== 4. What We Serve ===== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We <span className="text-[#33cc33]">Serve</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore our curated selection of dishes, crafted to satisfy every palate.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serveItems.map((item, i) => (
            <motion.div
              key={item.name}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-[#33cc33]/50 transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category tag */}
                <span className="absolute top-3 left-3 bg-[#33cc33] text-black text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </span>
                {/* Rating badge */}
                <span className="absolute top-3 right-3 bg-black/70 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
                  ★ {item.rating}
                </span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <span className="text-[#33cc33] font-bold text-sm bg-[#33cc33]/10 px-3 py-1 rounded-full">
                  {item.discount}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Link
            href="/menu"
            className="inline-block border border-[#33cc33] text-[#33cc33] hover:bg-[#33cc33] hover:text-black font-semibold px-8 py-3 rounded-full transition-colors"
          >
            View All
          </Link>
        </motion.div>
      </section>

      {/* ===== 5. About Us ===== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-[#33cc33]">Us</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              At Ricom Dining Co., we believe dining is more than just a meal &mdash;
              it&rsquo;s an experience. Since our founding, we have been committed to
              providing exceptional food, warm hospitality, and an unforgettable
              atmosphere.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our team of world-class chefs draw inspiration from global cuisines,
              blending tradition with innovation to create dishes that delight and
              surprise. Come discover why our guests keep coming back.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[#33cc33] hover:bg-[#2ab52a] text-black font-semibold px-8 py-3 rounded-full transition-colors"
            >
              View More
            </Link>
          </motion.div>

          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <Image
              src="/images/about-us.jpg"
              alt="Our restaurant team and interior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== 6. Popular Foods ===== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Popular <span className="text-[#33cc33]">Foods</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularFoods.map((food, i) => (
            <motion.div
              key={food.name}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <Image
                src={food.image}
                alt={food.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-bold text-lg mb-1">{food.name}</h3>
                <span className="text-[#33cc33] font-semibold text-sm">
                  {food.discount}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== 7. Call to Action ===== */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-[#33cc33]/20 to-[#33cc33]/5 border border-[#33cc33]/30 rounded-3xl p-12 md:p-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            More than <span className="text-[#33cc33]">300</span> tables!
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Reserve your perfect spot today and enjoy a memorable dining experience
            with family, friends, or colleagues.
          </p>
          <Link
            href="/reservation"
            className="inline-block bg-[#33cc33] hover:bg-[#2ab52a] text-black font-bold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Book a Reservation
          </Link>
        </motion.div>
      </section>

      {/* ===== 8. Gallery Preview ===== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our <span className="text-[#33cc33]">Gallery</span>
        </motion.h2>

        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              className="break-inside-avoid rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={400}
                height={300 + (i % 3) * 100}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Link
            href="/gallery"
            className="inline-block border border-[#33cc33] text-[#33cc33] hover:bg-[#33cc33] hover:text-black font-semibold px-8 py-3 rounded-full transition-colors"
          >
            View More
          </Link>
        </motion.div>
      </section>

      {/* ===== 9. Newsletter ===== */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#33cc33]/10 flex items-center justify-center">
              <FiMail className="text-[#33cc33] text-3xl" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to our <span className="text-[#33cc33]">Newsletter</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Get the latest updates, exclusive offers, and special discounts
            delivered straight to your inbox.
          </p>

          <form
            className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-5 py-3 flex-1 w-full">
              <FiMail className="text-gray-400 mr-3 shrink-0" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="bg-[#33cc33] hover:bg-[#2ab52a] text-black font-semibold px-8 py-3 rounded-full transition-colors shrink-0 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
