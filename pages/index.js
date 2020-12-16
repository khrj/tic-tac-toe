import Head from 'next/head'
import Game from '../components/game.js'
import GitHub from '../components/github-promo.js'

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