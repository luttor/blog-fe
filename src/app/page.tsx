import Link from "next/link";

async function getData() {
  const res = await fetch('https://blog-be-gray.vercel.app//all-blogs', { cache: 'no-store' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.


  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {

  const blogs = await getData();

  return (
    <div className='blogs content'>
      <h2>All Blogs</h2>

      {
        blogs.map((item: any) => (
          <Link className="single" href={`/blog/${item["_id"]}`} key={item["_id"]}>
            <h3 className='title'>{item.title}</h3>
            <p className='snippet'>{item.snippet}</p>
          </Link>
        ))
      }
    </div>
  )
}
