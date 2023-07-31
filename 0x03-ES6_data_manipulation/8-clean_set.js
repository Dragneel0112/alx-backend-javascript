export default function cleanSet(set, startString) {
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }

  const component = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubString = value.substring(startString.length);

      if (valueSubString && valueSubString !== value) {
        component.push(valueSubString);
      }
    }
  }
  return component.join('-');
}
