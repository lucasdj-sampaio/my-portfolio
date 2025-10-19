export const Size = {
  Mobile: 414,
  TabletS: 576,
  Tablet: 768,
  LaptopS: 992,
};

export const DeviceSize = {
  Mobile: `(max-width: ${Size.Mobile}px)`,
  TabletS: `(max-width: ${Size.TabletS}px)`,
  Tablet: `(max-width: ${Size.Tablet}px)`,
  LaptopS: `(max-width: ${Size.LaptopS}px)`,
};

export default DeviceSize;
