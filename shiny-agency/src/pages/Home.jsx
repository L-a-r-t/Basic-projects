import { Hero, HeroText, HeroImg } from './Home.styles';
import CTA from '../components/CTA';
import HeroSvg from '../images/heroImg.svg'

function Home() {
  return (
    <Hero>
      <div>
        <HeroText>Repérez vos besoins, <br/>on s’occupe du reste, <br/>avec les meilleurs talents</HeroText>
        <CTA to="/survey/1" text="Faire le test" />
      </div>
      <HeroImg src={HeroSvg} alt='' />
    </Hero>
  );
}

export default Home;
