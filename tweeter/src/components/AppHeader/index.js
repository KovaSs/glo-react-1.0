import React from 'react';
// import styled from "styled-components";

import "./AppHeader.css";

/* const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
` */

const AppHeader = ({liked, allPosts}) => (
  <div className = 'app-header d-flex'>
    <h1>Исаев Денис</h1>
    <h2>{allPosts} записей, из них понравилось {liked}</h2>
  </div>
)

export default AppHeader