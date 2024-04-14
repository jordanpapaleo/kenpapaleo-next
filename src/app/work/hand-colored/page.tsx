/* eslint-disable react/no-unescaped-entities */

import PageGallery from '@/components/PageGallery'
import { TEST_IMAGES } from '@/imageConstants'

export default function HandColored() {
  return (
    <PageGallery images={TEST_IMAGES.filter((_, i) => i < 5)}>
      <h1>Hand Colored</h1>
      <p>
        Before color photography was available, the only way to achieve color
        was by painting it directly to the photograph by hand. Then it was a
        neccesity, today it is a lost art form that few partake in. Ken's style
        only applies color to part of the image creating a collision of black
        and white and color. Ken Papaleo has been hand painting black and white
        photographs of Colorado for over 15 years.
      </p>
    </PageGallery>
  )
}
