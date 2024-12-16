import "../css/Gallery.css"; 
import ModalImage from "react-modal-image";

const Gallery = () => {
    const importAll = (resource) => {
        return resource.keys().map(resource);
    };
    const images = importAll(require.context("../../public/MPTimages/Gallery", false, /\.(png|jpe?g|svg)$/));
    const Small = importAll(require.context("../../public/MPTimages/SmallPhotos", false, /\.(png|jpe?g|svg)$/));
    const Big = importAll(require.context("../../public/MPTimages/BigPhotos", false, /\.(png|jpe?g|svg)$/));
    return (
        <div id="background">
            <h1 id="page-heading">Gallery</h1>
            <div id="gallery-content"> 
                {Small.map((image, index) => (
                    <ModalImage
                        small={Small[index]}
                        large={Big[index]}
                        alt={`Gallery image`}
                        className="gallery-image"
                     />
                ))}
            </div>
        </div>
    );
};
export default Gallery;