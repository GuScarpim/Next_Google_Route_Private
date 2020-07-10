import React from 'react';
import * as S from './styles';

import Head from 'next/head';
export const siteTitle = 'Next_Google';

export default function Layout({ children }) {
  return (
    <S.Container>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>

      {children}
    </S.Container>
  )
}