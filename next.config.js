module.exports = {
  env: {
    links: [
      { href: '/', text: 'HOME' },
      { href: 'about-me', text: 'ABOUT ME' },
      { href: 'projects', text: 'PROJECTS' },
      { href: 'blog', text: 'BLOG' },
    ],
  },
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
}
