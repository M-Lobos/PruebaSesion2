
function openModal(id){
    const showMeModal = document.getElementById(id);

    
    showMeModal.classList.add("open");
    document.body.classList.add("modal-form-open");
}

function closeModal() {
    document.querySelector(".modal-form.open").classList.remove("open");
    document.body.classList.remove("modal-form-open");
}

window.addEventListener("load", function() {
    // close modals on background click
    document.addEventListener("click", function closingModal(event) {
        if (event.target.classList.contains("modal-form")) {
            closeModal();
        }
    });
});