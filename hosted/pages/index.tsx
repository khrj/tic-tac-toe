import Head from "next/head"
import Game from "../components/game"
import GitHub from "../components/github-promo"

export default function Home() {
    return (
        <>
            <Head>
                <title>Tic Tac Toe</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GitHub />
            <Game />
        </>
    )
}
