window.onload = function() {
    const screen = document.querySelector('.screen'),
        phone = document.querySelector('.phone'),
        modalPhone = document.querySelector('#modal-phone'),
        modalShadow = document.querySelector('.modal-shadow'),
        closeBtn = document.querySelector('.close-btn');

    screen.addEventListener('click', ()=> {
        openModal();
        });

    closeBtn.addEventListener('click', ()=> {
        closeModal();
    });
    document.addEventListener('click', function(e) {            
            let target = e.target;
            if(target.classList.contains('modal-phone') || target.classList.contains('modal-shadow')) {
                closeModal();
            };       
        
    });

    function openModal() {
        phone.classList.add('hide');
        modalPhone.classList.remove('hide');
        modalShadow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {        
        phone.classList.remove('hide');
        modalPhone.classList.add('hide');
        modalShadow.classList.add('hide');
        document.body.style.overflow = 'visible';
    }    
}