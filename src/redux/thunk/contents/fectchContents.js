import { loadContent } from "../../actions/contentActions";

const loadContentData = () => {
    return async (dispatch, getState) =>{
        const res = await fetch("http://localhost:5000/api/v1/contents");
        // const res = await fetch("contents.json");
        const data = await res.json();

        // console.log(data);
        if(data.status){
            dispatch(loadContent(data.data))
        }
    }
}

export default loadContentData;