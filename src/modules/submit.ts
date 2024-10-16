import { checkID } from './check-id'

const form = document.getElementById('form-search') as HTMLFormElement
const input = document.getElementById('input-search') as HTMLInputElement

form.onsubmit = (event) => {
  event.preventDefault()

  const ID = input.value

  checkID(ID)
}
