import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { id: 1, src: "/img01.jpg", alt: "Descrição da foto 01" },
  { id: 2, src: "/img02.jpg", alt: "Descrição da foto 2" },
  { id: 3, src: "/img03.jpg", alt: "Descrição da foto 3" },
  { id: 4, src: "/img04.jpg", alt: "Descrição da foto 4" },
  { id: 5, src: "/img05.jpg", alt: "Descrição da foto 5" },
  { id: 6, src: "/img06.jpg", alt: "Descrição da foto 6" },
  { id: 7, src: "/img07.jpg", alt: "Descrição da foto 7" },
  { id: 8, src: "/img08.jpg", alt: "Descrição da foto 8" },
  { id: 9, src: "/imgvert1.jpg", alt: "Descrição da foto 9" },
  { id: 10, src: "/imgvert2.jpg", alt: "Descrição da foto 10" },
  { id: 11, src: "/imgvert3.jpg", alt: "Descrição da foto 11" },
  { id: 12, src: "/imgvert4.jpg", alt: "Descrição da foto 12" },
  { id: 13, src: "/imgvert5.jpg", alt: "Descrição da foto 13" },
  { id: 14, src: "/imgvert6.jpg", alt: "Descrição da foto 14" },
  { id: 15, src: "/imgvert7.jpg", alt: "Descrição da foto 15" },
  { id: 16, src: "/imgvert8.jpg", alt: "Descrição da foto 16" },
  { id: 17, src: "/imgvert9.jpg", alt: "Descrição da foto 17" },
  // .
];

const PhotoGallery = () => {
  const [expandedImages, setExpandedImages] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (id: number, index: number) => {
    if (expandedImages.includes(id)) {
      setExpandedImages(expandedImages.filter((imageId) => imageId !== id));
      setSelectedImageIndex(null); // Fechar a imagem ampliada
    } else {
      setExpandedImages([id]);
      setSelectedImageIndex(index);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < photos.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const visiblePhotos = showAll ? photos : photos.slice(0, 10);

  return (
    <div>
      <div className="flex flex-wrap -mx-3">
        {visiblePhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`w-1/4 px-3 mb-6 ${
              expandedImages.includes(photo.id) ? "" : "hidden-img"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1080}
              height={1920}
              onClick={() => handleImageClick(photo.id, index)}
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center">
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-2 text-white text-3xl ml-10 hover:text-orange-500"
            onClick={() => handlePrevImage()}
          >
            <AiOutlineLeft />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white text-3xl mr-10 hover:text-orange-500"
            onClick={() => handleNextImage()}
          >
            <AiOutlineRight />
          </button>
          <button
            className="absolute top-2 right-2 text-white text-3xl mr-8  hover:text-orange-500"
            onClick={() => {
              setSelectedImageIndex(null);
              setExpandedImages([]); // Fechar a imagem ampliada
            }}
          >
            <AiOutlineClose />
          </button>
          <Image
            src={photos[selectedImageIndex].src}
            alt="Imagem expandida"
            width={720}
            height={440}
            className="max-w-full max-h-full"
          />
        </div>
      )}

      {!showAll && photos.length > 10 && (
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setShowAll(true)}
        >
          Ver Mais
        </button>
      )}
    </div>
  );
};

export default PhotoGallery;