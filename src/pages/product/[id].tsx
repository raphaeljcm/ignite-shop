import * as S from '@/styles/pages/product';

export default function Product() {
  return (
    <S.ProductContainer>
      <S.ImageContainer></S.ImageContainer>

      <S.ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          consectetur blanditiis doloremque sit molestiae suscipit nemo
          nesciunt! Adipisci illo, tempore, repellendus amet ipsum officia aut
          quas, dignissimos nostrum nam eaque!
        </p>

        <button type="button">Comprar agora</button>
      </S.ProductDetails>
    </S.ProductContainer>
  );
}
