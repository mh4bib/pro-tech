import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import updateContentData from "../../redux/thunk/contents/updateContent";

const UpdateContent = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { _id } = useParams();
    const allContents = useSelector((state) => state.contents.content);
    const selectedContent = allContents.find((content) => content._id === _id);
    const { heading, content, tags, image } = selectedContent;

    const submit = (data) => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString("default", { month: "short" })} ${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
        const content = {
            heading: data.heading,
            image: data.image,
            content: data.content,
            upload: formattedDate,
            tags: [
                data.tag1,
                data.tag2,
                data.tag3,
            ]
        };

        // console.log(content);
        dispatch(updateContentData(content, _id));
        // reset();
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='heading'>
                        Heading
                    </label>
                    <input type='text' id='heading' defaultValue={heading} {...register("heading")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input type='text' name='image' id='image' defaultValue={image} {...register("image")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='content'>
                        Content
                    </label>
                    <textarea type='text' name='content' id='content' defaultValue={content} {...register("content")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'></div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag1'>
                        Tag 1
                    </label>
                    <input
                        type='text'
                        name='tag1'
                        id='tag1'
                        defaultValue={tags[0]}
                        {...register("tag1")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag2'>
                        Tag 2
                    </label>
                    <input
                        type='text'
                        name='tag2'
                        id='tag2'
                        defaultValue={tags[1]}
                        {...register("tag2")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag3'>
                        Tag 3
                    </label>
                    <input
                        type='text'
                        name='tag3'
                        id='tag3'
                        defaultValue={tags[2]}
                        {...register("tag3")}
                    />
                </div>

                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateContent;