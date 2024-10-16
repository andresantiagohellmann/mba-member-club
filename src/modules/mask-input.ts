const input = document.getElementById('input-search') as HTMLInputElement
const inputGroup = document.querySelector('.input-group') as HTMLInputElement

function applyMask(value: string) {
  // Remove tudo que não for dígito
  value = value.replace(/\D/g, '')

  // Aplica a máscara no formato XXX-XXX-XXX-XXX
  value = value.replace(/(\d{3})(\d)/, '$1-$2')
  value = value.replace(/(\d{3})-(\d{3})(\d)/, '$1-$2-$3')
  value = value.replace(/(\d{3})-(\d{3})-(\d{3})(\d)/, '$1-$2-$3-$4')

  return value
}

input.addEventListener('input', function (event) {
  const input = event.target as HTMLInputElement
  input.value = applyMask(input.value)

  // active button
  if (input.value.length === 15) {
    inputGroup.classList.add('active')
  } else {
    inputGroup.classList.remove('active')
  }
})
