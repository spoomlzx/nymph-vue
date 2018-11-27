<template>
    <div>
        <div class="header-left">
            私 人 貔 貅
        </div>
        <div class="header-right">
            <el-menu mode="horizontal"
                     class="header-fold"
                     background-color="#EB6709"
                     text-color="#fff"
                     active-text-color="#fff">
                <el-menu-item index="fold">
                    <svg-icon icon-class="fold"></svg-icon>
                </el-menu-item>
            </el-menu>
            <el-menu class="el-menu-header" mode="horizontal"
                     background-color="#EB6709"
                     text-color="#fff"
                     active-text-color="#fff">
                <el-menu-item index="1">
                    <svg-icon icon-class="search"></svg-icon>
                </el-menu-item>
                <el-menu-item index="3">
                    <svg-icon icon-class="message"></svg-icon>
                </el-menu-item>
                <el-submenu index="2">
                    <template class="submenu__title" slot="title">
                    <span class="el-dropdown-link">
                      <img :src="avatar" class="header-avatar" :alt="username">{{ username }}
                    </span>
                    </template>
                    <el-menu-item index="2-1">个人中心</el-menu-item>
                    <el-menu-item index="2-2">修改密码</el-menu-item>
                    <el-menu-item index="2-3">退出登录</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'username',
        'avatar'
      ])
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .header-left {
        font-size: 22px;
        font-weight: 500;
        color: #e9e9e9;
        text-align: center;
        width: 180px;
        float: left;
    }

    .header-right {
        .header-fold {
            float: left;
            .el-menu-item{
                font-size: 18px;
                color: #fff;
            }
        }

        .el-menu-header {
            float: right;

            .el-menu-item {
                font-size: 18px;
            }

            .header-avatar {
                width: 36px;
                height: auto;
                margin-right: 5px;
                border-radius: 100%;
                vertical-align: middle !important;
            }

        }
    }


</style>

