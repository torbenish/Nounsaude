import styled from "styled-components";

export const NavStyle = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500;600;700&family=Work+Sans:wght@400;700&display=swap");
  font-family: "MuseoModerno", cursive;
  .navbar {
  background: #00A0E3;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}
.navbar-logo {
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
}
.fa-firstdraft {
  margin-left: 0.5rem;
  font-size: 1.6rem;
}
.nav-menu {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
}
.nav-item {
  display: flex;
  align-items: center;
  height: 80px;
}
.nav-links {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}
.nav-links:hover {
  background-color: #1888ff;
  border-radius: 4px;
  transition: all 0.2s ease-out;
}
.fa-bars {
  color: #fff;
}
.nav-links-mobile {
  display: none;
}
.menu-icon {
  display: none;
}
@media screen and (max-width: 540px) {
  .NavbarItems {
    position: relative;
  }
  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }
  .nav-menu.active {
    background: #E5E5E5;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    border-radius: 50px 0px 0px 50px;
  }
  .nav-links {
    color:#1888ff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
  .nav-links:hover {
    color: #fff;
    
    background-color: #1888ff;
    border-radius: 50px;
  }
  .navbar-logo {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }
  .menu-icon {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  .fa-times {
    color: #fff;
    font-size: 2rem;
  }
  button {
    display: none;
  }
}
`;