const getters = {
  token: state => state.user.token,
  username: state => state.user.username,
  avatar: state => state.user.avatar,
  email: state => state.user.email,
  mobile: state => state.user.mobile,
  status: state => state.user.status
};
export default getters
