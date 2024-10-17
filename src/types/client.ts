export type ClientProps = {
  id: string
  name: string
  photo: string
  clientSince: string
  appointmentHistory: {
    date: string
    time: string
  }[]
  loyaltyCard: {
    totalCuts: number
    cutsNeeded: number
    cutsRemaining: number
  }
}

export type ClientsProps = ClientProps[] | []
