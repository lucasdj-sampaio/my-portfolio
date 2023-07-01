export interface ServiceCardProp {
  Image: string;
  Title: string;
  Description: string;
  SeeMore: {
    Private: boolean;
    Link?: string;
  };
}
