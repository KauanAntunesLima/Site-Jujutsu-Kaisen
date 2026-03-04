'use strict'

const main = document.querySelector('main')
const video = document.querySelector('video')

main.addEventListener('click', (e) => {

    if(e.target.tagName === 'A') return

    video.muted = !video.muted
})