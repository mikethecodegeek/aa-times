window.addEventListener('DOMContentLoaded', ()=>{
    let config = document.querySelector('.fa-cog');
    
    config.addEventListener('click',(e)=>{
        let dropdown = document.querySelector('.pref')
        if (dropdown.classList.contains('pref--hidden')) {
            dropdown.classList.remove('pref--hidden')
        } else {
            dropdown.classList.add('pref--hidden')
        }
    })
})