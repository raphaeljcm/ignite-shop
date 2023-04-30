import { stripe } from '@/lib/stripe';
import * as S from '@/styles/pages/home';
import { formatToBRL } from '@/utils/currency';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Stripe from 'stripe';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <S.HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <S.Product
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
            className="keen-slider__slide"
          >
            <Image
              src={product.imageUrl}
              width={520}
              height={480}
              alt={product.name}
              priority
            />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </S.Product>
        ))}
      </S.HomeContainer>
    </>
  );
}

// this will execute when building the project, so I won't have the context of the fetch
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatToBRL(price.unit_amount! / 100), // stripe saves in cents so we avoid floating point and any comma issues
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
