const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEangine = e => {
    const text = e.target.value.toLowerCase();
    
    li.forEach(element => {
        if (element.textContent.toLowerCase().indexOf(text) !== -1) {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
        }
    })
}
 
search.addEventListener('keyup', searchEangine)