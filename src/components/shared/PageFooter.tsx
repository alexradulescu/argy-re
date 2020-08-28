import React, { FC } from 'react'

import { Navigation } from './Navigation'

export const PageFooter: FC = () => (
  <footer className="fixed-bottom mb-2">
    <div className="container border bg-white">
      <Navigation />
    </div>
  </footer>
)

PageFooter.displayName = 'PageFooter'
