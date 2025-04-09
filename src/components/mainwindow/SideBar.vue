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
                <img src="../../assets/png/avatar.png.jpg" alt="logo" class="logo" width="35"/>
                <NavBar :items="navData" />
            </div>
            <div class="right flex-column">
               <NavBar :items="bottomNavData" style="margin-bottom: 15px;" :u-style="{gap:'6px'}"/>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import NavBar from './NavBar.vue';
import { NavBarItem } from './NavBar.vue';
import { onMounted, ref } from 'vue';

import MessageIcon from '../../assets/svg/nav/nav_message_normal_24.svg';
import MessageActiveIcon from '../../assets/svg/nav/nav_message_active_24.svg';
import ContactIcon from '../../assets/svg/nav/nav_contact_normal_24.svg';
import ContactActiveIcon from '../../assets/svg/nav/nav_contact_active_24.svg';
import SettingIcon from '../../assets/svg/nav/nav_setting_normal_16.svg';
import Collection from '../../assets/svg/nav/collection_24.svg';
import Menu from '../../assets/svg/nav/menu_24.svg';
import Folder from '../../assets/svg/nav/folder_24.svg';

 const navData = ref<NavBarItem[]>([
    {
        icon: MessageIcon,
        activeIcon: MessageActiveIcon,
        routeName: 'messagelist',
        isTab: true,
        default: true
    },
    {
        icon: ContactIcon,
        activeIcon: ContactActiveIcon,
        routeName: 'contactlist',
        isTab: true,
    }
 ])

 const bottomNavData = ref<NavBarItem[]>([
    {
        icon: SettingIcon,
        activeIcon: SettingIcon,
        routeName: 'setting',
        isTab: false,
    },
    {
        icon: Collection,
        activeIcon: Collection,
        routeName: 'collection',
        isTab: false,
    },
    {
        icon: Folder,
        activeIcon: Folder,
        routeName: 'folder',
        isTab: false,
    },
    {
        icon: Menu,
        activeIcon: Menu,
        routeName: 'menu',
        isTab: false,
    }
    
 ])

</script>
<style lang="scss" scoped>
.sidebar{
    width: 60px;
    height: 100vh;
    top: 0;
    left: 0;
    position: sticky;
    background-color: var(--sidebar-background-color);
}

.sidebar-content{
    width: 100%;
    height: 100%;
    padding: 0 10px;
    .left,.right{
        gap: 10px;
        .logo{
           border-radius: 50% 50%;
           margin-bottom: 8px;
        }
    }
}
</style>