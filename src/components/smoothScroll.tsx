"use client"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const Smoothscroll = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
      })
  return (
    <ReactLenis root>
    { children}
  </ReactLenis>
  )
}

export default Smoothscroll