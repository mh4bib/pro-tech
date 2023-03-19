import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addContentData from "../../redux/thunk/contents/addContentData";

const AddContent = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

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

    console.log(content);
    dispatch(addContentData(content));

    reset();
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
          <input type='text' id='heading' {...register("heading")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input type='text' name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='content'>
            Content
          </label>
          <textarea type='text' name='content' id='content' {...register("content")} />
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

export default AddContent;