/* eslint-disable react/no-unescaped-entities */

import PageGallery from '@/components/PageGallery'
import { TEST_IMAGES } from '@/imageConstants'

export default function Golf() {
  return (
    <PageGallery images={TEST_IMAGES.filter((_, i) => i < 5)}>
      <h1>Golf</h1>
      <p>
        Golf course photography is similiar to landscape photography except
        these scenes are meticulously cared for. This site is a collection of
        Ken Papaleo's work at a variety of golf courses in Colorado.
      </p>
    </PageGallery>
  )
}
