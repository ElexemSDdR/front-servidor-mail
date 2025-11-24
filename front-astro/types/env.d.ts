export type Ip = `${number}.${number}.${number}.${number}`
export type Address = `${string}@${Ip}`

export interface Mail {
  readonly id: number
  from_user: string
  to_user: Address
  subject: string
  body: string
}

export interface User {
  readonly id: number
  username: string
  readonly ip: Ip
  readonly address: Address
  passwd: string
}
