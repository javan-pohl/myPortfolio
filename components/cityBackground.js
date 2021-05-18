import Image from 'next/image'

export default function CityBackground() {
  // let windowWidth = window.innerWidth && '900'
  // let windowWith = typeof window != 'undefined' ? '900' : window.innerWidth
  let windowWidth
  if (typeof window === 'undefined') {
    windowWidth = '900'
  } else {
    windowWidth = window.innerWidth
    console.log(window.innerWidth)
  }
  let skylineUrl = `/images/denver-skyline${
    windowWidth <= 600 ? '-small' : ''
  }.webp`
  // console.log('window width', windowWidth)
  return (
    <>
      <Image
        // src='/images/denver-skyline.webp'
        src={skylineUrl}
        unoptimized={true}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />
    </>
  )
}
