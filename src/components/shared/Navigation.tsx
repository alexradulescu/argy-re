import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { RiSettings4Line } from 'react-icons/ri'
import { HiOutlineDocumentReport } from 'react-icons/hi'

export const Navigation: FC = () => (
  <ul className="nav d-flex justify-content-around mt-3">
    <li className="nav-item">
      <NavLink className="nav-link btn btn-light" activeClassName="active" to="/">
        <AiOutlineHome />
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link btn btn-light" activeClassName="active" to="/expenses">
        <GiPayMoney />
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link btn btn-light" activeClassName="active" to="/incomes">
        <GiReceiveMoney />
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link btn btn-light" activeClassName="active" to="/report">
        <HiOutlineDocumentReport />
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link btn btn-light" activeClassName="active" to="/categories">
        <RiSettings4Line />
      </NavLink>
    </li>
  </ul>
)

Navigation.displayName = 'Navigation'
