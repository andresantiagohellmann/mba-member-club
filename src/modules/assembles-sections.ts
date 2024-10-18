import { ClientProps } from '../types/client'

export function assemblesSections(client: ClientProps) {
  handleProfileSection(client)
  handleHistorySection(client)
  handleStampsSection(client)
  handleProgressSection(client)
}

function handleProfileSection({ photo, name, clientSince }: ClientProps) {
  const profileAvatar = document.querySelector(
    '.profile__avatar img'
  ) as HTMLImageElement
  const profileName = document.querySelector(
    '.profile__name'
  ) as HTMLTitleElement
  const profileSince = document.querySelector(
    '.profile__since span'
  ) as HTMLParagraphElement

  profileAvatar.setAttribute('src', photo)
  profileName.textContent = name
  profileSince.textContent = clientSince
}

function handleHistorySection({
  loyaltyCard,
  appointmentHistory
}: ClientProps) {
  const historyCount = document.querySelector(
    '.History__count span'
  ) as HTMLSpanElement
  const historyList = document.querySelector(
    '.history__list'
  ) as HTMLUListElement

  historyCount.textContent = String(loyaltyCard.totalCuts)

  historyList.innerHTML = ''

  appointmentHistory.forEach((appointment) => {
    const item = document.createElement('li')
    item.classList.add('history__item')

    item.innerHTML = `
      <div class="history__item__infos">
        <div class="history__item__date subtitle-sm">${appointment.date}</div>
        <div class="history__item__hour text-xs">${appointment.time}</div>
      </div>

      <div class="history__item__icon">
        <i class="ph ph-seal-check"></i>
      </div>
    `

    historyList.appendChild(item)
  })
}

function handleStampsSection({ id, loyaltyCard }: ClientProps) {
  const stampsID = document.querySelector('.stamps__id span') as HTMLDivElement
  const stampsList = document.querySelector('.stamps__list') as HTMLUListElement

  stampsID.textContent = id

  stampsList.innerHTML = ``

  let itemsNumber = 0

  while (itemsNumber < 10) {
    const item = document.createElement('li')
    item.classList.add('stamps__item')

    if (loyaltyCard.totalCuts > itemsNumber) {
      if (itemsNumber < 9) {
        item.innerHTML = `
          <img
            class="stamps__icon"
            src="./assets/PinCheck.png"
            alt="ícone do selo de check"
          />
        `
      } else {
        item.innerHTML = `
          <img
            class="stamps__icon gift"
            src="./assets/PinGift.png"
            alt="ícone do selo de check"
          />
        `
      }

      stampsList.appendChild(item)
    } else {
      if (itemsNumber === 9) {
        item.innerHTML = `
          <img
            class="stamps__icon void-gift"
            src="./assets/voidGift.svg"
            alt="ícone do selo de check"
          />
        `
      }
      stampsList.appendChild(item)
    }

    itemsNumber++
  }
}

function handleProgressSection({ loyaltyCard }: ClientProps) {
  const progressTotal = document.querySelector(
    '.progress__title span'
  ) as HTMLSpanElement
  const progressRemaining = document.querySelector(
    '.progress__number span'
  ) as HTMLSpanElement
  const progressBar = document.querySelector(
    '.progress__bar__content'
  ) as HTMLDivElement

  progressBar.style.width = `${loyaltyCard.totalCuts * 10}%`

  progressTotal.textContent = String(loyaltyCard.totalCuts)
  progressRemaining.textContent = String(loyaltyCard.totalCuts)
}
