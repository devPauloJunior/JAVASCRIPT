function darkMode() {
    let newPalet = document.body.classList.value
    if (newPalet === 'paleta01') {
        document.body.classList.toggle('paleta01')
    } else {
        document.body.classList.toggle('paleta02')
    }
}