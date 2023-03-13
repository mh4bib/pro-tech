import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentCard from "../components/ContentCard";
import { toggleBrand, toggleRearrange } from "../redux/actions/filterActions";
import loadContentData from "../redux/thunk/contents/fectchContents";

const Home = () => {
  // const [contents, setContents] = useState([]);
  const filters = useSelector((state) => state.filters.filter);
  const contents = useSelector((state) => state.contents.content);
  const { tags, rearrange } = filters;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContentData());
  }, [dispatch]);

  // console.log(contents)
  const activeClass = "text-white  bg-indigo-500 border-white";

  let content;

  if (contents.length) {
    content = contents.map((content, index) => (
      <ContentCard key={index} content={content} />
    ))
  }

  if (contents.length && rearrange) {
    content = contents.sort((a, b) => new Date(b.upload) - new Date(a.upload)).map((content, index) => (
      <ContentCard key={index} content={content} />
    ))
  }

  /* if (contents.length && (stock || tags.length)) {
    content = contents
      .filter((content) => {
        if (stock) {
          return content.status === true;
        }
        return content;
      })
      .filter((content) => {
        if (tags.length) {
          return tags.includes(content.tags);
        }
        return content;
      })
      .map((content, index) => (
        <ContentCard key={index} content={content} />
      ))
  } */

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-2 flex justify-end gap-5'>
        {/* <button
          onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null}`}
        >
          In Stock
        </button> */}
        <select onChange={(e) => dispatch(toggleRearrange(e.target.value))} class="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="" disabled selected>Sort by</option>
          <option value="first-upload" class="py-2">First Upload</option>
          <option value="last-upload" class="py-2">Last Upload</option>
        </select>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;