"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation'

interface Props {
    blog: any;
    id: string;
}

const Detail = ({ blog, id }: Props) => {
    const router = useRouter()

    const deleteBlog = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/blogs/${id}`);
            if (response.status === 200) {
                router.replace("/");
                router.refresh();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="details content">
            <h2>{blog.title}</h2>
            <div className="content">
                <p>{blog.body}</p>
            </div>
            <button className="delete" onClick={() => deleteBlog()}>Delete</button>
        </div>
    )
}

export default Detail