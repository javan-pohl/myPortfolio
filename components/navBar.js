import Link from 'next/link'

// let myLinks = process.env.links
const myLinks = [
  { href: '/', text: 'HOME' },
  { href: 'about-me', text: 'ABOUT ME' },
  { href: 'projects', text: 'PROJECTS' },
  { href: 'blog', text: 'BLOG' },
]

export default function NavBar({ mainClass, current }) {
  return (
    <section className={mainClass}>
      <ul>
        {myLinks.map(({ href, text }) => {
          return (
            <Link href={href} key={text}>
              <li className={href == current ? 'navBarActive' : ''}>{text}</li>
            </Link>
          )
        })}
      </ul>
    </section>
  )
}
