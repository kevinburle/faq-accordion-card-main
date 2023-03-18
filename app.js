const links = document.querySelectorAll('.faq__nav');

links.forEach(function(link){
    link.addEventListener('click', function(e){

        if(e.currentTarget.classList.contains('active')){
            e.currentTarget.classList.remove('active')
        } else {
            links.forEach(item => item.classList.remove('active'))
            e.currentTarget.classList.add('active');
        }
    })
})