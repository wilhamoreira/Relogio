
function updateTime() {
    const clock = new Date()

    const hours = clock.getHours()
    const minutes = clock.getMinutes()
    const seconds = clock.getSeconds()

    
       const time = [hours, minutes, seconds].reduce((acc, curr, index) => {
        const numberWithZeroInLeft = curr < 10 ? `0${curr}` : curr
        const separator = index === 0 ? '' : ':'
        return `${acc}${separator}${numberWithZeroInLeft}`
      }, '')
    
      document.getElementById('time').innerHTML = ` 
        <div class="container-hora">
            ${time[0]}${time[1]}
        </div>
        <p>${time[2]}</p>
        <div class="container-minuto">
            ${time[3]}${time[4]}
        </div>
        <p>${time[5]}</p>
        <div class="container-segundo">
             ${time[6]}${time[7]}
        </div>
      `
    }
    
setInterval(updateTime, 1000) 
    