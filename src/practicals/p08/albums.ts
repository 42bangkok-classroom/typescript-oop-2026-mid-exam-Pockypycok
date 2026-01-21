import axios from "axios";

interface FullAlbum{

userId: number;

id: number;

title: string;

body: string;

}

interface Posts {

postId: number;

id: number;

name: string;

email: string;

body: string;

}

interface UserSummary{

postId: number;

title: string;

totalComments: number;

}

export const getPostsByUser = async(userId: number): Promise<UserSummary[]> =>{

try{

const url1 = "https://jsonplaceholder.typicode.com/photos";

const url2 = "https://jsonplaceholder.typicode.com/albums";

const resPhotos = await axios.get<photos[]>(url1);

const resAlbums = await axios.get<albums[]>(url2);

const photos = resPhotos.data;

const albums = resAlbums.data;
const result = posts.map((post)=>{

const count = comments.filter(posts => posts.postId === post.id).length;

return{

postId: post.id,

title: post.title,

totalComments: count,

}

});

return result;

}catch(error){

return [];

}

}
