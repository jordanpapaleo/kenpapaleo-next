import { ImageT } from './index'
import ImageScreen from './ImageScreen'

type Props = {
  images: ImageT[]
}

export default function ImageScroller(props: Props) {
  const { images } = props
  return (
    <ul className="list-none bg-black p-0 m-0">
      {images.map((image, index) => (
        <li key={index}>
          <ImageScreen image={image} />
        </li>
      ))}
    </ul>
  )
}
