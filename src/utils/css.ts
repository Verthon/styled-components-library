import type { ValueInRems } from '../types/css'

export const getValueFromRem = (remValue: ValueInRems) => {
  const number = remValue.replace('rem', '')
  return Number(number)
}
