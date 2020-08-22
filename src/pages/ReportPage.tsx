import React, { FC } from 'react'

import { PageTemplate } from './PageTemplate'

/**
 * 1. Header --> Title + settings, profile
 * 2. Month selector + report for that month
 * 3. Plus floating button for expense quick form - redirect to home
 * 4. Footer navigation
 */
export const ReportPage: FC = () => (
  <PageTemplate title="Report">{/* <OverviewContainer /> */}</PageTemplate>
)

ReportPage.displayName = 'ReportPage'
