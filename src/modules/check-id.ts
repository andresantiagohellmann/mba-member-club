import { getUserByID } from '../services/get-client-by-id'
import { ClientsProps } from '../types/client'
import { handleError } from './handle-error'

export async function checkID(id: string) {
  if (!validateID(id)) {
    return handleError('ID inválido. O ID deve conter exatamente 12 dígitos.')
  }

  const clients = (await getUserByID(id)) as ClientsProps

  if (clients?.length! === 0) {
    return handleError('Nenhum cliente encontrado com esse ID.')
  }

  const client = clients[0]

  return client
}

function validateID(id: string) {
  const regex = /^\d{3}-\d{3}-\d{3}-\d{3}$/

  return regex.test(id)
}
