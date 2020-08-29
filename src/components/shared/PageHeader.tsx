import React, { FC } from 'react'

interface Props {
  title: string
}

export const PageHeader: FC<Props> = ({ title }) => (
  <header className="container">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0 bg-light pl-0">
        <li className="breadcrumb-item text-info">Argy</li>
        <li className="breadcrumb-item active" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  </header>
)

PageHeader.displayName = 'PageHeader'
