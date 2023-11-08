import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Recomendations from "../components/Recomendations"

export default function Home() {
    return (
        <div className="text-black bg-black">

            <Head>
                <title>Рекомендации</title>
            </Head>
            <Header/>
            <Recomendations/>
            <Footer/>
        </div>
    )
}
