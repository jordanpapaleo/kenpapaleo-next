'use client'

import clsx from 'clsx'
import Link from 'next/link'
import ImageOverlay from '@/components/ImageOverlay'
import React from 'react'

import {
  EDITORIAL_IMAGES,
  NATURE_IMAGES,
  COLORED_IMAGES,
  GOLF_IMAGES,
} from '@/imageConstants'

enum NavState {
  Editorial,
  Nature,
  Colored,
  Golf,
}

type Props = {
  loading: boolean
}

export default function PageNav(props: Props) {
  const { loading } = props
  const [activeImage, setActiveImage] = React.useState<NavState | null>()

  return (
    <div className="bg-slate w-screen min-h-screen">
      <ImageOverlay
        show={activeImage === NavState.Editorial || !activeImage}
        img={EDITORIAL_IMAGES[0].path}
      />
      <ImageOverlay
        show={activeImage === NavState.Nature}
        img={NATURE_IMAGES[0].path}
      />
      <ImageOverlay
        show={activeImage === NavState.Colored}
        img={COLORED_IMAGES[0].path}
      />
      <ImageOverlay
        show={activeImage === NavState.Golf}
        img={GOLF_IMAGES[0].path}
      />

      <h1 className="h1 mb-12">Ken Papaleo</h1>

      <nav
        className={clsx(
          'relative flex flex-col items-start z-10 pl-[15%]',
          'transition duration-500 delay-500',
          loading && 'opacity-0',
        )}
      >
        <Link
          className={clsx(
            'primary-nav transition',
            loading && 'opacity-0',
            activeImage === NavState.Editorial && 'text-amber',
          )}
          href="/work/editorial"
          onMouseEnter={() => setActiveImage(NavState.Editorial)}
        >
          Editorial
        </Link>
        <Link
          className={clsx(
            'primary-nav transition',
            loading && 'opacity-0',
            activeImage === NavState.Nature && 'text-amber',
          )}
          href="/work/nature"
          onMouseEnter={() => setActiveImage(NavState.Nature)}
        >
          Nature
        </Link>
        <Link
          className={clsx(
            'primary-nav transition',
            loading && 'opacity-0',
            activeImage === NavState.Colored && 'text-amber',
          )}
          href="/work/hand-colored"
          onMouseEnter={() => setActiveImage(NavState.Colored)}
        >
          Colored
        </Link>
        <Link
          className={clsx(
            'primary-nav transition',
            loading && 'opacity-0',
            activeImage === NavState.Golf && 'text-amber',
          )}
          href="/work/golf"
          onMouseEnter={() => setActiveImage(NavState.Golf)}
        >
          Golf
        </Link>
      </nav>
    </div>
  )
}
