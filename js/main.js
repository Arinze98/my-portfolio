// nav bars 
const navEl = document.querySelector('nav')
const barsEl = document.querySelector('.bi-list')
const linksEl = document.querySelectorAll('.link')

barsEl.addEventListener('click', ()=> {
    navEl.classList.toggle('navShow')
})

linksEl.forEach((link)=> {
    link.addEventListener('click', ()=> {
        navEl.classList.toggle('navShow')
    })
})


// scrool height 
window.addEventListener('scroll', ()=> {
    const header = document.querySelector('header')
    const headerHeight = header.getBoundingClientRect().height
    const to_top = document.querySelector('.to_top')

    const scrollHeight = window.pageYOffset

    // header fixed 
    if (scrollHeight > headerHeight) {
        header.classList.add('headerFixed')
        header.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }else {
        header.classList.remove('headerFixed')
        header.style.boxShadow ='none'
    }

    // scrole to_top 
    if (scrollHeight > 500) {
        to_top.classList.add('show_to_top')
    }else {
        to_top.classList.remove('show_to_top')
    }
})

//skill bars
const numEl = document.getElementById('number')
let counter = 0
setInterval(()=> {
    if(counter == 90) {
        clearInterval()
    }else{
        counter += 1
        numEl.innerHTML = counter + "%"
    }
}, 22)

// css 
const cssEl = document.querySelector('.cssNumber')
let cssCon = 0
setInterval(()=> {
    if(cssCon == 75) {
        clearInterval()
    }else{
        cssCon += 1
        cssEl.innerHTML = cssCon + "%"
    }
}, 26)

// sass 
const sassEl = document.querySelector('.sassNumber')
let sassCon = 0
setInterval(()=> {
    if(sassCon == 90) {
        clearInterval()
    }else{
        sassCon += 1
        sassEl.innerHTML = sassCon + "%"
    }
}, 22)

// js 
const jsEl = document.querySelector('.jsNumber')
let jsCon = 0
setInterval(()=> {
    if(jsCon == 50) {
        clearInterval()
    }else{
        jsCon += 1
        jsEl.innerHTML = jsCon + "%"
    }
}, 38)

// footer date 
const footerDate = document.getElementById('date')

const curDate = new Date()
footerDate.innerHTML = curDate.toLocaleString('eng', {
    year: 'numeric'
})