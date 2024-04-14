import clsx from 'clsx'

type Props = {
  show: boolean
  img: string
}

export default function ImageOverlay(props: Props) {
  const { show, img } = props
  return (
    <div
      className={clsx(
        'fixed top-0 left-0 w-screen h-screen transition-opacity bg-cover bg-center duration-500',
        show ? 'opacity-100' : 'opacity-0',
      )}
      style={{ backgroundImage: `url(${img})` }}
    />
  )
}
