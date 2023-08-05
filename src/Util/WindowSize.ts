import { Size } from 'shared/DeviceSize';

export function getCountByWinWidth(): number {
  if (window.innerHeight <= Size.Mobile) return 1;
  else if (window.innerWidth <= Size.TabletS) return 2;
  else return 3;
}

export function windowSizeIsBigestThen(limit: number): boolean {
  return window.innerWidth > limit;
}
