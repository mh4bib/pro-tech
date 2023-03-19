import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ReadMore = () => {
    const { _id } = useParams();
    const allContents = useSelector((state) => state.contents.content);
    const selectedContent = allContents.find((content) => content._id === _id);
    const { heading, content, upload, tags, image } = selectedContent;
    console.log(selectedContent);
    return (
        <div className='pt-8 px-16'>
            <div className='flex justify-center'><img className=' w-[500px]' src={image} alt="" srcset="" /></div>
            <p className='text-3xl font-bold text-center mt-4 mb-8'>{heading}</p>
            <p className='text-sm'>{upload}</p>
            <p className='text-xl'>{content}</p>

            <div className='mt-4'>
                {
                    tags.map(tag => <span className='border px-2 py-1 rounded-full text-xs mr-2'>{tag}</span>)
                }
            </div>
        </div>
    );
};

export default ReadMore;