import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple, faAmazon, faSpotify, faBandcamp, faTwitter, faFacebook, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTShirt } from '@fortawesome/free-solid-svg-icons'
import YoutubePlayer from '../components/youtubeplayer.js'
import { Container, Row, Column } from '../components/skeletonhelpers.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import LinkButton from '../components/button.js'
import SmallHeading from '../components/smallheading.js'
import { randomTitle } from '../functions/randomtitle.js'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Eden Simmons - {randomTitle()}</title>
    </Head>
    <Container pad={true}>
      <Header />
      <Row pad={true}>
        <YoutubePlayer videoID='MTbIZU9eRQc' videoTitle='Brotherhood' />
      </Row>
      <SmallHeading>
        Socials
      </SmallHeading>
      <Row>
        <LinkButton width='four' href='https://youtube.com/c/ELSEIFedm' icon={faYoutube} label='YouTube' />
        <LinkButton width='four' href='https://twitter.com/link2x101' icon={faTwitter} label='Twitter' />
        <LinkButton width='four' href='https://fb.com/ELSEIFedm' icon={faFacebook} label='Facebook' />
      </Row>
      <SmallHeading>
        Stores
      </SmallHeading>
      <Row>
        <LinkButton width='four' href='https://open.spotify.com/artist/3H2On8EDD6nwSUSlWah7gb' icon={faSpotify} label='Spotify' />
        <LinkButton width='four' href='https://music.apple.com/us/album/brotherhood-single/1585752974?uo=4' icon={faApple} label='Apple Music' />
        <LinkButton width='four' href='https://www.amazon.com/s/ref=ntt_srch_drd_B0031YYRY2?ie=UTF8&field-keywords=Nick%20Simmons&index=digital-music&search-type=ss' icon={faAmazon} label='Amazon Music' />
      </Row>
      <Row pad={true}>
        <LinkButton width='four' href='https://music.youtube.com/channel/UCIJlGQ7FMVS-tmgjH_RwJjg' icon={faYoutube} label='YouTube Music' />
        <LinkButton width='four' href='https://elseif.bandcamp.com' icon={faBandcamp} label='Bandcamp' />
        <LinkButton width='four' href='https://nicksimmons.threadless.com/' icon={faTShirt} label='Merch' />
      </Row>
      <br />
      <SmallHeading>
        Other Bits
      </SmallHeading>
      <Row pad={true}>
        <LinkButton width='six' href='https://github.com/link2x' icon={faGithub} label='GitHub' />
        <Column width='six' center={false}>
          I write code sometimes, it lives here.
        </Column>
      </Row>
      <Row pad={true}>
        <LinkButton width='six' href='https://www.linkedin.com/in/eden-simmons-174b118b/' icon={faLinkedin} label='LinkedIn' />
        <Column width='six' center={false}>
          Resume / Work Experience.
        </Column>
      </Row>
      <Row pad={true} />
    </Container>
    <Footer />
    </div>
  )
}
