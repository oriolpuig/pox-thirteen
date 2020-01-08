import React, {useContext} from 'react'
import Context from '@s-ui/react-context'
import cx from 'classnames'
import Link from 'react-router/lib/Link'

const routes = [
  {
    id: 'home',
    label: 'Home',
    path: '/'
  }
]

const Header = () => {
  const {pathName} = useContext(Context)

  const buildMenu = () => {
    return routes.map((r, idx) => {
      const isCurrent = pathName === r.path

      return (
        <li
          className={cx('nav-item', {active: isCurrent})}
          key={`menu-item-${idx}`}
        >
          <Link to={r.path} className="nav-link">
            {r.label} {isCurrent && <span className="sr-only">(current)</span>}
          </Link>
        </li>
      )
    })
  }

  return (
    <header id="header">
      <div className="container">
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Oriol Puig{' '}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">{buildMenu()}</ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
