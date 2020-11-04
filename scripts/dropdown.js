window.addEventListener('DOMContentLoaded', ()=>{
    let config = document.querySelector('.fa-cog');
    let searchBox = document.querySelector('.searchBox')

    config.addEventListener('click',(e)=>{
        let dropdown = document.querySelector('.pref')
        if (dropdown.classList.contains('pref--hidden')) {
            dropdown.classList.remove('pref--hidden')
        } else {
            dropdown.classList.add('pref--hidden')
        }
    })

    document.querySelector(".fa-search")
    .addEventListener('click', ()=>{
        if (searchBox.classList.contains('search--hidden')) {
            searchBox.classList.remove('search--hidden')
        } else {
            searchBox.classList.add('search--hidden')
        }
    })
})
