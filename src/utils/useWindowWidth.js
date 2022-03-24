import { useState, useEffect } from "react";

function useWindowWidth() {
    const [width, setWidth] = useState();

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

export default useWindowWidth;
