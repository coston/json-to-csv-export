import csvDownload, {jsonDownload} from '../src/index.js'

function downloadCSV() {
    csvDownload([
        {
            id: 1,
            name: 'Coston',
            email: 'coston@example.com'
        },
        {
            id: 2,
            name: 'Sabril',
            email: 'Sabril@example.com'
        },
        {
            id: 3,
            name: 'Brent',
            email: 'brent@example.com'
        }
    ])
}

export function downloadJSON() {
    jsonDownload(`id,name,email
    1,"Coston","coston@example.com"
    2,"Sabril","Sabril@example.com"
    3,"Brent","brent@example.com"`)
}

window.onload = () => {
    document.getElementById('downloadCSV').onclick = downloadCSV
    document.getElementById('downloadJSON').onclick = downloadJSON
}

export default downloadCSV