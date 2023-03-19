import { addContent } from "../../actions/contentActions";

const addContentData = (content) => {
    return async (dispatch, getState) => {
        const res = await fetch("https://pro-tech-server-mahiuddinhabib.vercel.app/api/v1/contents", {
            method: "POST",
            body: JSON.stringify(content),  
            headers: {
                "Content-type": "application/json",
            }
        })
        const data = await res.json();
        console.log(data);

        if (data.status) {
            dispatch(addContent({
                _id: data._id,
                ...content,
            }))
        }
    }
}

export default addContentData;