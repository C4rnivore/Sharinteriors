'use client'

import { useEffect, useState } from "react";

const useMaxWidth = (max_width:number) => {
    const [match, setMatch] = useState<boolean>(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${max_width}px)`);
        mediaQuery.addEventListener('change', () => setMatch(mediaQuery.matches));
        
        const checkMatch = () => setMatch(mediaQuery.matches);
        checkMatch();
        
        return () => {
            mediaQuery.removeEventListener('change', () => setMatch(mediaQuery.matches));
        };

    }, [max_width]);

    return match
}

export default useMaxWidth