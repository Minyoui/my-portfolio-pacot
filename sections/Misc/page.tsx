import Container from "@/component/Containers/page";

interface MiscProps {
    className?: string;
}

const Misc: React.FC<MiscProps> = ({ className }) => {
    return (
        <Container
            className={`${className}`}
        >
            <h1>Hello World</h1>
        </Container>
    );
};

export default Misc;