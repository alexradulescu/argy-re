import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { RiSettings4Line } from 'react-icons/ri'
import { HiOutlineDocumentReport } from 'react-icons/hi'

export const Navigation: FC = () => (
  <div className="btn-group">
    <NavLink exact className="btn btn-link" activeClassName="active" to="/">
      <AiOutlineHome /> <small>Home</small>
    </NavLink>

    <NavLink className="btn btn-link" activeClassName="active" to="/expenses">
      <GiPayMoney /> <small>Expenses</small>
    </NavLink>

    <NavLink className="btn btn-link" activeClassName="active" to="/incomes">
      <GiReceiveMoney /> <small>Income</small>
    </NavLink>

    <NavLink className="btn btn-link" activeClassName="active" to="/report">
      <HiOutlineDocumentReport /> <small>Reports</small>
    </NavLink>

    <NavLink className="btn btn-link" activeClassName="active" to="/categories">
      <RiSettings4Line /> <small>Settings</small>
    </NavLink>
  </div>
)

Navigation.displayName = 'Navigation'
