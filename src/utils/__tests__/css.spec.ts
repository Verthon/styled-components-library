import { getValueFromRem } from '../css'

describe('css utils', () => {
  describe('getValueFromRem', () => {
    it('should return the number from rem value', () => {
      expect(getValueFromRem('1rem')).toEqual(1)
      expect(getValueFromRem('0rem')).toEqual(0)
      expect(getValueFromRem('1.25rem')).toEqual(1.25)
    })
  })
})
