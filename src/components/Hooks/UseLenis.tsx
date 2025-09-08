import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2
        });

        let frameId: number;

        function raf(time: number) {
            lenis.raf(time);
            frameId = requestAnimationFrame(raf);
        }

        frameId = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(frameId);
        };
    }, []);
}
