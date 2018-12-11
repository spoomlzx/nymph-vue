<template>
    <div>
        <el-breadcrumb class="main-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in bread"
                                :key="index"
                                v-if="item.name">{{item.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="main-content" shadow="never">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
  export default {
    computed: {
      bread() {
        return this.$route.matched;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .main-breadcrumb {
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        padding-left: 10px;
    }

    .main-content {
        margin: 8px;
    }
</style>
