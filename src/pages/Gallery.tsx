import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";

const Gallery = () => {
    return (
        <div className="text-center p-2">
          <h1 className="text-blue-900 my-6  text-4xl font-extrabold font-roboto">Nossos Trabalhos</h1>
          <PhotoGallery />
        </div>
    );
}

export default Gallery;
