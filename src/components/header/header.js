import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import logo from './webiny-logo.svg'
import Button from '../ui/button/button'

const Header = () => (
  <header className={styles.container}>
    <div className={styles.navBar}>
      <img className={styles.logo} src={logo} alt="Webiny" />
      <ul className={styles.menuItems}>
        <li>
          <Link to="https://github.com/webiny/webiny-js/">Pricing</Link>
        </li>
        <li>
          <Link to="https://docs.webiny.com/">Docs</Link>
        </li>
        <li>
          <Link to="https://community.webiny.com/">Community</Link>
        </li>
        <li>
          <Link to="https://blog.webiny.com/">Blog</Link>
        </li>
        <li>
          <Link to="https://github.com/webiny/webiny-js/">Source</Link>
        </li>
        <li>
          <Button type="primary">Get Started</Button>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
