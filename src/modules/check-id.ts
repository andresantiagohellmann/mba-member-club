import { getUserByID } from '../services/get-client-by-id'
import { ClientsProps } from '../types/client'
import { handleError } from './handle-error'

export async function checkID(id: string) {
  const pageContent = document.getElementById('page-content') as HTMLDivElement

  if (!validateID(id)) {
    return handleError('ID inválido. O ID deve conter exatamente 12 dígitos.')
  }

  const clients = (await getUserByID(id)) as ClientsProps

  if (!clients) {
    return pageContent.classList.add('hidden')
  }

  if (clients?.length! === 0) {
    pageContent.classList.add('hidden')

    return handleError('Nenhum cliente encontrado com esse ID.')
  }

  pageContent.classList.remove('hidden')

  const client = clients[0]

  return client
}

function validateID(id: string) {
  const regex = /^\d{3}-\d{3}-\d{3}-\d{3}$/

  return regex.test(id)
}
