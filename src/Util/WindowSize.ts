import { Size } from 'shared/types/deviceSize';

export function getCountByWinWidth(): number {
  if (window.innerWidth <= Size.TabletS) return 1;
  else if (window.innerWidth <= Size.Tablet) return 2;
  else return 3;
}

export function windowSizeIsBigestThen(limit: number): boolean {
  return window.innerWidth > limit;
}
