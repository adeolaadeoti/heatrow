import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import '../styles/global.scss'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps }: any) {
  const router = useRouter()
  const scrollRef = React.useRef<HTMLDivElement>(null)

  // React.useEffect(() => {
  //   import('locomotive-scroll').then(locomotiveModule => {
  //     // @ts-ignore
  //     const scroll = new locomotiveModule.default({
  //       el: scrollRef.current,
  //       smooth: true,
  //       inertia: 0.5,
  //     })

  //     scroll.smartphone.smooth = true
      // console.log()
      // setTimeout(() => {
      //   scroll.on('scroll', (obj: any) => {
      //     scroll.update()
      //     console.log(obj)
      //   })
      //   scroll.update()
      // }, 1000)
    // })
  // }, [])

  return (
    <div ref={scrollRef}>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  )
}

export default MyApp
