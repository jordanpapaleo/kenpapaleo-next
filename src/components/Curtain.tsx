import clsx from 'clsx'

type Props = {
  state: 'open' | 'closed'
}

export default function Curtain(props: Props) {
  const { state } = props
  return (
    <div
      className={clsx(
        'fixed top-0 left-0 w-screen h-screen z-20 transition-transform duration-0',
        state === 'open' && `-translate-y-full delay-1000`,
        state === 'closed' && 'translate-y-0 delay-0',
      )}
    >
      <div
        className={clsx(
          `w-full h-full bg-white transition-opactity duration-1000`,
          state === 'open' && 'opacity-0',
        )}
      ></div>
    </div>
  )
}
