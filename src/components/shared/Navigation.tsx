import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { RiSettings4Line, RiProfileLine } from 'react-icons/ri'

export const Navigation: FC = () => (
  <nav className="nav justify-content-around flex-nowrap">
    <div className="nav-item">
      <NavLink exact className="nav-link text-center" activeClassName="active" to="/">
        <AiOutlineHome /> <small>Home</small>
      </NavLink>
    </div>

    <div className="nav-item">
      <NavLink className="nav-link text-center" activeClassName="active" to="/expenses">
        <GiPayMoney /> <small>Expenses</small>
      </NavLink>
    </div>

    <div className="nav-item">
      <NavLink className="nav-link text-center" activeClassName="active" to="/incomes">
        <GiReceiveMoney /> <small>Income</small>
      </NavLink>
    </div>

    <div className="nav-item">
      <NavLink className="nav-link text-center" activeClassName="active" to="/report">
        <RiProfileLine /> <small>Reports</small>
      </NavLink>
    </div>

    <div className="nav-item">
      <NavLink className="nav-link text-center" activeClassName="active" to="/categories">
        <RiSettings4Line /> <small>Settings</small>
      </NavLink>
    </div>
  </nav>
)

Navigation.displayName = 'Navigation'
