export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    // Assign active value to Modal's class attribute 
    modalWrapper.classList.add('active')
  }

  function close() {
    // Functionality to remove active value of Modal's class attribute
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
