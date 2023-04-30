import { stripe } from '@/lib/stripe';
import * as S from '@/styles/pages/product';
import { formatToBRL } from '@/utils/currency';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Stripe from 'stripe';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();

  if (isFallback) return <p>Carregando produto...</p>;

  return (
    <S.ProductContainer>
      <S.ImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={480}
          priority
        />
      </S.ImageContainer>

      <S.ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button type="button">Comprar agora</button>
      </S.ProductDetails>
    </S.ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_NoDsV2hG7nwSg0',
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;
  const product = await stripe.products.retrieve(productId!, {
    expand: ['default_price'],
  });
  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formatToBRL(price.unit_amount! / 100), // stripe saves in cents so we avoid floating point and any comma issues
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  };
};
