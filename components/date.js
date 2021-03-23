import { parseISO, format } from 'date-fns'
import utilStyles from '../styles/utils.module.css'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
