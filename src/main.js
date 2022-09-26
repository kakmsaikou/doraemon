const str = `
.head {
  border: 2px solid #000;
  border-radius: 50%;
  left: 63px;
  top: 20px;
  background-color: #0097e3;
}

.eye {
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #000;
  animation: eye-close 6s 5s infinite;
}

.pupil {
  width: 25px;
  height: 35px;
  background-color: #000;
  border-radius: 50%;
}

.pupil::after {
  width: 7px;
  height: 14px;
  background-color: #fff;
  border-radius: 50%;
}

.nose {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: #e40224;
}

.nose::after {
  background-color: #fff;
  border-radius: 50%;
  width: 22px;
  height: 22px;
}

.mustache-list li {
  background-color: #000;
}

.mustache-list li:first-child {
  transform: rotate(15deg);
  top: -1.75em;
}

.mustache-list li:last-child {
  transform: rotate(-15deg);
  top: 1.75em;
}

.mustache-list.left {
  transform: rotate(15deg);
  top: 165px;
  left: -5px;
}

.mustache-list.right {
  transform: scaleX(-1.4) rotate(0deg);
  top: 188px;
  right: 65px;
}

.mouth {
  background-color: #fff;
  width: 340px;
  height: 280px;
  border-radius: 50%;
  left: 7px;
  top: 85px;
  border: 2px solid #000;
  transform: rotate(5deg)
}

.philtrum {
  min-height: 150px;
  min-width: 50px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-left-color: #000;
  left: 126px;
  top: 60px;
}

.lips {
  border: 2px solid #000;
  width: 285px;
  height: 200px;
  border-radius: 50%;
  margin-left: 5px;
  transform: rotate(-10deg);
}

.lips::before {
  background-color: #fff;
  width: 305px;
  height: 105px;
  left: -2px;
}

.dimple {
  border: 2px solid #000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 105px;
  left: 9px;
  border-right-color: transparent;
  border-bottom-color: transparent;
  transform: rotate(10deg);
}

.necklace {
  background-color: #d9011a;
  width: 255px;
  height: 80px;
  border: 2px solid #000;
  border-radius: 50%;
  left: 123px;
  top: 305px;
  transform: rotate(2deg);
  z-index: 2;
}

.drop {
  border: 2px solid #000;
  width: 55px;
  height: 55px;
  background-color: #f5cc07;
  border-radius: 50%;
  top: 68px;
  left: 50px;
}

.drop::before {
  border: 2px solid #000;
  width: 17px;
  height: 8px;
  border-radius: 50%;
  background-color: #665a4c;
  left: .5em;
  top: 25px;
}

.drop::after {
  border: 2px solid #000;
  border-radius: 50%;
  border-top-color: transparent;
  color: transparent;
  border-right-color: transparent;
  bottom: -4px;
  left: 15px;
  transform: rotate(-17deg);
}

.drop-line {
  border: 2px solid transparent;
  border-top-color: #000;
  left: -140%;
  top: 10px;
  border-radius: 50%;
}

.drop-line:nth-of-type(2) {
  top: 18px;
}

.trunk {
  background-color: #0097e3;
  border: 2px solid #000;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  border-right-color: transparent;
  border-bottom-color: transparent;
}

.stomach {
  border: 2px solid #000;
  width: 175px;
  height: 145px;
  background-color: #fff;
  border-radius: 50%;
  left: 10px;
  top: 95px;
  transform: rotate(15deg);
}

.pocket {
  width: 90%;
  height: 90%;
  border: 2px solid #000;
  border-radius: 50%;
  top: .5em;
  left: .5em;
}

.pocket::after {
  border: 2px solid transparent;
  border-bottom-color: #000;
  left: -25px;
  top: -10px;
  transform: rotate(-10deg);
  padding: 0.5em;
  border-radius: 50%;
  background-color: #fff;
}

.hand {
  border: 2px solid #000;
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50%;
  top: 175px;
  left: 270px;
}

.arm {
  background-color: #0097e3;
}

.arm.right {
  border: 2px solid #000;
  width: 70px;
  height: 120px;
  border-radius: 40%;
  right: -55px;
  background-color: #0097e3;
  top: 90px;
  transform: rotate(-30deg);
}

.arm.right::before {
  content: '';
  display: block;
  width: 50px;
  height: 55px;
  background-color: #0097e3;
  position: absolute;
  top: 0;
  left: -10px;
  z-index: 3;
  transform: rotate(30deg);
}

.arm.right::after {
  background-color: #0097e3;
  width: 40px;
  height: 95px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-left-color: #000;
  transform: rotate(-7deg);
  top: 6px;
  left: -12px;
}

.arm.left {
  border-radius: 50%;
  width: 45px;
  height: 65px;
  top: 85px;
  left: -15px;
  border: 2px solid #000;
  transform: rotate(15deg);
}

.trunk::before {
  width: 20px;
  height: 20px;
  background-color: #0097e3;
  top: 85px;
  left: 0;
}

.trunk::after {
  background-color: #0097e3;
  width: 110px;
  height: 145px;
  top: 110px;
  left: 1px;
  transform: rotate(15deg);
}

.leg.left {
  background-color: #0097e3;
  width: 120px;
  height: 110px;
  border: 2px solid #000;
  left: 95px;
  top: 430px;
}

.foot {
  background-color: #fff;
  width: 105px;
  height: 160px;
  border: 2px solid #000;
  border-radius: 50%;
}

.leg.left .foot {
  transform: rotate(-30deg);
  left: -4em;
  top: -1.5em
}

.leg.right + .foot{
  transform: rotate(-40deg);
  left: 206px;
  top: 450px;
  width: 125px;
  height: 150px;
}

.leg.left::before{
  border-radius: 50%;
  left: -10px;
  top: -10px;
  background-color: #0097e3;
  border: 2px solid transparent;
  border-top-color: #000;
}

.leg.left::after{
  border-radius: 50%;
  background-color: #fff;
  top: 98px;
  left: 8px;
  border: 2px solid transparent;
  border-top-color: #000;
}

.right-padding::before{
  background-color: #0097e3;
  width: 30px;
  height: 30px;
  border: 2px solid transparent;
  border-top-color: #000;
  left: 0;
  top: 0;
  transform: rotate(-15deg);
}

.leg.right{
  border: 2px solid #000;
  width: 75px;
  height: 160px;
  border-radius: 50%;
  background-color: #0097e3;
  left: 290px;
  top: 410px;
  transform: rotate(20deg)
}
`

