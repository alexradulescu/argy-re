import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import {
  HiOutlineLibrary,
  HiOutlineCurrencyDollar,
  HiOutlineCreditCard,
  HiOutlineDocumentReport,
  HiOutlineCog
} from 'react-icons/hi'
import styled from 'styled-components'

export const Navigation: FC = () => (
  <nav className="nav justify-content-around flex-nowrap">
    <div className="nav-item">
      <Link exact className="nav-link text-center" activeClassName="active" to="/">
        <HiOutlineLibrary /> <small>Home</small>
      </Link>
    </div>

    <div className="nav-item">
      <Link className="nav-link text-center" activeClassName="active" to="/expenses">
        <HiOutlineCurrencyDollar /> <small>Expenses</small>
      </Link>
    </div>

    <div className="nav-item">
      <Link className="nav-link text-center" activeClassName="active" to="/incomes">
        <HiOutlineCreditCard /> <small>Income</small>
      </Link>
    </div>

    <div className="nav-item">
      <Link className="nav-link text-center" activeClassName="active" to="/report">
        <HiOutlineDocumentReport /> <small>Reports</small>
      </Link>
    </div>

    <div className="nav-item">
      <Link className="nav-link text-center" activeClassName="active" to="/categories">
        <HiOutlineCog /> <small>Settings</small>
      </Link>
    </div>
  </nav>
)

Navigation.displayName = 'Navigation'

const Link = styled(NavLink)`
  padding: 0.5rem;
`
