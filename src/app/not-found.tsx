'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function NotFound() {
    const router = useRouter()

    useEffect(()=>{
        // router.push('/404')
    },[])

    return ( 
        <h1 style={{height:'100dvh', width:'max-content', margin:'0 auto'}}> This page can't be found </h1>
    );
}

export default NotFound;