import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ThemeSwitcher from './ThemeSwitcher'
import ScrollToTop from './ScrollToTop'

const NO_CHROME_ROUTES = ['/login', '/signup', '/forgot-password']

export default function Layout() {
  const location = useLocation()
  const hideChrome = NO_CHROME_ROUTES.includes(location.pathname)

  return (
    <>
      <ScrollToTop />
      <ThemeSwitcher />
      {!hideChrome && <Header />}
      <main>
        <Outlet />
      </main>
      {!hideChrome && <Footer />}
    </>
  )
}
