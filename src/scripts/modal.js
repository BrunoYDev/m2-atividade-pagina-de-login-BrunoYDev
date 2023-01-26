/* Desenvolva seu código aqui... */

function handleModal(){
    const registerBtn = document.querySelector('.btn-cadastrar');
    const modal__controller = document.querySelector('.modal__controller');

    registerBtn.addEventListener('click', () =>{
        modal__controller.showModal();
    })

    closeModal();
}

handleModal();

function closeModal(){
    const closeBtn = document.querySelector('.closeBtn');
    const modal__controller = document.querySelector('.modal__controller');

    closeBtn.addEventListener('click', () =>{
        modal__controller.close();
    })
}