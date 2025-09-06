const features = document.querySelector('.Features')
const company = document.querySelector('.Company')
const arrow = document.getElementById('Arrow')

const down = 'images/icon-arrow-down.svg'
const up = 'images/icon-arrow-up.svg'

document.querySelector('#F').addEventListener('click', featuresDisplay)
document.querySelector('#C').addEventListener('click', companyDisplay)

function featuresDisplay() {
    features.classList.toggle('hidden')
    if (arrow.src.includes(down)) {
        arrow.src = up;
    } else{
        arrow.src = down;
    }
}

function companyDisplay() {
    company.classList.toggle('hidden')
    if (arrow.src.includes(down)) {
        arrow.src = up;
    } else{
        arrow.src = down;
    }
}




