import { Toggle } from 'components/atoms/Toggle';
import { SetStateAction } from 'react';
import { Bar, NavItems, UserPhoto } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface NavigationProps {
  toggleState: boolean;
  setToggled: SetStateAction<any>;
}

export const NavigationBar: React.FC<NavigationProps> = ({
  toggleState,
  setToggled,
}: NavigationProps) => {
  const sectionsData = useSelector(
    (state: RootState) => state.sectionSlice.sections
  );

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
          {sectionsData.map((data, i) => {
            return (
              <li key={`section_${i}`}>
                <a href={`#section_${data.toLowerCase()}`}>{data}</a>
              </li>
            );
          })}

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
