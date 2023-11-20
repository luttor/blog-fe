import Detail from "@/components/blog/detail/BlogDetail";

async function getData(id: string) {
    const res = await fetch(`http://localhost:8080/blogs/${id}`, { cache: 'no-store' });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function BlogDetail({ params: { id } }: { params: { id: string } }) {
    const blog = await getData(id);

    return <Detail blog={blog} id={id} />
}

