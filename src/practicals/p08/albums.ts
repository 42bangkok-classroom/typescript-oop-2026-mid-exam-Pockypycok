import axios from "axios";

interface Posts{

userId: number;

id: number;

title: string;

body: string;

}

interface Comments {

postId: number;

id: number;

name: string;

email: string;

body: string;

}

interface reComments{

postId: number;

title: string;

totalComments: number;

}

export const mapPostWithCommentCount = async(): Promise<reComments[]> => {

try{

const url1 = "https://jsonplaceholder.typicode.com/photos";

const url2 = "https://jsonplaceholder.typicode.com/albums";

const resPosts = await axios.get<photos[]>(url1);

const resComments = await axios.get<albums[]>(url2);

const posts = resPosts.data;

const comments = resComments.data;

const result = posts.map((post)=>{

const count = comments.filter(comment => comment.postId === post.id).length;

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
