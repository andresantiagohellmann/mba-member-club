export function handleError(error: string) {
  createBoxError(error)
}

let errorActive = false

function createBoxError(error: string) {
  if (errorActive) return

  errorActive = true

  const main = document.querySelector('main') as HTMLDivElement
  const boxError = document.createElement('p')

  boxError.classList.add('box-error')
  boxError.textContent = error

  main.appendChild(boxError)

  setTimeout(() => {
    main.removeChild(boxError)

    errorActive = false
  }, 4000)
}
