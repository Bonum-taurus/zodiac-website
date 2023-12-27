import { useLocation } from 'react-router-dom';
import './Projects.scss';

import { HashLink } from 'react-router-hash-link';

import { SliderProjects } from '../../components/SliderProjects';
import { picturesSlider1 } from '../../resource/picturesSlider1';
import { picturesSlider2 } from '../../resource/picturesSlider2';
import { picturesSlider3 } from '../../resource/picturesSlider3';
import { picturesSlider4 } from '../../resource/picturesSlider4';

export const Projects = () => {
  const { pathname } = useLocation();

  return (
    <div className="projects">
      <div className="projects__top">
        <h1 className="projects__title">Our work</h1>

        <h1 className="projects__subtitle">
          Check out the work that we do!
        </h1>
  
        <HashLink to={`${pathname}#offer`} className="projects__button-top">
          See more
        </HashLink>
      </div>

      <div className="projects__content" id="offer">
        <h2 className="projects__content-title">
          What we offer:
        </h2>

        <div className="projects__slider-box">
          <SliderProjects pictures={picturesSlider1} fade={true} />

          <div className="projects__slider-cart">
            <h3 className="projects__slider-title">
              Cash In Transit
            </h3>

            <p className="projects__slider-text">
              The team of our qualified engineers is able to offer various modifications of widely known transport models, as well as to develop a new model according to the order taking specific technical tasks into account.
            </p>

            <h4 className="projects__slider-models-title">
              Models Available:
            </h4>

            <ul className="projects__slider-models">
              <li className="projects__slider-model">
                Ford 650
              </li>

              <li className="projects__slider-model">
                International 4300
              </li>

              <li className="projects__slider-model">
                Kenworth 230, 330
              </li>

              <li className="projects__slider-model">
                Mercedes Actros
              </li>
            </ul>
          </div>
        </div>

        <div className="projects__slider-box">
          <div className="projects__slider-cart">
            <h3 className="projects__slider-title">
              Armored Personnel Carriers
            </h3>

            <p className="projects__slider-text">
              We manufacture a multi-purpose off road vehicle intended for use as a method of transportation and an operational vehicle during counter-terrorist operations, carrying out territorial defense tasks, including personal transportation during march. The car is build taking the need to protect the crew from firearms and the damaging factors of explosive devices into account.
            </p>
          </div>

          <SliderProjects pictures={picturesSlider2} />
        </div>

        <div className="projects__slider-box">
          <SliderProjects pictures={picturesSlider3} />

          <div className="projects__slider-cart">
            <h3 className="projects__slider-title">
              Minibuses/Vans
            </h3>

            <p className="projects__slider-text">
              The armored minibus/van based on Ford Transit by Zodiac Engineering was developed primarily for the transport of valuable goods. This vehicle is an excellent solution for safe movement of a group of collectors with cargo. The protection of the minibus reaches the level of EN1063 BR7/NIL IV.
            </p>

            <h4 className="projects__slider-models-title">
              Models Available:
            </h4>

            <ul className="projects__slider-models">
              <li className="projects__slider-model">
                Ford Transit
              </li>

              <li className="projects__slider-model">
                GMC Savana
              </li>

              <li className="projects__slider-model">
                Mercedes Sprinter
              </li>

              <li className="projects__slider-model">
                RAM ProMaster and other
              </li>
            </ul>
          </div>
        </div>

        <div className="projects__slider-box">
          <div className="projects__slider-cart">
            <h3 className="projects__slider-title">
              SUVs
            </h3>

            <p className="projects__slider-text">
              Invisibility in the flow of traffic, ability to mimic the environment is not the only advantage of hidden capsule armoring technology. The steel capsule under the car’s casing from Zodiac Engineering will protect not only from bullets and grenades, but also in road accidents. The reinforced suspension and the armored module inside serve as a solid skeleton of the entire vehicle structure, giving it additional rigidity and strength.
            </p>
          </div>

          <SliderProjects pictures={picturesSlider4} />
        </div>
      </div>
    </div>
  )
}