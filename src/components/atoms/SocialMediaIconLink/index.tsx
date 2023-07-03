import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { ISocialMediaContact } from 'shared/types/ISocialMediaContact';

interface Props {
  type: 'Git' | 'Linkedin' | 'Wpp';
}

const getSocialMediaContact = (type: string): ISocialMediaContact => {
  switch (type) {
    case 'Git':
      return { Icon: BsGithub, Url: process.env.REACT_APP_GIT_URL };
    case 'Linkedin':
      return { Icon: BsLinkedin, Url: process.env.REACT_APP_LINKEDIN_URL };
    case 'Wpp':
      return { Icon: BsWhatsapp, Url: process.env.REACT_APP_WPP_URL };
  }
};

const openSocialMedia = (url: string) => {
  window.open(url, '_blank', 'noreferrer');
};

export const SocialMediaIcon: React.FC<Props> = ({ type }: Props) => {
  const contact = getSocialMediaContact(type);

  return <contact.Icon onClick={() => openSocialMedia(contact.Url)} />;
};
