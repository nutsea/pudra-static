const nowDate = new Date()
const startDate = document.querySelector('.StartDate')
if (startDate.innerText < nowDate.getFullYear()) {
    startDate.innerText = '2023 — ' + nowDate.getFullYear()
}

const scrolls = document.querySelectorAll('[id^="scrollTop"]')
if (scrolls) {
    for (let i of scrolls) {
        i.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        })
    }
}

let scrollPos = 0
const burger = document.querySelector('.HeaderBurger')
if (burger) {
    burger.addEventListener('click', () => {
        const burgerBtn = document.querySelector('.HeaderBurger')
        const scrollPosition = window.pageYOffset
        if (!burgerBtn.classList.contains('ActiveBurger')) {
            scrollPos = scrollPosition
        }
        burgerBtn.classList.toggle('ActiveBurger')
        const menu = document.querySelector('.Menu')
        menu.classList.toggle('ActiveMenu')
        const content = document.querySelector('.Content')
        content.classList.toggle('ActiveContent')
        const footer = document.querySelector('.FooterContent')
        footer.classList.toggle('ActiveContent')
        const body = document.querySelector('.UnderMenu')
        body.classList.toggle('Lock')
        body.setAttribute('style', `top: -${scrollPosition}px`)
        if (!burgerBtn.classList.contains('ActiveBurger')) {
            window.scrollTo(0, scrollPos)
        }
    })
}

const items = document.querySelectorAll('[id^="burgerItem"]')
if (items) {
    for (let i of items) {
        i.addEventListener('click', () => {
            const burgerBtn = document.querySelector('.HeaderBurger')
            const scrollPosition = window.pageYOffset
            if (!burgerBtn.classList.contains('ActiveBurger')) {
                scrollPos = scrollPosition
            }
            burgerBtn.classList.toggle('ActiveBurger')
            const menu = document.querySelector('.Menu')
            menu.classList.toggle('ActiveMenu')
            const content = document.querySelector('.Content')
            content.classList.toggle('ActiveContent')
            const footer = document.querySelector('.FooterContent')
            footer.classList.toggle('ActiveContent')
            const body = document.querySelector('.UnderMenu')
            body.classList.toggle('Lock')
            body.setAttribute('style', `top: -${scrollPosition}px`)
            if (!burgerBtn.classList.contains('ActiveBurger')) {
                window.scrollTo(0, scrollPos)
            }
        })
    }
}

const container = document.querySelector('.UnderMenu')
const loader = document.querySelector('.LoaderContainer')
const images = document.querySelectorAll('img')
if (images) {
    let counter = 0
    for (let i of images) {
        if (i.complete) {
            counter++
            if (counter === images.length) {
                container.classList.remove('None')
                loader.classList.add('None')
            }
        } else {
            i.addEventListener('load', () => {
                counter++
                if (counter === images.length) {
                    container.classList.remove('None')
                    loader.classList.add('None')
                }
            })
        }
    }
} else {
    container.classList.remove('None')
    loader.classList.add('None')
}

const revLeft1 = document.querySelector('.Left1')
const revRight1 = document.querySelector('.Right1')
const revLeft2 = document.querySelector('.Left2')
const revRight2 = document.querySelector('.Right2')
const amount = document.getElementsByClassName('Review').length

