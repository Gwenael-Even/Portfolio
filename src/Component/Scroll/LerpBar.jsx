import React, { useEffect, useRef } from 'react'

function LerpBar () {
const bar = useRef()
let scrollArea = document.body
let scrollHeight = 0;
let scrollOffset = 0;
let scrollPercent = 0;
let indicatorPosition = scrollPercent;
let backgroundColor
const colors = ['#D95D6A', '#FFE868', '#11CE8A', '#537AD9']


function resize() {
    scrollHeight = window.innerHeight * 4
    scrollArea.style.height = (window.innerHeight * 4)+'px';
  }


function loop() {
    scrollOffset = window.pageYOffset || window.scrollTop;
    scrollPercent = scrollOffset/scrollHeight || 0;
    indicatorPosition += (scrollPercent-indicatorPosition)*0.05;
    const indicatorMult = indicatorPosition*100
    
        if (indicatorMult <= 20) {
            backgroundColor = colors[0]
        } else if (indicatorMult <= 40) {
            backgroundColor = colors[1]
        } else if (indicatorMult <= 60) {
            backgroundColor = colors[2]
        } else if (indicatorMult <= 80) {
            backgroundColor = colors[3]
        }

    bar.current.style.width = indicatorMult + '%'

    if (bar.current.style.width > '0%') {
        bar.current.style.backgroundColor = backgroundColor
    }
    requestAnimationFrame(loop);
  }

    
  useEffect(() => {
      resize()
      loop()
}) 

    return (
        <>
            <div className={'scroll-indicator'}>
                <div ref={bar} className={'bar'}>
                </div>
            </div>
        </>
    )
}

export default LerpBar