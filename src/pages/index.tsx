import Head from "next/head";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SecondarySection from "@/components/secondarySection/SecondarySection";
import FeedbackSection from "@/components/feedbackSection/FeedbackSection";
import Steps from "@/components/steps/Steps";
import Advantages from "@/components/advantages/Advantages";
import AlternateSecondarySection from "@/components/alternateSecondarySection/AlternateSecondarySection";
import Filler from "@/components/elements/filler/Filler";
import Companies from "@/components/companies/Companies";

interface Data {
  reviews: Record<string, string>[];
}

export default function Home({ reviews }: Data) {
  return (
    <>
      <Head>
        <title>Clicasa</title>

        <meta name="description" content="Prueba React de Clicasa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Advantages />
      <Filler width={500} height={300} />
      <AlternateSecondarySection
        title="Vender tu piso nunca fue tan fácil"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Steps />
      <Filler width={500} height={400} />
      <SecondarySection
        title="Las mejores condiciones del mercado inmobiliario"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        buttonText="Descubre nuestras tarifas"
      />
      <FeedbackSection data={reviews} />
      <SecondarySection
        title="¿Buscas casa? También tenemos las mejores ofertas"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        buttonText="Ver inmuebles"
      />
      <Companies />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const response = await fetch("http://localhost:3000/api/reviews/all");
  const data = await response.json();
  console.log(data);

  return {
    props: data,
  };
}
