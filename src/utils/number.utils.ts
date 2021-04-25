export function random(min: number, max: number): number {
  return min + Math.floor((max - min) * Math.random());
}
