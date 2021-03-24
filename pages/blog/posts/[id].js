import Layout from '../../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Paper from '@material-ui/core/Paper'
import utilStyles from '../../../styles/utils.module.css'
import Head from 'next/head'
import Date from '../../../components/date'

// gets basic post data
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

// gets the data to compile url paths for our pages
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Paper className={utilStyles.blogBody} elevation={3}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.blogDate}>
            <Date dateString={postData.date} />
          </div>
          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Paper>
      </article>
    </Layout>
  )
}
