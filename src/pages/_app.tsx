import logoImg from '@/assets/logo.svg';
import { globalStyles } from '@/styles/global';
import * as S from '@/styles/pages/app';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Image from 'next/image';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container className={roboto.className}>
      <S.Header>
        <Image src={logoImg} alt="logo" />
      </S.Header>

      <Component {...pageProps} />
    </S.Container>
  );
}
