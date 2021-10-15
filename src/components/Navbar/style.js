import styled from "styled-components";

export const NavStyle = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500;600;700&family=Work+Sans:wght@400;700&display=swap");
  font-family: "MuseoModerno", cursive;
  .navbar {
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    top: 0;
    z-index: 999;
  }
  .navbar-logo {
    color: #e50a7f;
    justify-self: start;
    margin-left: 20px;
    margin-bottom: 10px;
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
    color: #00a0e3;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  .nav-links:hover {
    color: #FFFFFF;
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
  .btn-primary-outline {
  background-color: transparent;
  color: #1888ff;
  margin-left: 15px;
  margin-right: -30px;
  margin-top: 12px;
  border: 1px solid #00A0E3;
  padding: 13px 94px;
  width: 333px;
  height: 49px;
  box-sizing: border-box;
  border-radius: 20px;
}
.btn-primary-outline:hover {
  background-color: #1888ff;
  color: #FFFFFF;
}
  @media screen and (max-width: 540px) {
    .navbar {
      background: #1888ff;
    }

    .navbar-logo{
      color: #FFFFFF;
    }

    .NavbarItems {
      position: relative;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 50vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .nav-menu.active {
      background: #F8F8FF;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      border-radius: 50px 0px 0px 50px;
    }
    .nav-links {
      color: #1888ff;
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

    @media screen and (max-width: 400px) {
    .navbar {
      background: #1888ff;
    }
    .nav-menu {
     height: 57vh;     
    }
  }
  }
`;
