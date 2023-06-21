import { TitleContent } from "./styles";

interface Props {
  title: string;
  lineOn: boolean;
}

export const TitleRegion: React.FC<Props> = ({title, lineOn}: Props) => {
  return (<TitleContent lineOn={lineOn}>
    <h2>{title}</h2>
    
  </TitleContent>)
}