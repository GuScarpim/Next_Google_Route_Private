import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 50ch;
  height: 45ch;
  border-radius: 5px;
  background-color: #FFF;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  &:hover{
    box-shadow: 0px 10px 30px -5px rgba(0, 20, 10, 1);
  }

  img {
    width: 250px;
    position: relative;
    margin-bottom: 30px;
    margin-top: -70px;
  }

  h2{
    margin-bottom: 40px;
  }

  button {
    width: 300px;
    text-align: center;
  }
`