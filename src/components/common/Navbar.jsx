import React, { useEffect, useState } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, useNavigate, useLocation, matchPath } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useDispatch, useSelector } from 'react-redux'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { ProfileDropDown } from '../core/Auth/ProfileDropDown'
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'
import { ACCOUNT_TYPE } from '../../utils/constants'
import { BsChevronDown } from 'react-icons/bs'
import { NavbrModal } from './NavbrModal'

const Navbar = () => {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()
  const [confirmationModalNav, setConfirmationModalNav] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAllCategory = async () => {
      setLoading(true)
      try {
        const result = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(result.data.data)
      } catch (error) {
        console.log("Could not fetch Categories", error)
      }
      setLoading(false)
    }
    fetchAllCategory()
  }, [])

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      {confirmationModalNav && (
        <NavbrModal setConfirmationModalNav={setConfirmationModalNav} />
      )}
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <div className="hidden md:block">
          <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
          </Link>
        </div>
        <div className="md:hidden">
          <Link to="/">
            <img src={logo} alt="Logo" width={140} height={25} loading="lazy" />
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25 font-semibold">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="group relative flex cursor-pointer items-center gap-1">
                    <p>{link.title}</p>
                    <BsChevronDown />
                    {/* Dropdown */}
                    <div
                      className="absolute left-1/2 top-full z-50 hidden w-[200px] -translate-x-1/2 
                                 flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 
                                 group-hover:flex"
                    >
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks.length ? (
                        subLinks.map((subLink, i) => (
                          <Link
                            to={`/catalog/${subLink.name.replace(/\s+/g, "-").toLowerCase()}`}
                            className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50 text-richblack-500"
                            key={i}
                          >
                            <p>{subLink.name}</p>
                          </Link>
                        ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link.path} className="text-richblack-25 hover:text-yellow-25">
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

     
        <div className="flex items-center gap-x-3">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-richblack-600 text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null ? (
            <>
              <Link to="/login">
                <button className="rounded-lg border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-lg border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100">
                  Sign up
                </button>
              </Link>
            </>
          ) : (
            <ProfileDropDown />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mr-4 md:hidden"
          onClick={() => setConfirmationModalNav(true)}
        >
          <AiOutlineMenu fontSize={30} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
