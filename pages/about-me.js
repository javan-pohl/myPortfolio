import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useRouter } from 'next/router'
import { getBioData } from '../lib/bio'
import Paper from '@material-ui/core/Paper'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'public')

export async function getStaticProps() {
  const bioData = await getBioData()
  return {
    props: {
      bioData,
    },
  }
}

export default async function Home({ bioData }) {
  const router = useRouter()
  let thisPath = router.pathname.substr(1)
  return (
    <Layout current={thisPath}>
      <Paper className={utilStyles.blogBody} elevation={3}>
        <div dangerouslySetInnerHTML={{ __html: bioData.contentHtml }} />
        <a
          download="Javan-Pohl-Resume.docx.pdf"
          href="Javan-Pohl-Resume.docx.pdf"
          title="Javan-Pohl-Resume"
        >
          Download Resume
        </a>
      </Paper>
      <Paper className={utilStyles.blogBody} elevation={3}>
        <iframe
          className={utilStyles.resume}
          src="Javan-Pohl-Resume.docx.pdf"
        ></iframe>
      </Paper>
    </Layout>
  )
}
