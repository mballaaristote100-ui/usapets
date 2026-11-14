'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface GalleryProps {
  images: { src: string; alt: string }[];
  featuredImage: string;
  featuredAlt: string;
}

export default function PuppyGallery({ images, featuredImage, featuredAlt }: GalleryProps) {
  const allImages =
    images && images.length > 0 ? images : [{ src: featuredImage, alt: featuredAlt }];

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setActiveIndex((i) => (i - 1 + allImages.length) % allImages.length);
  const next = () => setActiveIndex((i) => (i + 1) % allImages.length);

  const current = allImages[activeIndex] ?? allImages[0];

  return (
    <>
      <div className="space-y-3">
        {/* Main image */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: '4/3' }}>
          {/* Use key to force re-mount when src changes — bypasses any cached state */}
          <img
            key={current.src + activeIndex}
            src={current.src}
            alt={current.alt}
            className="w-full h-full object-cover"
          />

          {/* Navigation arrows */}
          {allImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} className="text-gray-800" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={18} className="text-gray-800" />
              </button>
            </>
          )}

          {/* Expand button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
            aria-label="View full size image"
          >
            <Maximize2 size={15} className="text-gray-800" />
          </button>

          {/* Image count badge */}
          {allImages.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">
              {activeIndex + 1} / {allImages.length}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {allImages.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {allImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`relative rounded-xl overflow-hidden bg-gray-100 ${
                  activeIndex === i
                    ? 'ring-2 ring-offset-1 ring-amber-500' :'opacity-60 hover:opacity-100'
                } transition-opacity`}
                style={{ aspectRatio: '1/1' }}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          <div
            className="relative max-w-4xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={'lb-' + current.src + activeIndex}
              src={current.src}
              alt={current.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />

            {allImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}