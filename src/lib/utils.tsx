export function toggleBodyScrollable(){
    document.body.classList.toggle('noscroll')
}

export function enableBodyScroll(){
    document.body.classList.remove('noscroll')
}

export function toggleMobileMenuCollapse(){
    let menu = document.getElementById('mobile-menu')
    menu && menu.classList.toggle('menu-collapsed')
}

export function toggleMenuButton(){
    let btn = document.getElementById('mobile-menu-toggle')
    btn && btn.classList.toggle('mobile-menu-toggled_btn')
}

export function toggleLogoColor(){
    const logo = document.querySelector('.header-logo')

     if(logo && logo.classList.contains('header-logo-green'))
        logo.classList.toggle('header-logo-white')
}