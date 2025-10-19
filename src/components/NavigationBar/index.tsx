import { Toggle } from 'components/atoms/Toggle';
import { SetStateAction, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Size } from 'shared/types/deviceSize';
import { RootState } from 'store';
import { windowSizeIsBigestThen } from 'Util/WindowSize';
import { Bar, NavItems, UserPhoto } from './styles';

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

  const [scrollPage, setScrollPosition] = useState<boolean>(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY >= 240);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Bar scrooled={scrollPage}>
      <UserPhoto>
        <a href="#top">
          <img
            alt="profile"
            src={`${process.env.REACT_APP_GIT_URL}.png`}
            draggable="false"
          />
          <label>Sampaio</label>
        </a>
      </UserPhoto>

      <nav>
        <NavItems>
          {windowSizeIsBigestThen(Size.TabletS) &&
            sectionsData.map((data, i) => {
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
