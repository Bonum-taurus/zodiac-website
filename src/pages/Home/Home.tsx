import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Home.scss';

export const Home = () => {
  const { pathname } = useLocation();

  return (
    <div className="home">
      <div className="home__top">
        <h1 className="home__title">
          Zodiac
          <br />
          Engineering
        </h1>
        <p className="home__text">
          Canadian Armored Vehicle
          <br />
          Manufacturer
        </p>

        <div className="home__buttons">
          <HashLink 
            to={`${pathname}#about-us`} 
            className="home__button home__button--learn-more"
          >
            Learn more
          </HashLink>

          <Link 
            to="gallery" 
            className="home__button home__button--project"
          >
            our latest project
          </Link>
        </div>
      </div>

      <div className="home__video-box">
        <iframe 
          className="home__video"
          src="https://www.youtube.com/embed/gmf-uy7zQqo?si=U7cW1kDX-3438ylY" title="YouTube video player"  
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <iframe
          className="home__video"
          src="https://www.youtube.com/embed/0s8_ucJ2sNc?si=MOWRYQ5tQLd5QTg_" title="YouTube video player"  
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div id="about-us" className="home__about-us about-us">
        <h2 className="about-us__title">
          About Us
        </h2>

        <p className="about-us__text">
          Zodiac Engineering is a manufacturer of various types of special armored vehicles. We supply our products all over the world. To government agencies, private security companies, and individuals.
          <br />
          Zodiac Engineering armored vehicles range includes SUVs, cash-in-transit vehicles, and armored personnel carriers for cargo transportation and delivery of quick response teams to destinations.
          <br />
          Our competitive advantage is in individual approach to each client and guarantee of our specialists in timely and high-quality execution of orders. Representatives of our company are ready to provide more detailed information on the production and answer all your questions.
        </p>
      </div>

      <div className="home__brochure brochure">
        <div className="brochure__logo"></div>
        <div className="brochure__describe">
          <h2 className="brochure__title">
            Please take a look at our brochure!
          </h2>

          <p className="brochure__text">
            If you want to learn more about our company, our products and services, take a look at the brochure provided. It is available below in English.
          </p>

          <a 
            href="https://www.dropbox.com/s/zwb3szsv3kssuej/Full%20April2021%20%281%29.pdf?dl=0" 
            className="brochure__link"
            target="_blank"
            rel='noreferrer'
          >
            ENG PDF
          </a>
        </div>
      </div>

      <div className="home__partners partners">
        <h2 className="partners__title">
          Our Partners
        </h2>

        <div className="partners__logos">
          <span className="partners__logo partners__logo--1"></span>
          <span className="partners__logo partners__logo--2"></span>
          <span className="partners__logo partners__logo--3"></span>
          <span className="partners__logo partners__logo--4"></span>
          <span className="partners__logo partners__logo--5"></span>
          <span className="partners__logo partners__logo--6"></span>
          <span className="partners__logo partners__logo--7"></span>
				</div>
      </div>

      <div className="home__footer footer">
        <div className="footer__contacts">
          <div className="footer__contact">
            <div className="footer__icon footer__icon--address"></div>

            <div className="footer__name">
              addres
            </div>

            <div className="footer__connection">
              98 Healey Rd, Bolton, ON. L7E 5A7, Canada.
            </div>
          </div>

          <div className="footer__contact">
            <div className="footer__icon footer__icon--email"></div>

            <div className="footer__name">
              email
            </div>

            <div className="footer__connection">
              info@zodiacengineering.ca
            </div>
          </div>

          <div className="footer__contact">
            <div className="footer__icon footer__icon--phone"></div>

            <div className="footer__name">
              phone
            </div>

            <div className="footer__connection">
              647-995-6255
            </div>
          </div>

          <div className="footer__contact">
            <div className="footer__icon footer__icon--phone"></div>

            <div className="footer__name">
              phone
            </div>

            <div className="footer__connection">
              416-712-1241
            </div>
          </div>
        </div>

        <div className="footer__social-contacts">
          <a 
            href="https://www.facebook.com/people/Zodiac-Engineering/100064321681099/"
            className="footer__social-icon footer__social-icon--facebook"
            aria-label="facebook"
          ></a>

          <a 
            href="https://www.instagram.com/zodiac_engineering/"
            className="footer__social-icon footer__social-icon--instagram"
            aria-label="instagram"
          ></a>
        </div>
      </div>
    </div>
   )
}