'use client'

import { useEffect } from "react";
import { usePathname } from 'next/navigation'

const useScrollTop = () =>{
    const pathname = usePathname()
    
    useEffect(() => {
      window.scrollTo({top:0, behavior:'smooth'});
    }, [pathname]);
}

export default useScrollTop
