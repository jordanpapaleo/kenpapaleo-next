/* eslint-disable react/no-unescaped-entities */

import PageGallery from '@/components/PageGallery'
import { TEST_IMAGES } from '@/imageConstants'

export default function Editorial() {
  return (
    <PageGallery images={TEST_IMAGES.filter((_, i) => i < 5)}>
      <h1>Editorial</h1>
      <p>
        With over thirty years of photojournalism experience and two Pulitzer
        Prize awards, Ken’s photography stands out from the rest. This
        collection of editorial photos will show his style and unique way of
        seeing things
      </p>
    </PageGallery>
  )
}
