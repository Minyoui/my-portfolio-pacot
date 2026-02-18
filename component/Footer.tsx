interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer className={`${className}`}>
            <p className="text-center font-inter text-sm">All rights reserved © Evane Pacot 2026</p>
        </footer>
    );
};

export default Footer;