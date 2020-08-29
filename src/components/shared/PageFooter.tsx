import React, { FC } from 'react'

import { Navigation } from './Navigation'

export const PageFooter: FC = () => (
  <footer className="fixed-bottom mb-1 container">
    <div className="border bg-white rounded-lg">
      <Navigation />
    </div>
  </footer>
)

PageFooter.displayName = 'PageFooter'
