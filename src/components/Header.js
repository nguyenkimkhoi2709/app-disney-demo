import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import homeIcon from '../assets/images/home-icon.svg';
import logo from '../assets/images/logo.svg';
import moviesIcon from '../assets/images/movie-icon.svg';
import originalsIcon from '../assets/images/original-icon.svg';
import searchIcon from '../assets/images/search-icon.svg';
import seriesIcon from '../assets/images/series-icon.svg';
import watchlistIcon from '../assets/images/watchlist-icon.svg';
import { auth, provider } from "../firebase";
import { setUserLogin, setUserSignOut, UserContext } from "../store/UserContextProvider";

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  height: 70px;
  background-color: #090b13;
  padding: 0 36px;
  letter-spacing: 1.5px;
  // text-transform: uppercase;
`
const LogoStyled = styled(Link)`
  width: 80px;
  padding: 0;
  margin-top: 4px;
  max-height: 70px;
  // display: inline-block;

  img {
    // display: block;
    // width: 100%;
  }
`
const ListMenuStyled = styled.div`
  display: flex;
  // flex-flow: row nowrap;
  align-items: center;
  // justify-content: flex-end;

  height: 100%;
  margin: 0;
  padding: 0;
  margin-right: auto;
  // position: relative;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`
const MenuStyles = styled(Link)`
  display: flex;
  align-items: center;
  height: 60%;
  padding: 0 12px;

  img {
    height: 20px;
    width: 20px;
    min-width: 20px;
    z-index: auto;
  }

  span {
    // display: flex;
    // align-items: center;
    // height: 60%;
    font-size: 14px;
    letter-spacing: 1.5px;
    // line-height: 1.08;
    padding: 2px 0;
    // white-space: nowrap;
    position: relative;

    &:before {
      background-color: #ccc;
      border-radius: 4px;
      bottom: -6px;
      content: "";
      height: 3px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      // visibility: hidden;
      // width: auto;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
      // visibility: visible;
      opacity: 1 !important;
    }
  }
`
const LoginStyled = styled(Link)`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all .2s ease;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`
const UserImgStyled = styled.img`
  height: 100%;
  border-radius: 50%;
`
const DropDownStyled = styled.div`
  position: absolute;
  top: 60px;
  right: 24px;
  // display: flex;
  flex-direction: column;
  align-items: center;

  background: rgb(19, 19, 19);
  border: 1px solid rgb(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0 0 18px 0;
  padding: 10px;
  font-size: 14px;
  cursor: default;
  // letter-spacing: 3px;
  // width: 100px;
  // opacity: 0;
  display: none;

  span {
    padding-top: 2px;
    // padding-bottom: 2px;
    margin-bottom: 4px;
  }

  button {
    width: 90%;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease;
    color: #fff;
    letter-spacing: 3px;


    &:hover {
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;
      cursor: pointer;
    }
  }
`
const SignOutStyled = styled.div`
  position: realative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  // align-items: center;
  // justify-content: center;

  &:hover {
    ${DropDownStyled} {
      // opacity: 1;
      transition-duration: 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

function Header() {
  const [user, dispatch] = useContext(UserContext)
  const userName = user.name
  // const userEmail = user.email
  const userPhotoURL = user.photoURL
  const navigate = useNavigate()


  const handleAuth = () => {
    if(!userName) {
      auth.signInWithPopup(provider).then(result => {
        setUser(result.user)
      }).catch(error => {
        console.log('Error!', error);
      })
    } else if(userName) {
      auth.signOut().then(() => {
        dispatch(setUserSignOut({
          name: null,
          email: null,
          photoURL: null
        }))
        navigate('/')
      }).catch(error => {
        console.log('Error!', error);
      })
    }
  }

  const setUser = (user) => {
    dispatch(setUserLogin({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    }))
  }

  useEffect(() => {
    // auth.onAuthStateChanged(async (user) => {
    //   if(user) {
    //     setUser(user)
    //     navigate('home')
    //   }
    // })
    if(userName) {
      navigate('home')
    }
  }, [userName, navigate])

  return (
    <NavStyled>
      <LogoStyled to="/">
        <img src={logo} alt="notfound"/>
      </LogoStyled>

      {
        !userName 
          ? (
              <LoginStyled to="/" onClick={handleAuth}>Login</LoginStyled>
            ) 
          : (
              <>
                <ListMenuStyled>
                  <MenuStyles to="/home">
                    <img src={homeIcon}  alt="notfound"/>
                    <span>HOME</span>
                  </MenuStyles>
                  <MenuStyles to="/search">
                    <img src={searchIcon}  alt="notfound"/>
                    <span>SEARCH</span>
                  </MenuStyles>
                  <MenuStyles to="/watchlist">
                    <img src={watchlistIcon}  alt="notfound"/>
                    <span>WATCHLIST</span>
                  </MenuStyles>
                  <MenuStyles to="/originals">
                    <img src={originalsIcon}  alt="notfound"/>
                    <span>ORIGINALS</span>
                  </MenuStyles>
                  <MenuStyles to="/movies">
                    <img src={moviesIcon}  alt="notfound"/>
                    <span>MOVIES</span>
                  </MenuStyles>
                  <MenuStyles to="/series">
                    <img src={seriesIcon}  alt="notfound"/>
                    <span>SERIES</span>
                  </MenuStyles>
                </ListMenuStyled>

                <SignOutStyled>
                  <UserImgStyled src={userPhotoURL ? userPhotoURL : ''} alt={userName} />
                  <DropDownStyled>
                    <span>{userName}</span>
                    <button onClick={handleAuth}>Sign out</button>
                  </DropDownStyled>
                </SignOutStyled>
            </>
            )
      }  
    </NavStyled>
  )
}

export default Header;
