const banners = document.querySelector('#banners')
const bannerrs = document.querySelectorAll(".banner")
const back = document.getElementById('btn-back')
const next = document.getElementById('btn-next')
const move = document.getElementById('move')
const menu = document.getElementById('menu')

var index = 0
var presed = false
var clickedNav = true

const WinWid = window.innerWidth
const bannerWidth = WinWid
bannerrs.forEach(banner=>{

    banner.setAttribute('style',`width:${bannerWidth}px`)

})

back.onclick = ()=>{

    
    banners.style.transition = ".5s"
    if(index>=0){

        return

    }
    banners.style.transform = `translateX(${++index * 110}%)`
    console.log(banners.style.transform)

    presed = true
}

next.onclick = ()=>{

    
    banners.style.transition = ".5s"
    if(-index>=bannerrs.length-1){

        return

    }
    banners.style.transform = `translateX(${--index * 110}%)`
    console.log(banners.style.transform)
    presed = true

}
menu.onclick = ()=>{

    let nav = document.querySelector('nav')

    if(clickedNav){

        nav.setAttribute('style','display:block;')

    }else{

        nav.setAttribute('style','display:none;')


    }
    clickedNav = !clickedNav
}
function reportWindowsSize(){

    const WinWid = window.innerWidth
    const bannerWidth = WinWid
    bannerrs.forEach(banner=>{

        banner.setAttribute('style',`width:${bannerWidth}px`)

    })
}
window.addEventListener('scroll',()=>{

    
console.log(move.offsetTop*10, Math.round(window.scrollY))

    if(move.offsetTop*10 < window.scrollY){

        move.style.transform = "translateX(0%)"
        move.style.opacity = "1"

    }

})
setInterval(()=>{

    if(presed == false){

        banners.style.transition = "1s"
        if(-index>=bannerrs.length-1){
    
            index = 1
    
        }
        
        banners.style.transform = `translateX(${--index * 110}%)`

    }
    presed = false

},5000)

window.onresize = reportWindowsSize