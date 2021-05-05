import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    if (fileName.includes('.md')) {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
      }
    } 
  })
  // Remove undefined elements
  const allPostsDataFiltered = allPostsData.filter(entry => entry != undefined)
  // Sort posts by date
  return allPostsDataFiltered.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  // the function that gets postIds/url-paths need to return the data in this format:
  // //
  // // Returns an array that looks like this:
  // // [
  // //   {
  // //     params: {
  // //       id: 'ssg-ssr'
  // //     }
  // //   },
  // //   {
  // //     params: {
  // //       id: 'pre-rendering'
  // //     }
  // //   }
  // // ]
  return fileNames.map((fileName) => {
    if (fileName.includes('.md')) {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      }
    }
  }).filter(entry => entry != undefined)
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
