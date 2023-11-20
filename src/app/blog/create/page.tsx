import FormCreate from "@/components/blog/create/FormCreate";
import { Blog } from "@/interface/Blog";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function generateMetadata() {
    return {
        title: `Blog Next App | Create a New Blog`
    };
}

const CreateBlog = () => {
    const handleSubmit = async (values: Blog) => {
        'use server'

        const response = await axios.post('https://blog-be-gray.vercel.app/blogs', values, {
            headers: {
                "Content-Type": 'application/json'
            }
        });

        if (response.status === 201) {
            revalidatePath("/", 'page');
            redirect("/");
        }
    };

    return (
        <div className="create-blog content">
            <FormCreate handleSubmit={handleSubmit} />
        </div>
    )
}

export default CreateBlog