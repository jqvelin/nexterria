'use client'
import { IDropdownMenuProps } from "@/types";
import Link from "next/link";
import { FC, useEffect } from "react";

const DropdownMenu: FC<IDropdownMenuProps> = ({isOpen, options, onClose}) => {
    useEffect(() => {
        document.addEventListener('click', onClose)
        return () => document.removeEventListener('click', onClose)
    })
    return (
        <div className={`z-10 absolute top-full left-1/2 -translate-x-1/2 bg-orange-400 text-white shadow-3xl p-2 flex flex-col rounded-xl transition-all ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            {options.map((option, index) => {
                if (option.action) {
                    return <div key={index} onClick={option.action} className="hover:bg-orange-500 p-2 rounded-md">{option.name}</div>
                } else if (option.href) {
                    return <Link key={index} href={option.href} className="hover:bg-orange-500 p-2 rounded-md">{option.name}</Link>
                }
            })}
        </div>
    );
};

export default DropdownMenu;