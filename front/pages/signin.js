import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm"

export default function Home() {
  return (
    <div className="text-black bg-black">

      <Head>
        <title>Вход</title>
      </Head>
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}
