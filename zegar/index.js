const hourTip = document.querySelector('#hour')
const minuteTIp = document.querySelector('#minute')
const secondTip = document.querySelector('#second')

setInterval(() => {
  d = new Date()
  hr = d.getHours()
  min = d.getMinutes()
  sec = d.getSeconds()

  hr_rotation = 30 * hr + min / 2
  min_rotation = 6 * min
  sec_rotation = 6 * sec

  hourTip.style.transform = `rotate(${hr_rotation}deg)`
  minuteTIp.style.transform = `rotate(${min_rotation}deg)`
  secondTip.style.transform = `rotate(${sec_rotation}deg)`
}, 1000)
