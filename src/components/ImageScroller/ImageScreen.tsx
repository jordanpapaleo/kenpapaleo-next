import { ImageT } from './index'

type Props = {
  image: ImageT
}

export default function ImageScreen(props: Props) {
  const { image } = props
  return (
    <div
      className="w-screen h-screen bg-cover md:bg-contain bg-center bg-no-repeat p-0 m-0"
      style={{
        backgroundImage: `url(${image.path})`,
      }}
    >
      <p className="text-white">{image.name}</p>
    </div>
  )
}
