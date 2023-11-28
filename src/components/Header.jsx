import { Typography } from '@mui/material';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="news logo" />
      <Typography variant="h3" component="h1" align='center' fontWeight="bold">
        Wanted News
      </Typography>
    </header>
  )
}

export default Header
