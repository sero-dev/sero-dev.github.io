import * as React from 'react'
import { Helmet } from 'react-helmet'
import { container } from '../../styles/Layout.module.css'

const Layout: React.FC = ({children}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sean Rodriguez</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&family=JetBrains+Mono:wght@300;400;800&display=swap" rel="stylesheet"/>
      </Helmet>
      <main className={container}>
        {children}
      </main>
    </>
  )
}

export default Layout
