import React, { useState, useEffect } from 'react';
import * as S from './styles';

import Router from 'next/router';

//Components
import Layout from '../../components/layout';

export default function Logado() {
  const [token, setToken] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [imageUrl, setImageUrl] = useState();


  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('imageUrl');
    Router.push('/');
  }

  useEffect(() => {
    if (localStorage.getItem('token') === null)
      Router.push('/')
    else
    setToken(localStorage.getItem('token'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
    setImageUrl(localStorage.getItem('imageUrl'));
  })
  return (
    <Layout>
      {
        token != null && token != '' && token != undefined ?
          <S.Card>
            <img src={imageUrl} />
            <h2>Hello {name}</h2>
            <span><b>Email:</b> {email}</span>
            <span><b>Token:</b> {token}</span>
            <button
              className='btn btn-danger'
              onClick={() => logout()}>Sair</button>
          </S.Card>
          : ''
      }
    </Layout>
  );
}