import React, { useState, useEffect } from 'react';

//Estilo
import * as S from './styles';

//components
import Head from 'next/head';
import GoogleLogin from 'react-google-login';

import Router from "next/router";

//Components
import Layout from '../components/layout';

export default function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [loggedin, setLoggedin] = useState(false);

  const LoginGoogle = (response) => {
    console.log(response);
    // response.profileObj.name é a mesma coisa
    const { profileObj: { name, email, imageUrl } } = response;
    const { tokenObj: { access_token } } = response;
    setName(name);
    setEmail(email);
    setProfilePic(imageUrl);
    setLoggedin(true);
    console.log(access_token);
    localStorage.setItem('token', access_token)
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('imageUrl', imageUrl)

    if (access_token != null
      && access_token != ''
      && access_token != undefined)
      Router.push('/logado')

  }

  useEffect(() => {
    if (localStorage.getItem('token') != null
      && localStorage.getItem('token') != ''
      && localStorage.getItem('token') != undefined)
      Router.push('/logado')
  })
  return (
    <Layout>
      <S.Card>
        <img src={'/images/LogoColorido.png'} alt={'Logo Gustavo Scarpim'} />
        <h2>Faça o seu login com o Google</h2>
        <GoogleLogin
          clientId={'629138052194-jbohga7j9eu1q3db3k2q4lpgardrqef3.apps.googleusercontent.com'}
          buttonText='Continuar com o Google'
          onSuccess={LoginGoogle}
          onFailure={LoginGoogle}
        />
      </S.Card>
    </Layout>
  );
}