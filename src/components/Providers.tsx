import React from 'react'
import { ThemeProvider } from './theme/ThemeProvider'
import { TooltipProvider } from './ui/tooltip'

export const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  )
}
