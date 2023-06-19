import { NavigationBar } from "components/NavigationBar";
import { Container, SetPageColor } from "./styles";

export const DeveloperPage: React.FC = () => {
	return (
		<SetPageColor>
			<Container>
				<NavigationBar/>
			</Container>
		</SetPageColor>
	);
}