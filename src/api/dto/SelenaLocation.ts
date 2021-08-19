type Contact = {
  email: string
  phones: string[]
  website: string
}

type Direction = {
  label: string
  type: string
  value: string
}

type Feature = {
  image: string
  label: string
}

type Tag = {
  id: string
  value: string
}

type Location = {
  id: string
  value: string
  uiRegion: string
}

type Position = {
  longitude: number
  latitude: number
}

export type SelenaLocation = {
  address: string
  agentIDInfluencer: string
  agentIDMobile: string
  agentIDResidency: string | null
  agentIDWeb: string
  biLocationID: string
  booking_id: string
  contact: Contact
  description: string
  description_title: string
  description_web: string
  directions: Direction[]
  features: Feature[]
  id: string
  location: Location
  name: string
  opening_date: string
  options: { requiresCheckConfirmation: boolean }
  photos: string[]
  position: Position
  status: 'OPEN'
  tags: Tag[]
  winks_accommodation_id: number
}
