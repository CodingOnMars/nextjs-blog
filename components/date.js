import { parseISO, format } from 'date-fns';

// LINK: https://date-fns.org/v2.16.1/docs/format

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'd LLLL yyyy')}</time>;
}
