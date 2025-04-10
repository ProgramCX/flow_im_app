/**
 * @description: 图标映射表
 * @module iconMap
 * @date 2024-04-09
 */

import MessageIcon from '/assets/svg/nav/nav_message_normal_24.svg';
import MessageActiveIcon from '/assets/svg/nav/nav_message_active_24.svg';
import ContactIcon from '/assets/svg/nav/nav_contact_normal_24.svg';
import ContactActiveIcon from '/assets/svg/nav/nav_contact_active_24.svg';
import SettingIcon from '/assets/svg/nav/nav_setting_normal_16.svg';
import Collection from '/assets/svg/nav/collection_24.svg';
import Menu from '/assets/svg/nav/menu_24.svg';
import Folder from '/assets/svg/nav/folder_24.svg';
import Lock from '/assets/svg/lock_24.svg';
import Caution from '/assets/svg/caution_24.svg';
import Esc from '/assets/svg/esc_24.svg';
import Question from '/assets/svg/question_24.svg';
import Update from '/assets/svg/update_24.svg';
// 图标 key 类型
export type IconKey =
  | 'message'
  | 'messageActive'
  | 'contact'
  | 'contactActive'
  | 'setting'
  | 'collection'
  | 'menu'
  | 'folder'
  | 'lock'
  | 'caution'
  | 'esc'
  | 'question'
  | 'update';

// 图标映射表
export const iconMap: Record<IconKey, string> = {
  message: MessageIcon,
  messageActive: MessageActiveIcon,
  contact: ContactIcon,
  contactActive: ContactActiveIcon,
  setting: SettingIcon,
  collection: Collection,
  menu: Menu,
  folder: Folder,
  lock: Lock,
  caution: Caution,
  esc :Esc,
  question: Question,
  update: Update,
};

