jest.resetModules()

import isNumber from '../src/main'

describe('allowEmpty === undefined', () => {
  test('number[]', () => {
    const target = [1, 2]
    expect(isNumber(target)).toBe(true)
  })

  test('string[]', () => {
    const target = ['1', '2']
    expect(isNumber(target)).toBe(false)
  })

  test('new Array(1, 2, 3)', () => {
    const target = new Array(1, 2, 3)
    expect(isNumber(target)).toBe(true)
  })

  test('new Array("1", "2", "3")', () => {
    const target = new Array('1', '2', '3')
    expect(isNumber(target)).toBe(false)
  })

  test('string', () => {
    const target = '123'
    expect(isNumber(target)).toBe(false)
  })

  test('[]', () => {
    const target: any[] = []
    expect(isNumber(target)).toBe(true)
  })
})


describe('allowEmpty === true', () => {
  test('number[]', () => {
    const target = [1, 2]
    expect(isNumber(target)).toBe(true)
  })

  test('string[]', () => {
    const target = ['1', '2']
    expect(isNumber(target)).toBe(false)
  })

  test('new Array(1, 2, 3)', () => {
    const target = new Array(1, 2, 3)
    expect(isNumber(target)).toBe(true)
  })

  test('new Array("1", "2", "3")', () => {
    const target = new Array('1', '2', '3')
    expect(isNumber(target)).toBe(false)
  })

  test('string', () => {
    const target = '123'
    expect(isNumber(target)).toBe(false)
  })

  test('[]', () => {
    const target: any[] = []
    expect(isNumber(target)).toBe(true)
  })
})


describe('allowEmpty === false', () => {
  test('number[]', () => {
    const target = [1, 2]
    expect(isNumber(target, false)).toBe(true)
  })

  test('string[]', () => {
    const target = ['1', '2']
    expect(isNumber(target, false)).toBe(false)
  })

  test('new Array(1, 2, 3)', () => {
    const target = new Array(1, 2, 3)
    expect(isNumber(target, false)).toBe(true)
  })

  test('new Array("1", "2", "3")', () => {
    const target = new Array('1', '2', '3')
    expect(isNumber(target, false)).toBe(false)
  })

  test('string', () => {
    const target = '123'
    expect(isNumber(target, false)).toBe(false)
  })

  test('[]', () => {
    const target: any[] = []
    expect(isNumber(target, false)).toBe(false)
  })
})
