'use client'

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Div } from "../types/types";

const useHomeTransition = (animationDelay:number) => {
  const router = useRouter()
  const pathname = usePathname()
  const [homePage, setHomePage] = useState<Div>(null)
  const [homeTitle, setHomeTitle] = useState<Div>(null)
  const [onHome, setOnHome] = useState<boolean>(true)

  useEffect(() => {
    setOnHome(pathname === '/')
  }, [pathname])

  useEffect(() => {
    const home:Div = document.querySelector('.home-content')
    const title:Div = document.querySelector('.home-logo-container')

    setHomePage(home)
    setHomeTitle(title)
  }, [])

  const setHomeExpanded = () => {
    homePage?.classList.add('expanded')
    homeTitle?.classList.add('title-home-expanded')
  }

  const transitionNavigate = (target: string) => {
    if (!onHome) {
      router.push(target)
      return
    }

    setHomeExpanded()
    setTimeout(() => {
      router.push(target)
    }, animationDelay)
  }

  const handleAbout = (e:Event) => {
    e.preventDefault()
    transitionNavigate('/about')
  }

  const handleProjects = (e:Event) => {
    e.preventDefault()
    transitionNavigate('/projects')
  }

  const handleContacts = (e:Event) => {
    e.preventDefault()
    transitionNavigate('/contacts')
  }

  return { handleAbout, handleProjects, handleContacts, setHomeExpanded }
}

export default useHomeTransition