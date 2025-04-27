import { iconMap, type IconKey } from '../../../util/icon/iconMap';

interface PopMenuAttributeInterface {
    items: PopMenuItemInterface[];
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
    children?: PopMenuAttributeInterface;
    disabled?: boolean;
    divider?: boolean;
}

export {PopMenuAttributeInterface, PopMenuItemInterface}
