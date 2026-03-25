"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar, FaPlay } from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] pt-20 text-white">
      {/* Page Header */}
      <PageHeader subtitle="Our Story" title="About Us" />

      {/* Who We Are */}
      <motion.section
        className="mx-auto max-w-3xl px-4 py-16 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h6 className="mb-2 text-sm font-medium uppercase tracking-widest text-[#33cc33]">
          Who We Are
        </h6>
        <Image
          src="/images/separator.svg"
          alt="separator"
          width={120}
          height={20}
          className="mx-auto mb-4"
        />
        <p className="text-lg leading-relaxed text-gray-300">
          A modern restaurant with a menu that will make your mouth water.
          Servicing delicious food since 45 years.
        </p>
      </motion.section>

      {/* Three Column Layout */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed">
              Ricom Dining Co. is a fine dining establishment dedicated to
              providing an extraordinary culinary experience. Our chefs craft
              every dish with passion, using only the freshest ingredients
              sourced from local farms and trusted suppliers. We believe that
              great food brings people together.
            </motion.p>
            <motion.div variants={fadeUp} className="relative">
              <Image
                src="/images/png-transparent-signature-signature-angle-text-monochrome-thumbnail-removebg-preview.png"
                alt="Founder signature"
                width={200}
                height={80}
                className="mb-2 invert"
              />
              <p className="text-sm text-[#33cc33]">Andrew Joe - Founder</p>
            </motion.div>
            <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-lg">
              <Image
                src="/images/pexels-chase-stine-1513571-2919579.jpg"
                alt="Restaurant video preview"
                width={400}
                height={250}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#33cc33] text-[#33cc33] transition-colors hover:bg-[#33cc33] hover:text-white">
                  <FaPlay className="ml-1" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Center Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg"
          >
            <Image
              src="/images/pexels-reneasmussen-2504911.jpg"
              alt="Restaurant interior"
              width={500}
              height={700}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp}>
              <h3 className="mb-4 text-xl font-semibold text-[#33cc33]">
                Operating Hours
              </h3>
              <div className="mb-6 border-b border-gray-700 pb-6">
                <h4 className="mb-2 text-lg font-medium">Lunch</h4>
                <p className="text-gray-400">Monday - Sunday</p>
                <p className="text-gray-300">11:00 am - 2:30 pm</p>
              </div>
              <div className="mb-6 border-b border-gray-700 pb-6">
                <h4 className="mb-2 text-lg font-medium">Dinner</h4>
                <p className="text-gray-400">Monday - Sunday</p>
                <p className="text-gray-300">5:30 pm - 11:30 pm</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h4 className="mb-2 text-lg font-medium text-[#33cc33]">
                Contact Info
              </h4>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <p className="text-gray-400">info@ricomdining.com</p>
              <p className="text-gray-400">123 Gourmet Street, New York</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <motion.section
        className="border-y border-gray-800 bg-[#111] py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {[
            { count: "20+", label: "Daily Orders" },
            { count: "7+", label: "Special Dishes" },
            { count: "8+", label: "Expert Chefs" },
            { count: "3+", label: "Awards Won" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center"
            >
              <p className="text-4xl font-bold text-[#33cc33] md:text-5xl">
                {stat.count}
              </p>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Award Winning Chef */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg"
          >
            <Image
              src="/images/confident-head-cook-standing-restaurant-professional-kitchen-with-arms-crossed-while-smiling-camera-sous-chef-wearing-cooking-uniform-while-preparing-ingredients-dinner-service.jpg"
              alt="Award winning chef"
              width={600}
              height={500}
              className="h-auto w-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h6
              variants={fadeUp}
              className="mb-2 text-sm font-medium uppercase tracking-widest text-[#33cc33]"
            >
              35 years of experience
            </motion.h6>
            <motion.div variants={fadeUp}>
              <Image
                src="/images/separator.svg"
                alt="separator"
                width={120}
                height={20}
                className="mb-4"
              />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              Award Winning Chef
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mb-6 leading-relaxed text-gray-300"
            >
              Our head chef has been recognized internationally for his
              innovative approach to modern cuisine. With 35 years of
              experience, he brings a unique blend of traditional techniques and
              contemporary flavors that have earned our restaurant multiple
              prestigious awards.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Image
                src="/images/signature-1.png"
                alt="Chef signature"
                width={200}
                height={80}
                className="mb-2 invert"
              />
              <p className="mb-6 text-sm text-[#33cc33]">Ram Range - Founder</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                className="inline-block border-b-2 border-[#33cc33] pb-1 text-sm font-medium uppercase tracking-wider text-[#33cc33] transition-colors hover:text-white"
              >
                Meet Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dinner Event Party */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <motion.h6
              variants={fadeUp}
              className="mb-2 text-sm font-medium uppercase tracking-widest text-[#33cc33]"
            >
              Delightful experience
            </motion.h6>
            <motion.div variants={fadeUp}>
              <Image
                src="/images/separator.svg"
                alt="separator"
                width={120}
                height={20}
                className="mb-4"
              />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              Dinner, Event or Party
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mb-6 leading-relaxed text-gray-300"
            >
              Whether you are planning an intimate dinner, a corporate event, or
              a grand celebration, Ricom Dining Co. offers the perfect setting.
              Our dedicated events team will work with you to create a
              memorable experience tailored to your needs.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-block border-b-2 border-[#33cc33] pb-1 text-sm font-medium uppercase tracking-wider text-[#33cc33] transition-colors hover:text-white"
              >
                Discover Now
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 overflow-hidden rounded-lg md:order-2"
          >
            <Image
              src="/images/round-table-arrangement-restaurant.jpg"
              alt="Dinner event party"
              width={600}
              height={500}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-[#111] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h6 className="mb-2 text-sm font-medium uppercase tracking-widest text-[#33cc33]">
              What We Offer
            </h6>
            <Image
              src="/images/separator.svg"
              alt="separator"
              width={120}
              height={20}
              className="mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
          </motion.div>

          <motion.div
            className="grid items-center gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Services */}
            <div className="flex flex-col gap-8">
              <motion.div
                variants={fadeUp}
                className="rounded-lg border border-gray-800 bg-[#0a0a0a] p-6 text-center transition-colors hover:border-[#33cc33]/30"
              >
                <Image
                  src="/images/door-door_5966030.png"
                  alt="Door Delivery"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h4 className="mb-2 text-lg font-semibold">Door Delivery</h4>
                <p className="text-sm text-gray-400">
                  Fast and reliable delivery right to your doorstep, ensuring
                  your food arrives fresh and hot.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-lg border border-gray-800 bg-[#0a0a0a] p-6 text-center transition-colors hover:border-[#33cc33]/30"
              >
                <Image
                  src="/images/delivery-van_9360134.png"
                  alt="Outdoor Catering"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h4 className="mb-2 text-lg font-semibold">Outdoor Catering</h4>
                <p className="text-sm text-gray-400">
                  Premium catering services for outdoor events, weddings, and
                  corporate gatherings.
                </p>
              </motion.div>
            </div>

            {/* Center Image */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center"
            >
              <Image
                src="/images/elevated-view-fresh-vegetables-black-backdrop.jpg"
                alt="Fresh food"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
            </motion.div>

            {/* Right Services */}
            <div className="flex flex-col gap-8">
              <motion.div
                variants={fadeUp}
                className="rounded-lg border border-gray-800 bg-[#0a0a0a] p-6 text-center transition-colors hover:border-[#33cc33]/30"
              >
                <Image
                  src="/images/restaurant_531021.png"
                  alt="Fine Dining"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h4 className="mb-2 text-lg font-semibold">Fine Dining</h4>
                <p className="text-sm text-gray-400">
                  An exquisite fine dining experience with world-class ambiance
                  and impeccable service.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="rounded-lg border border-gray-800 bg-[#0a0a0a] p-6 text-center transition-colors hover:border-[#33cc33]/30"
              >
                <Image
                  src="/images/wedding_13804047.png"
                  alt="Banquets Hall"
                  width={60}
                  height={60}
                  className="mx-auto mb-4"
                />
                <h4 className="mb-2 text-lg font-semibold">Banquets Hall</h4>
                <p className="text-sm text-gray-400">
                  Spacious banquet halls perfect for celebrations, receptions,
                  and special occasions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h6 className="mb-2 text-sm font-medium uppercase tracking-widest text-[#33cc33]">
              Testimonials
            </h6>
            <Image
              src="/images/separator.svg"
              alt="separator"
              width={120}
              height={20}
              className="mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold md:text-4xl">
              What Our Guests Say
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                stars: 5,
                text: "An absolutely wonderful dining experience. The food was exquisite and the service was impeccable. Highly recommend for any special occasion!",
                image: "/images/Elisa.png",
                name: "Elisa Morton",
                location: "New York, USA",
              },
              {
                stars: 5,
                text: "The atmosphere is incredible and every dish we tried was bursting with flavor. The chef truly knows how to create magic on a plate.",
                image: "/images/Miles.png",
                name: "Miles Henderson",
                location: "London, UK",
              },
              {
                stars: 4,
                text: "From the moment we walked in, we felt special. The staff was attentive, the food was divine, and the ambiance was perfect for our anniversary dinner.",
                image: "/images/testimonial_img_2.jpg",
                name: "Sarah Mitchell",
                location: "Chicago, USA",
              },
            ].map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUp}
                className="rounded-lg border border-gray-800 bg-[#111] p-8"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <FaStar key={i} className="text-[#33cc33]" />
                  ))}
                  {Array.from({ length: 5 - testimonial.stars }).map((_, i) => (
                    <FaStar key={`empty-${i}`} className="text-gray-600" />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-gray-300">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
