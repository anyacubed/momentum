export function getRandomNum(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getTimeOfDay(): string {
  const date: Date = new Date();
  const hours: number = date.getHours();

  if (hours < 6 && hours >= 0) {
    return 'night';
  } else if (hours < 12 && hours >= 6) {
    return 'morning';
  } else if (hours < 18 && hours >= 12) {
    return 'afternoon';
  } else {
    return 'evening';
  }
}
