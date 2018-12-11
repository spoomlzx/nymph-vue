<template>
    <el-menu
            :default-active="$route.path"
            :router="true"
            :unique-opened="true"
            active-text-color="#fff">
        <template v-for="route in routes">
            <el-submenu v-if="route.children.length>1" :index="route.path" :key="route.path">
                <template slot="title">
                    <svg-icon :icon-class="route.icon"/>
                    <span>{{route.name}}</span>
                </template>
                <el-menu-item v-for="child in route.children" v-if="!child.hidden" :index="child.path" :key="child.path">
                    <svg-icon :icon-class="child.icon"/>
                    <span slot="title">{{child.name}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="route.path" :key="route.path">
                <svg-icon :icon-class="route.icon"/>
                <span slot="title">{{route.name}}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
  import { constRouter } from '@/router'

  export default {
    computed: {
      routes() {
        return constRouter.filter(item => {
          return !item.hidden;
        });
      }
    },

    methods: {}
  }
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
    .el-menu {
        border-right: 0;

        .svg-icon {
            padding-right: 10px;
            font-size: 16px;
        }
    }


</style>
