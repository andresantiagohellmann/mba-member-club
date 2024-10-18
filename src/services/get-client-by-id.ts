import { handleError } from '../modules/handle-error'
import { ClientsProps } from '../types/client'
import { apiConfig } from './api-config'

export async function getUserByID(id: string) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients`)
    const clients = (await response.json()) as ClientsProps

    const client = clients.filter((client) => client.id === id)

    return client
  } catch (error) {
    console.log(error)
    return handleError(
      'Não foi possível fazer a busca por clientes, tente novamente mais tarde.'
    )
  }
}
