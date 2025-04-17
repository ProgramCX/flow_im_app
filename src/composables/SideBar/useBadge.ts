/**
 * @description: 侧边栏导航栏数据
 * @module useBadge
 * @date 2024-04-10
 */
import { NavBarItem } from '../../components/mainwindow/NavBar.vue';
import { ref } from 'vue';

export const navData = ref<NavBarItem[]>([
    {
        icon: 'message',
        activeIcon: 'messageActive',
        routeName: 'MessageList',
        isTab: true,
        default: true,
        badgeType: 'none',
    },
    {
        icon: 'contact',
        activeIcon: 'contactActive',
        routeName: 'contactlist',
        isTab: true,
        badgeType: 'none',
    }
])

export const bottomNavData = ref<NavBarItem[]>([
    {
        icon: 'setting',
        activeIcon: 'setting',
        routeName: 'setting',
        isTab: false,
        badgeType: 'none',
    },
    {
        icon: 'collection',
        activeIcon: 'collection',
        routeName: 'collection',
        isTab: false,
        badgeType: 'none',
    },
    {
        icon: 'folder',
        activeIcon: 'folder',
        routeName: 'folder',
        isTab: false,
        badgeType: 'dot',
    },
    {
        icon: 'menu',
        activeIcon: 'menu',
        /*click属性等待注入*/
        isTab: false,
        badgeType: 'none',
    }

])
export const setNavBadge=(badgeType: 'dot' | 'number' | 'none', iconType: 'message' | 'contact' | 'setting' | 'collection' | 'folder' | 'menu', number?: number)=> {
    const index = navData.value.findIndex((item) => item.icon === iconType);
    if (index !== -1) {
        navData.value[index].badgeType = badgeType;
        if (badgeType === 'number') {
            navData.value[index].badgeNumber = number;
        } else {
            navData.value[index].badgeNumber = 0;
        }
    }
}
