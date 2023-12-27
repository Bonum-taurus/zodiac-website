import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss';
import classNames from 'classnames';

export const Navigation = () => {
  const [hasScroll, setHasScroll] = useState<boolean>(false)
  const [clickMenu, setClickMenu] = useState<boolean>(false)
  const { pathname } = useLocation();

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
            to={pathname} 
            className="menu__link menu__link--zodiac"
            onClick={() => window.scrollTo(0, 0)}
            style={pathname !== '/' ? {display: 'block'} : {fontWeight: '700'}}
          >
            Zodiac Engineering
          </Link>
        </li>

        <div className="menu__right-block">
          <li className="menu__item">
            <Link 
              to="/" 
              className={classNames('menu__link menu__link--home', {
                'menu__link--home-open': pathname !== '/',
              })}
              onClick={() => {
                setClickMenu(false)
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
          </li>

          <li className="menu__item">
            <Link 
              to="gallery" 
              className="menu__link"
              onClick={() => {
                setClickMenu(false)
                window.scrollTo(0, 0);
              }}
            >
              Gallery
            </Link>
          </li>

          <li className="menu__item">
            <Link 
              to="projects" 
              className="menu__link"
              onClick={() => {
                setClickMenu(false)
                window.scrollTo(0, 0);
              }}
            >
              Projects
            </Link>
          </li>

          <li className="menu__item">
            <Link 
              to="contacts" 
              className="menu__link"
              onClick={() => {
                setClickMenu(false)
                window.scrollTo(0, 0);
              }}
            >
              Contacts
            </Link>
          </li>
        </div>

        <div className="menu__burger burger">
          <div 
            className="burger__title"
            style={{ color: pathname === '/projects' && 
                     !clickMenu ? '#f8f9fa' : '#0e0e0ee6' }}
          >
            Menu
          </div>
          <div 
            className={classNames('burger__icon', {
              'burger__icon--click': clickMenu,
            })} 
            onClick={() => setClickMenu(!clickMenu)}
          >
            <span 
              className="burger__line burger__line--top"
              style={{ backgroundColor: pathname === '/projects' && 
                       !clickMenu ? '#f8f9fa' : '#0e0e0ee6' }}
            ></span>
            <span 
              className="burger__line burger__line--middle"
              style={{ backgroundColor: pathname === '/projects' && 
                       !clickMenu ? '#f8f9fa' : '#0e0e0ee6' }}
            ></span>
            <span 
              className="burger__line burger__line--bottom"
              style={{ backgroundColor: pathname === '/projects' && 
                       !clickMenu ? '#f8f9fa' : '#0e0e0ee6' }}
            ></span>
          </div>
        </div>
      </ul>
    </nav>
  )
}