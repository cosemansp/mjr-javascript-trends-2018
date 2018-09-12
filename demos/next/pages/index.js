import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <div>
        <h1>Simple Next.js Example</h1>
        <span>
            <Link href="/other"><a className="button">Load another page</a></Link>
        </span>
        <h2>Batman TV Shows</h2>
        <ul>
        {props.shows.map(({show}) => (
            <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
            </Link>
            </li>
        ))}
        </ul>
    </div>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)
    return {
      shows: data
    }
  }

  export default Index
