'use client'

import ImageScroller, { ImageT } from '@/components/ImageScroller'
import PageNav from '@/components/PageNav'
import { useWindowScroll, useWindowSize } from '@uidotdev/usehooks'
import React from 'react'
import clsx from 'clsx'

type Props = {
  images: ImageT[]
  children: React.ReactNode
}

export default function PageGallery(props: Props) {
  const { images, children } = props

  const [showNav, setShowNav] = React.useState(false)
  const [{ y }] = useWindowScroll()
  const { height } = useWindowSize()

  React.useEffect(() => {
    // @ts-expect-error these valuse are not ever null
    if (y > height * 2) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }, [y, height])

  console.log({ y, height, showNav })

  return (
    <div className="relative">
      <div className="relative mt-[100vh] mb-[100vh] bg-blue-200 z-30">
        <ImageScroller images={images} />
      </div>
      <div className="fixed bg-red-200 h-full top-0 z-10">{children}</div>
      <div className={clsx('fixed h-full top-0', showNav ? 'z-20' : 'z-0')}>
        <PageNav loading={false} />
      </div>
    </div>
  )
}
