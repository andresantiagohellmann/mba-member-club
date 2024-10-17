import { ClientProps } from '../types/client'

export function assemblesSections(client: ClientProps) {
  handleProfileSection(client)
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
