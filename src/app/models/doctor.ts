export interface Doctor {
  id: number,
  name: string,
  lastname: string,
  dateOfBirth: string,
  address: string,
  specialties: string[],
  image?: string
}
