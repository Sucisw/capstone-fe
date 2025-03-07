import CONFIG from "./config";

const API_ENDPOINT = {
  // ==================== DONASI ====================
  ALL_DONASI: `${CONFIG.API_URL}/posts`,
  ALL_MY_DONASI: (id) => `${CONFIG.API_URL}/posts/?userId=${id}`,
  CREATE_DONASI: `${CONFIG.API_URL}/posts`,
  SINGLE_DONASI: (id) => `${CONFIG.API_URL}/posts/${id}`, // <=== DETAIL, UPDATE, DELETE
  // COMMENT DONASI
  CREATE_COMMENT: `${CONFIG.API_URL}/comments/posts`,
  GET_COMMENT_DONASI: (id) => `${CONFIG.API_URL}/comments/posts/${id}`,
  CREATE_BOOKMARK_DONASI: `${CONFIG.API_URL}/saved`,
  DELETE_BOOKMARK_DONASI: `${CONFIG.API_URL}/saved`,
  GET_BOOKMARK_DONASI: `${CONFIG.API_URL}/saved/`,
  CREATE_LIKE_DONASI: `${CONFIG.API_URL}/likes/donasi`,
  DELETE_LIKE_DONASI: `${CONFIG.API_URL}/likes/donasi`,
  GET_CURRENT_USER_LIKE_DONASI: (userId)=> `${CONFIG.API_URL}/likes/donasi/?userId=${userId}`,
  GET_CURRENT_USER_BOOKMARK_DONASI: (userId)=> `${CONFIG.API_URL}/saved/?userId=${userId}`,

  // ==================== USER ====================
  LOGIN: `${CONFIG.API_URL}/users/login`,
  REGISTER: `${CONFIG.API_URL}/users/register`,
  LOGOUT: `${CONFIG.API_URL}/users/signout`,
  DETAIL_USER: (id) => `${CONFIG.API_URL}/users/${id}`,

  // ==================== BLOG ====================
  ALL_BLOG: `${CONFIG.API_URL}/blogs`,
  ALL_MY_BLOG: (id) => `${CONFIG.API_URL}/blogs/?userId=${id}`,
  SINGLE_BLOG: (id) => `${CONFIG.API_URL}/blogs/${id}`,
  CREATE_BLOG: `${CONFIG.API_URL}/blogs`,
};

export default API_ENDPOINT;
