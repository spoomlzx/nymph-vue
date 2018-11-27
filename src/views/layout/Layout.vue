<template>
    <el-container class="el-page">
        <el-header height="50px">
            <header-bar></header-bar>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <side-bar></side-bar>
            </el-aside>
            <el-container class="el-down">
                <el-main>
                    <main-content></main-content>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
  import HeaderBar from './HeaderBar'
  import SideBar from './SideBar'
  import MainContent from './MainContent'

  export default {
    name: 'Layout',
    components: {
      HeaderBar,
      SideBar,
      MainContent
    },
    methods: {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-page {
        height: 100vh;
    }

    .el-aside {
        min-height: 100%;
        background-color: #001529;
        //box-shadow: 2px 0 6px rgba(0,21,41,.35);
    }
    .el-main{
        background-color: #f0f2f5;
        padding: 0;
    }
</style>
