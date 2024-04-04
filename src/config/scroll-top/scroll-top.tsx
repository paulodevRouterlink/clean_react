import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollTop = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return <>{children}</>
}

export { ScrollTop }
