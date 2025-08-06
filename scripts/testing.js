const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');
const nav_button = document.getElementById("nav-button");

nav_button.addEventListener('click', () => {
    modal.showModal();
})
 // display the modal dialog right away.
// Usually you will want to wait for a user action to show the modal dialog
closeModal.addEventListener('click', () => {
  modal.close();
});