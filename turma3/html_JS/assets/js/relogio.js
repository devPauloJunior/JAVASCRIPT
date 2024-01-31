function atualizaRelogio() {
    const relogioElement = document.querySelector('.relogio')
    const horaElement = relogioElement.querySelector('.hora')
    const minutoElement = relogioElement.querySelector('.minuto')
    const segundoElement = relogioElement.querySelector('.segundo')
    
    const agora = new Date()
    const hora = agora.getHours().toString().padStart(2, '0')
    const minuto = agora.getMinutes().toString().padStart(2, '0')
    const segundo = agora.getSeconds().toString().padStart(2, '0')

    horaElement.textContent = hora
    minutoElement.textContent = minuto
    segundoElement.textContent = segundo
}

atualizaRelogio()
setInterval(atualizaRelogio, 1000)