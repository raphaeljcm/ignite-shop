import shirt1 from '@/assets/shirts/shirt1.png';
import shirt2 from '@/assets/shirts/shirt2.png';
import * as S from '@/styles/pages/home';
import Image from 'next/image';

export default function Home() {
  return (
    <S.HomeContainer>
      <S.Product>
        <Image src={shirt1} width={520} height={480} alt="shirt1" />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product>
        <Image src={shirt2} width={520} height={480} alt="shirt2" />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
    </S.HomeContainer>
  );
}
