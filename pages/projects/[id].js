import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Paper from '@material-ui/core/Paper'
import utilStyles from '../../styles/utils.module.css'
import Head from 'next/head'
import Date from '../../components/date'
import { useRouter } from 'next/router'

// gets basic project data
export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData,
    },
  }
}

// gets the data to compile url paths for our pages
export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Project({ projectData }) {
  const router = useRouter()
  let thisPath = router.pathname.substr(1)
  console.log('projectData: ', projectData)
  return (
    <Layout current={thisPath}>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <Paper className={utilStyles.blogBody} elevation={3}>
          <h1 className={utilStyles.heading2Xl}>{projectData.title}</h1>
          <div className={utilStyles.blogDate}>
            <Date dateString={projectData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </Paper>
      </article>
    </Layout>
  )
}
