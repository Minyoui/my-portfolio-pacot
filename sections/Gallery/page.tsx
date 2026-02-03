import Container from "@/component/Containers/page";
import { Image } from "lucide-react";

interface GalleryProps {
    className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
    return (
        <Container
            title="Gallery"
            icon={<Image className="w-5 h-5"/>}
            className={className}
        >
            <h1>Hello World</h1>
        </Container>
    );
};

export default Gallery;