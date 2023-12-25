import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import classNames from 'classnames';


export const Navigation = () => {
  const [hasScroll, setHasScroll] = useState<boolean>(false)
  const [clickMenu, setClickMenu] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setHasScroll(true)
      }

      if (window.scrollY === 0) {
        setHasScroll(false)
      }
    })
  }, [])

  return (
    <nav 
      className={classNames('menu', {
        'menu--scroll': hasScroll,
        'menu--burger-open': clickMenu,
      })}
    >
      <ul className="menu__list">
        <li className="menu__item">
          <Link 
            to="/" 
            className="menu__link menu__link--zodiac"
            onClick={() => window.scrollTo(0, 0)}
          >
            Zodiac Engineering
          </Link>
        </li>

        <div className="menu__right-block">
          <li className="menu__item">
            <Link to="home" className="menu__link menu__link--home">
              Home
            </Link>
          </li>

          <li className="menu__item">
            <Link to="gallery" className="menu__link">
              Gallery
            </Link>
          </li>

          <li className="menu__item">
            <Link to="projects" className="menu__link">
              Projects
            </Link>
          </li>

          <li className="menu__item">
            <Link to="contacts" className="menu__link">
              Contacts
            </Link>
          </li>
        </div>

        <div className="menu__burger burger">
          <div className="burger__title">Menu</div>
          <div 
            className={classNames('burger__icon', {
              'burger__icon--click': clickMenu,
            })} 
            onClick={() => setClickMenu(!clickMenu)}
          >
            <span className="burger__line burger__line--top"></span>
            <span className="burger__line burger__line--middle"></span>
            <span className="burger__line burger__line--bottom"></span>
          </div>
        </div>
      </ul>
    </nav>
  )
}