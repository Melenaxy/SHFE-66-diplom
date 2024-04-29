import './HeaderNavigation.css'

export const HeaderNavigation = () => {
  return (
    <>
      <div className='logo'>Лого</div>
      <nav className='header-nav'>
        <ul className='nav-menu'>
          <li className='nav-menu-item'>О нас</li>
          <li className='nav-menu-item'>Как это работает</li>
          <li className='nav-menu-item'>Отзывы</li>
          <li className='nav-menu-item'>Контакты</li>
        </ul>
      </nav>
    </>
  )
}
