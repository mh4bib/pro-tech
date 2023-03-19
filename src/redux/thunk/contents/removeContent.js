import { removeContent } from "../../actions/contentActions";

const removeContentData = (id) =>{
    return async(dispatch, getState) =>{
        const res = await fetch(`https://pro-tech-server-mahiuddinhabib.vercel.app/api/v1/contents/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        })
        const data = await res.json();
        console.log(data);

        if (data.status) {
            dispatch(removeContent(id));
        }
    }
}

export default removeContentData;