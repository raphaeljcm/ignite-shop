import shirt1 from '@/assets/shirts/shirt1.png';
import shirt2 from '@/assets/shirts/shirt2.png';
import shirt3 from '@/assets/shirts/shirt3.png';
import shirt4 from '@/assets/shirts/shirt4.png';
import * as S from '@/styles/pages/home';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      <S.Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="shirt1" />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="shirt2" />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="shirt3" />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>

      <S.Product className="keen-slider__slide">
        <Image src={shirt4} width={520} height={480} alt="shirt4" />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
    </S.HomeContainer>
  );
}
