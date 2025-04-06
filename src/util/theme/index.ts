import { useDark, useToggle } from "@vueuse/core";
import {
  baseLayerLuminance,
  StandardLuminance,
} from "@fluentui/web-components";
import { watch } from "vue";

const isDark = useDark();

const toggleDark = useToggle(isDark);

//监听isDark的变化，同步FluentUI的主题
watch(
  isDark,
  (newValue) => {
    console.log("Dark mode:", newValue);
    baseLayerLuminance.setValueFor(
      document.body,
      newValue ? StandardLuminance.DarkMode : StandardLuminance.LightMode
    );
  },
  { immediate: true }
);

export { toggleDark, isDark };
