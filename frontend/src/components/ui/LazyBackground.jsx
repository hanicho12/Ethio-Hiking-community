import { useState, useEffect, useRef } from "react";

const LazyBackground = ({ src, className }) => {
    const [bgImage, setBgImage] = useState(null);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setBgImage(src); 
            observer.disconnect();
            }
        },
        { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [src]);

    return <div ref={ref} className={className} style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }} />;
};

export default LazyBackground;
