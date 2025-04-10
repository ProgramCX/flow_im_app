import { iconMap, type IconKey } from '../../../util/icon/iconMap';

interface PopMenuAttributeInterface {
    items: PopMenuItem[];
    position?: {
        x: number;
        y: number;
    };
    visible: boolean;
    autoPositioning?: boolean;
}

interface PopMenuItemInterface{
    name: string;
    icon?:IconKey;
    click?: () => void;
    children?: PopMenuItem[];
    disabled?: boolean;
    divider?: boolean;
}

export {PopMenuAttributeInterface, PopMenuItemInterface}
