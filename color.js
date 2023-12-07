const submit = document.getElementById('submit-btn-01')

window.addEventListener('load', (e) => {
    e.preventDefault()
    console.log('submit clicked');
    document.body.style = `background-color:${localStorage.getItem('yourColor')}`
})

const colorInput = document.getElementById('color')
colorInput.addEventListener('input', (e) => {
    console.log(e.target.value);
    document.body.style = `background-color:${e.target.value}`
    localStorage.setItem('yourColor', e.target.value)
})
