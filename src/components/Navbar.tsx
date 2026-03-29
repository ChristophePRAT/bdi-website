import { PHOTOS } from '@/data/photos';
import { Logo, LocaleSwitcher } from './NavbarClient';

export default function Navbar() {
  return (
    <>
      <Logo src={PHOTOS.logo} />
      <LocaleSwitcher />
    </>
  );
}
