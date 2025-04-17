<!--
author: 程旭
description: 主窗口的侧边栏
date: 2025-04-07
-->
<template>
    <div class="sidebar" style="width: 60px;">
        <div class="sidebar-content flex-column-space-between">
            <div class="left flex-column">
                <h3 style="color: white;">FM</h3>
                <img src="../../assets/png/avatar.png.jpg" alt="logo" class="logo" width="35" />
                <NavBar :items="navData" />
            </div>
            <div class="right flex-column">
                <NavBar :items="bottomNavData" style="margin-bottom: 15px;" :u-style="{ gap: '6px' }" />
            </div>
        </div>
    </div>
    <PopMenu :attribute="menuAttribute" @close="menuAttribute.visible = false" />
</template>
<script setup lang="ts">
import { navData,bottomNavData,setNavBadge } from '../../composables/SideBar/useBadge';
import NavBar from '../../components/mainwindow/NavBar.vue';
import PopMenu from '../common/PopMenu/PopMenu.vue';
import { onMounted,ref } from 'vue';
import { PopMenuAttributeInterface } from '../common/PopMenu/index';
import {toggleDark} from "@/util/theme";

const menuAttribute = ref<PopMenuAttributeInterface>(
    {
        items:[
            {
                name: '检查更新',
                icon: 'update',

            },
            {
                name: '帮助',
                icon: 'question',
                click: () => {
                    console.log('帮助');
                },
            },
            {
                name: '锁定',
                icon: 'lock',

            },
            {
                name: '设置',
                icon: 'setting',
                click: () => {
                    console.log('设置');
                },
                children: {
                    items: [
                        {
                            name: '切换主题',
                            icon: 'brush',
                            click: () => {
                                toggleDark();
                            },
                        },
                        {
                            name: '语言',
                            // icon: 'language',
                            click: () => {
                                console.log('语言');
                            },
                        },
                        {
                            name: '快捷键',
                            // icon: 'shortcut',
                            click: () => {
                                console.log('快捷键');
                            },
                        },
                    ],
                    visible: false,
                    autoPositioning: false,
                },
            },
            {
                name: '关于',
                icon: 'caution',
                click: () => {
                    console.log('关于');
                },
            },
            {
                name: '退出账号',
                icon: 'esc'
            }
        ],
        visible: false,
        autoPositioning: true,
    }
);
setNavBadge('number', 'message', 10);

onMounted(() => {
   const menuItem = bottomNavData.value.find(item => item.icon === 'menu');
   if(menuItem){
        menuItem.click = () => {
            menuAttribute.value.visible = true;
            console.log('弹出菜单');
        };
   }
});
</script>
<style lang="scss" scoped>
.sidebar {
    width: 60px;
    height: 100vh;
    top: 0;
    left: 0;
    position: sticky;
    background-color: var(--sidebar-background-color);
}

.sidebar-content {
    width: 100%;
    height: 100%;
    padding: 0 10px;

    .left,
    .right {
        gap: 10px;

        .logo {
            border-radius: 50% 50%;
            margin-bottom: 8px;
        }
    }
}
</style>