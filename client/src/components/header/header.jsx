import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const pages = ['Home', 'Login', 'Register', 'Courses'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = () => {
  let navigate = useNavigate();
  let [t,i18n] = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [search, setSearch] = React.useState('');

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const headerRef = React.useRef(null);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);
  // React.useEffect(() => console.log(offset), [offset]);

  function SelectLanguage(e)
  {
    if(e.target.value =="English")
    {
      i18n.changeLanguage("en")
    }
    else
    {
      i18n.changeLanguage("ar")
    }
  }
  return (
    <AppBar
      ref={headerRef}
      position='sticky'
      style={{
        backgroundColor: offset > 0 ? '#3f51b5' : 'transparent',
        color: offset > 0 ? '#fff' : '#3f51b5',
        transition: 'all 100ms ease-in-out',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link
                  to={`/${page}`}
                  className='decoration-none'
                  style={{ textDecoration: 'none' }}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <img
            src='logo-04.png'
            className='-top-1 relative'
            style={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              width: '150px',
              aspectRatio: 16 / 9,
            }}
          />

          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            style={{ gap: '10px' }}
          >
            <Link to='/' className={`navLink`}>
            {t("Home")}
              
            </Link>
            <Link to='/courses' className='navLink'>
            {t("Courses")}
            </Link>
          </Box>

          <div
            style={{ padding: '10px' }}
            id='search__wrapper'
            className='hidden md:flex'
          >
            <input
              type='text'
              value={search}
              style={{
                height: '100%',
                display: 'block',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
              }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              sx={{
                padding: 0,
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px',
                borderLeft: '1px solid white',
                color: 'white',
              }}
              onClick={() => {
                navigate('/search?' + search);
              }}
            >
              <SearchIcon />
            </Button>
          </div>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ gap: '10px' }}>
            <Button
              sx={{
                textTransform: 'capitalize',
                padding: '0px',
                width: 'auto',
                color:"#3f51b5"
              }}
            >
              <Link to='/login' className='navLink'>
              {t("Login")}
              </Link>
            </Button>
            <Button sx={{ textTransform: 'capitalize', padding: '0px' , color:"#3f51b5"}}>
            <Link to='/register' className='navLink'>
            {t(" / Register")}
              </Link>
            </Button>
          </Box>
          <select name = "Language" onChange={SelectLanguage}>

          <option value='English'> EN</option>
          <option value='Arabic'> AR</option>
          </select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
