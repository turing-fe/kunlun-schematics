import type { BaseEntity } from 'src/types'

export type User = {
  firstName: string
  lastName: string
  email: string
  role: 'ADMIN' | 'USER'
  teamId: string
  bio: string
} & BaseEntity
