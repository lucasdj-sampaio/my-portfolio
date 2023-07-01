export interface ServiceCardProp {
  Image: any;
  Title: string;
  Description: string;
  TopSpacement?: boolean;
  SeeMore: {
    Private: boolean;
    Link?: string;
  };
}
