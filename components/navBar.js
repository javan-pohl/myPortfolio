import Link from 'next/link'

// let myLinks = process.env.links
const myLinks = [
  { href: '/', text: 'HOME' },
  { href: '/about-me', text: 'ABOUT ME' },
  { href: '/projects', text: 'PROJECTS' },
  { href: '/blog', text: 'BLOG' },
]

export default function NavBar({ mainClass, current }) {
  let newCurrent =
    '/' +
    (current.indexOf('/') >= 0
      ? current.substring(0, current.indexOf('/'))
      : current.substring(0))
  return (
    <section className={mainClass}>
      <ul>
        {myLinks.map(({ href, text }) => {
          // console.log('href, newCurrent: ', href, newCurrent)
          return (
            <Link href={href} key={text}>
              <li className={href == newCurrent ? 'navBarActive' : 'pointer'}>
                {text}
              </li>
            </Link>
          )
        })}
      </ul>
    </section>
  )
}