if (revLeft1 && revRight1) {
    const row = document.querySelector('.ReviewsRow')
    let counter = 1
    revLeft1.addEventListener('click', () => {
        revRight1.classList.add('ActiveRevBtn')
        revRight2.classList.add('ActiveRevBtn')
        if (counter >= 2) {
            row.setAttribute('style', `transform: translate(calc(${counter - 2} * (-410px - 20px)))`)
            counter--
        }
        if (counter === 1) {
            revLeft1.classList.remove('ActiveRevBtn')
            revLeft2.classList.remove('ActiveRevBtn')
        }
    })
    revRight1.addEventListener('click', () => {
        revLeft1.classList.add('ActiveRevBtn')
        revLeft2.classList.add('ActiveRevBtn')
        if (counter <= amount - 1) {
            row.setAttribute('style', `transform: translate(calc(${counter} * (-410px - 20px)))`)
            counter++
        }
        if (counter === amount) {
            revRight1.classList.remove('ActiveRevBtn')
            revRight2.classList.remove('ActiveRevBtn')
        }
    })
    revLeft2.addEventListener('click', () => {
        revRight1.classList.add('ActiveRevBtn')
        revRight2.classList.add('ActiveRevBtn')
        if (counter >= 2) {
            row.setAttribute('style', `transform: translate(calc(${counter - 2} * (-85vw - 20px)))`)
            counter--
        }
        if (counter === 1) {
            revLeft1.classList.remove('ActiveRevBtn')
            revLeft2.classList.remove('ActiveRevBtn')
        }
    })
    revRight2.addEventListener('click', () => {
        revLeft1.classList.add('ActiveRevBtn')
        revLeft2.classList.add('ActiveRevBtn')
        if (counter <= amount - 1) {
            row.setAttribute('style', `transform: translate(calc(${counter} * (-85vw - 20px)))`)
            counter++
        }
        if (counter === amount) {
            revRight1.classList.remove('ActiveRevBtn')
            revRight2.classList.remove('ActiveRevBtn')
        }
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 485) {
            row.setAttribute('style', `transform: translate(calc(${counter - 1} * (-85vw - 20px)))`)
        } else {
            row.setAttribute('style', `transform: translate(calc(${counter - 1} * (-410px - 20px)))`)
        }
    })
}

let currentImg = 0
let imgId = 0
const reviewBtns = document.getElementsByClassName('ReviewImgBtn')
const imgLeft = document.querySelector('.ImgLeft')
const imgRight = document.querySelector('.ImgRight')
const closeBtns = document.getElementsByClassName('CloseModal')

if (reviewBtns) {
    for (let i of reviewBtns) {
        i.addEventListener('click', (e) => {
            imgId = e.target.id[0]
            console.log(imgId)
            let image
            if (e.target.classList.contains('SecondImg')) {
                currentImg = 2
                image = document.querySelector(`.SecondImg${i.id[0]}`)
                imgLeft.classList.add('ActiveImgBtn')
                imgRight.classList.remove('ActiveImgBtn')
            } else {
                currentImg = 1
                image = document.getElementById(`Img${i.id[0]}`)
                imgLeft.classList.remove('ActiveImgBtn')
                imgRight.classList.add('ActiveImgBtn')
            }
            const imgContainer = document.getElementById(`Rev${i.id[0]}`)
            image.classList.remove('None')
            imgContainer.classList.remove('None')
            const scrollPosition = window.pageYOffset
            scrollPos = scrollPosition
            document.body.classList.add('Lock')
            document.body.setAttribute('style', `top: -${scrollPosition}px`)
        })
    }
}

if (imgLeft && imgRight) {
    imgLeft.addEventListener('click', () => {
        imgRight.classList.add('ActiveImgBtn')
        if (currentImg === 2) {
            imgLeft.classList.add('ActiveImgBtn')
            const image = document.querySelector(`.SecondImg${imgId}`)
            image.classList.add('None')
            currentImg--
            const imageNext = document.getElementById(`Img${imgId}`)
            imageNext.classList.remove('None')
        } 
        if (currentImg === 1) {
            imgLeft.classList.remove('ActiveImgBtn')
        }
    })
    imgRight.addEventListener('click', () => {
        imgLeft.classList.add('ActiveImgBtn')
        if (currentImg === 1) {
            imgRight.classList.add('ActiveImgBtn')
            const image = document.getElementById(`Img${imgId}`)
            image.classList.add('None')
            currentImg++
            const imageNext = document.querySelector(`.SecondImg${imgId}`)
            imageNext.classList.remove('None')
        } 
        if (currentImg === 2) {
            imgRight.classList.remove('ActiveImgBtn')
        }
    })
}

if (closeBtns) {
    for (let i of closeBtns) {
        i.addEventListener('click', () => {
            const imgContainer = document.getElementById(`Rev${i.id[0]}`)
            const images = document.getElementsByClassName('ImgContainer')
            for (let i of images) {
                i.classList.add('None')
            }
            imgContainer.classList.add('None')
            document.body.classList.remove('Lock')
            window.scrollTo(0, scrollPos)
        })
    }
}