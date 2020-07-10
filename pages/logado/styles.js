import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 70ch;
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
    border-radius: 100px;
  }

  button {
    /* background-color: rgba(17, 27, 168, 0.589); */
    margin-top: 20px;
    width: 300px;
    text-align: center;
    cursor: pointer;
  }

  span {
    margin-top: 20px;
  }

`