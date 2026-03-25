"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";

interface GalleryImage {
  src: string;
  alt: string;
}

const columns: GalleryImage[][] = [
  [
    { src: "/images/chef.jpg", alt: "Head chef in professional kitchen" },
    { src: "/images/cocktail-topped-with-orange-slice.jpg", alt: "Cocktail topped with orange slice" },
    { src: "/images/stuffed-peppers.jpg", alt: "Colorful stuffed peppers" },
    { src: "/images/hummus.jpg", alt: "Delicious hummus plate" },
    { src: "/images/meat-table.jpg", alt: "Meat table spread" },
    { src: "/images/pexels-designecologist-3458448.jpg", alt: "Restaurant ambiance" },
    { src: "/images/roasted-meat-fries.jpg", alt: "Roasted meat with fries" },
    { src: "/images/steak-grilled.jpg", alt: "Grilled steak with vegetables" },
  ],
  [
    { src: "/images/wooden-board-meat.jpg", alt: "Meat on wooden board" },
    { src: "/images/gulas-dish.jpg", alt: "Traditional gulas dish" },
    { src: "/images/local-food-dish.jpg", alt: "Local food dish arrangement" },
    { src: "/images/table-reservation.jpg", alt: "Reserved table setting" },
    { src: "/images/blurry-people.jpg", alt: "Guests enjoying the restaurant" },
    { src: "/images/pexels-valeriya-20184678.jpg", alt: "Elegant food presentation" },
  ],
  [
    { src: "/images/pexels-valeriya-20184671.jpg", alt: "Fine dining plating" },
    { src: "/images/pexels-valeriya-20184670.jpg", alt: "Gourmet dish close-up" },
    { src: "/images/pexels-thuyenvu-297756.jpg", alt: "Restaurant interior view" },
    { src: "/images/pexels-shvets-2574489.jpg", alt: "Chef preparing meal" },
    { src: "/images/pexels-scottwebb-305832.jpg", alt: "Artistic food photography" },
    { src: "/images/featured-10.jpg", alt: "Featured dish" },
  ],
  [
    { src: "/images/pexels-rachel-claire-5531012.jpg", alt: "Rustic dining setup" },
    { src: "/images/hummus-2.jpg", alt: "Hummus with garnish" },
    { src: "/images/stuffed-peppers-2.jpg", alt: "Stuffed peppers variation" },
    { src: "/images/interior.png", alt: "Restaurant interior" },
    { src: "/images/pexels-thuyenvu-2.jpg", alt: "Elegant table setting" },
  ],
];

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const openLightbox = useCallback((image: GalleryImage) => {
    setLightboxImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <PageHeader subtitle="Amazing Images" title="Gallery" />

      {/* Masonry Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="columns-1 gap-4 md:columns-2 xl:columns-4">
          {columns.map((column, colIndex) =>
            column.map((image, imgIndex) => (
              <button
                key={`${colIndex}-${imgIndex}`}
                type="button"
                className="group mb-4 block w-full overflow-hidden rounded-lg break-inside-avoid focus:outline-none focus:ring-2 focus:ring-[#33cc33]"
                onClick={() => openLightbox(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </button>
            ))
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-4xl text-white transition-colors hover:text-[#33cc33]"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              sizes="90vw"
            />
            <p className="mt-3 text-center text-sm text-white/70">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
