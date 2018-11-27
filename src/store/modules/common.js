const common = {
  state: {
    // 页面文档可视高度(随窗口改变大小)
    documentClientHeight: 0,
  },

  mutations: {
    updateDocumentClientHeight (state, height) {
      state.documentClientHeight = height
    },
  },

  actions: {

  }
};

export default common
