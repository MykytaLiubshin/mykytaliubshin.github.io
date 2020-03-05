const customElements = [
    ['index.html', 'Table'],
    ['audio.html', 'Audio'],
    ['video.html', 'Video'],
]

const listElement = (link, name, active='Table') => name === active
?`<li class="nav-item active"> <a class="nav-link" href="${link}">${name} <span class="sr-only">(current)</span></a></li>`
:`<li class="nav-item"><a class="nav-link" href="${link}">${name}</a></li>`

const NavBar = (cur = table,elements = customElements) =>
{
    return`<nav class="cnavbar navbar-expand-lg navbar navbar-dark bg-dark fixed">
    <ul class="navbar-nav mr-auto align">
    ${elements.map(el => listElement(el[0],el[1],cur)).filter(el => el !== ",")}
    </ul>
    </nav>`
}

try{document.querySelector('#navbar-table').innerHTML = NavBar('Table');}catch(error) {}
try{document.querySelector('#navbar-audio').innerHTML = NavBar('Audio');}catch(error) {}
try{document.querySelector('#navbar-video').innerHTML = NavBar('Video');}catch(error) {}
