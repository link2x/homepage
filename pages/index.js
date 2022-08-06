import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple, faAmazon, faGooglePlay, faSpotify, faBandcamp, faTwitter, faFacebook, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTShirt } from '@fortawesome/free-solid-svg-icons'
import YoutubePlayer from '../components/youtubeplayer.js'
import { Container, Row, Column } from '../components/skeletonhelpers.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import LinkButton from '../components/button.js'
import SmallHeading from '../components/smallheading.js'

export default function Home() {
  return (
    <div>
    <Container pad={true}>
      <Header />
      <Row pad={true}>
        <YoutubePlayer videoID='MTbIZU9eRQc' videoTitle='Brotherhood' />
      </Row>
      <SmallHeading>
        Socials
      </SmallHeading>
      <Row>
        <LinkButton width='four' href='#' icon={faTwitter} />
        <LinkButton width='four' href='#' icon={faFacebook} />
        <LinkButton width='four' href='#' icon={faYoutube} />
      </Row>
      <SmallHeading>
        Stores
      </SmallHeading>
      <Row>
        <LinkButton width='two' href='#' icon={faApple} />
        <LinkButton width='two' href='#' icon={faAmazon} />
        <LinkButton width='two' href='#' icon={faGooglePlay} />
        <LinkButton width='two' href='#' icon={faSpotify} />
        <LinkButton width='two' href='#' icon={faBandcamp} />
        <LinkButton width='two' href='#' icon={faTShirt} />
      </Row>
      <SmallHeading>
        Other Bits
      </SmallHeading>
      <Row pad={true}>
        <LinkButton width='six' href='#' icon={faGithub} />
        <Column width='six' center={false}>
          I write code sometimes, it lives here.
        </Column>
      </Row>
      <Row pad={true}>
        <LinkButton width='six' href='#' icon={faLinkedin} />
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
