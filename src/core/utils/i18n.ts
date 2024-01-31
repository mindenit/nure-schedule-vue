const getPairsCountPlural = (count: number) => {
  let plural = ''

  if (count === 1) {
    plural = 'пара'
  } else if (count >= 2 && count <= 4) {
    plural = 'пари'
  } else {
    plural = 'пар'
  }

  return `${count} ${plural}`
}

export { getPairsCountPlural }
