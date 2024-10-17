import { assemblesSections } from './assembles-sections'
import { checkID } from './check-id'

const form = document.getElementById('form-search') as HTMLFormElement
const input = document.getElementById('input-search') as HTMLInputElement

form.onsubmit = async (event) => {
  event.preventDefault()

  const ID = input.value
  const client = await checkID(ID)

  if (!client) return

  assemblesSections(client)
}
