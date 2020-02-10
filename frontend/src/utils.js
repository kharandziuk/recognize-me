export function flood (field, color){
  const currentColor = field[0][0];
  
  const help = function (field, y, x) {

    if (field[y] && field[y][x] === currentColor) {
      field[y][x] = color
      field = help(field, y, x+1)
      field = help(field, y, x-1)
      field = help(field, y-1, x)
      return help(field, y+1, x)
    }

    return field;
  }

  return help(field, 0, 0);
}

export function randomNum(max) {
  return Math.floor(Math.random() * max)
}

export function flooded(field) {
  return field.flat().every(i => i === field[0][0])
}