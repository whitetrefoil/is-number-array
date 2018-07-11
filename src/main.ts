/**
 * @param target
 * @param allowEmpty - Whether allow `[]` to pass test.
 *                     (Notice: `undefined`, `null` element in array will never pass.)
 */
export function isNumber(target: any, allowEmpty: boolean = true): target is number[] {
  if (!Array.isArray(target)) { return false }

  if (target.length === 0 && allowEmpty !== true) { return false }

  for (const item of target) {
    if (typeof item !== 'number') { return false }
  }

  return true
}

export default isNumber
