/* eslint-disable react/no-unescaped-entities */

import PageGallery from '@/components/PageGallery'
import { TEST_IMAGES } from '@/imageConstants'

export default function Nature() {
  return (
    <PageGallery images={TEST_IMAGES.filter((_, i) => i < 5)}>
      <h1>Nature</h1>
      <p>
        Nature photography brings me into God’s country. Each of the four
        seasons shows off His glory. A great location might still require hours
        of waiting for the right components to come together. While out shooting
        the beauty of Colorado, i find great peace.
      </p>
    </PageGallery>
  )
}
