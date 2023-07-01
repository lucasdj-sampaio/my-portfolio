import { Toggle } from 'components/atoms/Toggle';
import { SetStateAction, useState } from 'react';
import { Bar, NavItems, UserPhoto } from './styles';

interface NavigationProps {
  toggleState: boolean;
  setToggled: SetStateAction<any>;
}

export const NavigationBar: React.FC<NavigationProps> = ({
  toggleState,
  setToggled,
}: NavigationProps) => {
  return (
    <Bar>
      <UserPhoto>
        <img
          alt="profile"
          src={`${process.env.REACT_APP_GIT_URL}.png?size=45`}
        />
        <label>Sampaio</label>
      </UserPhoto>

      <nav>
        <NavItems>
          <li>
            <a href="#">WORK</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>

          <Toggle
            firstOption="EN"
            secondOption="PT"
            onClick={() => setToggled(toggleState ? false : true)}
            toggled={toggleState}
          />
        </NavItems>
      </nav>
    </Bar>
  );
};
