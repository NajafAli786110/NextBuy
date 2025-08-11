import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'

const UserLayout = () => {
  return (
    <>
        {/* Header */}
        <Header />

        {/* Common layout */}
        <Outlet />
        {/* Footer */}
        <Footer />
    </>
  )
}

export default UserLayout