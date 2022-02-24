/*Handling modal behavior*/
function handleModal() {
    if (modal.classList.contains('hide')) {
        modal.classList.remove('hide');
        modal.classList.add('show');
    } else {
        modal.classList.add('hide');
    }
}
let handleFilterButton = document.querySelector(".middle-filter");

handleFilterButton.addEventListener("click", handleModal)