const player = {
  id: undefined,
  n: 1,
  str: '',
  interval: 5,
  ui: {
    html: document.querySelector('#html'),
    style: document.querySelector('#style')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#finish': 'finish'
  },
  init: () => {
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]]
      }
    }
  },
  run: () => {
    if (player.n >= str.length) {
      window.clearInterval(player.id)
      player.bindEyeMoveEvent()
      return
    }

    switch (str[player.n]) {
      case '\n':
        player.str += '<br>'
        break
      case ' ':
        player.str += '&nbsp'
        break
      default:
        player.str += str[player.n]
    }

    player.ui.html.innerHTML = player.str
    player.ui.style.innerHTML = str.substring(0, player.n)
    player.ui.html.scrollTop = player.ui.html.scrollHeight

    player.n++
  },
  play: () => {
    player.id = setInterval(player.run, player.interval)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.interval = 10
    player.play()
  },
  normal: () => {
    player.pause()
    player.interval = 5
    player.play()
  },
  fast: () => {
    player.pause()
    player.interval = 0
    player.play()
  },
  finish: () => {
    player.pause()
    while (player.n < str.length) {
      switch (str[player.n]) {
        case '\n':
          player.str += '<br>'
          break
        case ' ':
          player.str += '&nbsp'
          break
        default:
          player.str += str[player.n]
      }
      player.n++
    }
    player.ui.html.innerHTML = player.str
    player.ui.style.innerHTML = str.substring(0, player.n)
    player.ui.html.scrollTop = player.ui.html.scrollHeight
    player.bindEyeMoveEvent()
  },

  bindEyeMoveEvent: () => {
    const eye = document.querySelectorAll('.eye')
    for (let i = 0, len = eye.length; i < len; i += 1) {
      eye[i].innerEye = eye[i].querySelector('.pupil')
    }

    function getOffsetCenter(el) {
      let x = el.offsetWidth / 2
      let y = el.offsetHeight / 2
      do {
        x += el.offsetLeft
        y += el.offsetTop
      } while (el = el.offsetParent)
      return {x, y}
    }

    function eyeMover(event) {
      event = event || window.event
      let coorX, coorY
      if (event.touches && event.touches.length === 1) {
        event.preventDefault()
        coorX = event.touches[0].clientX
        coorY = event.touches[0].clientY
      } else {
        coorX = event.clientX || event.pageX
        coorY = event.clientY || event.pageY
      }
      const screenX = window.innerWidth / 2
      const screenY = window.innerWidth / 2
      for (let i = 0, len = eye.length; i < len; i += 1) {
        const offset = getOffsetCenter(eye[i])
        const eyeCoorX = coorX - offset.x
        const eyeCoorY = coorY - offset.y
        eye[i].innerEye.style.left = ((eyeCoorX / screenX) * 50) + '%'
        eye[i].innerEye.style.top = ((eyeCoorY / screenY) * 50) + '%'
      }
    }

    if (document.addEventListener) {
      document.addEventListener('touchmove', eyeMover)
      document.addEventListener('mousemove', eyeMover)
    } else {
      document.onmousemove = eyeMover
    }
  }
}

player.init()