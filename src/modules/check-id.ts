import { handleError } from './handle-error'

export function checkID(id: string) {
  if (!validateID(id)) {
    return handleError('ID inválido. O ID deve conter exatamente 12 dígitos.')
  }

  return console.log('success')
}

function validateID(id: string) {
  const regex = /^\d{3}-\d{3}-\d{3}-\d{3}$/

  return regex.test(id)
}
