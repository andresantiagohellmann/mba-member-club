import { assemblesSections } from './assembles-sections'
import { checkID } from './check-id'
import { handleSuccess } from './handle-success'

const form = document.getElementById('form-search') as HTMLFormElement
const input = document.getElementById('input-search') as HTMLInputElement

form.onsubmit = async (event) => {
  event.preventDefault()

  const ID = input.value
  const client = await checkID(ID)

  if (!client) return

  assemblesSections(client)

  if (client.loyaltyCard.totalCuts === 10) {
    return handleSuccess('Parabéns! Seu próximo corte é gratuito!')
  } else {
    return handleSuccess(
      `Obrigado por voltar, faltam ${client.loyaltyCard.cutsRemaining} cortes para seu corte gratuito.`
    )
  }
}
