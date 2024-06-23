export interface IProduct {
    id: number | string,
    title: string,
    description: string,
    price: number,
    thumbnail: string,
    size: string,
    dough: string
}

export interface IDropdownMenuProps {
    isOpen: boolean;
    options: {
        name: string;
        href?: string;
        action?: () => void
    }[];
    onClose: () => void
}