
import axios from "axios";

const API_SERVER_HOST = 'http://192.168.100.129:30080';

const prefix = `${API_SERVER_HOST}/api/v1`;


// 게시글 등록
export const postPost = async (post) => {

  console.log("post : ", post);

  const res = await axios.post(`${prefix}/posts`, post);

  console.log("res : ", res);

  return res.data;

}


// 게시글 목록 조회
export const getPosts = async (pageParam) => { // { page: 1, size: 10, keyfield: 'title', keyword: '제목' }

  const { page, size, keyfield, keyword } = pageParam;

  console.log('page : ', page);
  console.log('size : ', size);
  console.log('keyfield : ', keyfield);
  console.log('keyword : ', keyword);

  const res = await axios.get(`${prefix}/posts`, { params: { page, size, keyfield, keyword } }); // posts?page=1&size=10 형태로 전달

  return res.data;
}


// 게시글 상세 조회

export const getPost = async (id) => {

  const res = await axios.get(`${prefix}/posts/${id}`);

  console.log("res : ", res);

  return res.data;

}
