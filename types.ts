export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  size: string;
  dough: string;
}

export interface IDropdownMenuProps {
  isOpen: boolean;
  options: readonly {
    name: string;
    href?: string;
    action?: () => void;
  }[];
  onClose: () => void;
}
