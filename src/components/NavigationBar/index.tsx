import { Toggle } from "components/atoms/Toggle";
import { Bar, NavItems, UserPhoto } from "./styles";
import { useState } from "react";


export const NavigationBar: React.FC = () => {
  const [toggleState, setToggled] = useState(true);

  return (
    <Bar>
      <UserPhoto>
        <img alt="profile" src={`${process.env.REACT_APP_GIT_URL}.png?size=45`}/>
        <label>Sampaio</label>
      </UserPhoto>

      <nav>
        <NavItems>
          <li><a href="#">WORK</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">ABOUT</a></li>

          <Toggle 
            firstOption='pt'
            secondOption='en'
            onClick={() => setToggled(toggleState ? false : true)} 
            toggled={toggleState}
          />
        </NavItems>
      </nav>
    </Bar>
  ); 
}