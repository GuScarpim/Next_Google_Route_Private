import * as S from './styles';

function MyApp({ Component, pageProps }) {
  return <>
    <S.Globals>
      <Component {...pageProps} />
    </S.Globals>
  </>
}

export default MyApp