export type UserData = {
  id: number
  age: number
  firstName: string
  lastName: string
  email: string
  gender: string
  image: string
  username: string
  phone: string
  role: string
  address: {
    state: string
    city: string
    country: string
  }
}

export type Toast = {
  open: boolean
  text: string
  mode: string
}
