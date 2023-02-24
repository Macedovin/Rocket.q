import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Capture all buttons with "check" class 
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // Adding the listen
  button.addEventListener('click', handleClick)
})

// When exclude/ delete button be pressed Modal will open 
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()

  /* 
    // Ternary IF for the title

	    modalTitle = check ? "Marcar como lida esta pergunta" : "Excluir esta pergunta" 
    
    // Ternary IF for the text of TAG <p> 
	
      modalDescription.innerHTML = check ? 'Tem certeza que você deseja marcar como lida esta pergunta?' : 'Tem certeza que você deseja excluir esta pergunta?'

	  // Ternary IF for the button
	    
      modalButton = check ? "Sim, marcar como lida" : "Sim, excluir"
  */

  // Ternary IF for Modal texts
  const text = check ? 'Marcar como lida' : 'Excluir'

  // Using "dataset" to catch HTML elements attributes 
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id
  const slug = check ? 'check' : 'delete'

  // Capturing the form to set the action attribute value
  const form = document.querySelector('.modal form')

  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  // Using Template Literals/ Strings 

  // For the Title
  modalTitle.innerHTML = `${text} esta pergunta`
  // For the text of TAG <p>
  modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
  // For the button
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

  // Setting the color of the button using ternary IF
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  // Open Modal
  modal.open()
}
