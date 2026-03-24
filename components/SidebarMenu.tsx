
"use client";

import SidebarMenuItem from './SidebarMenuItem';
import { Barcode, ChartLine, ShoppingCart, Users, Settings } from 'lucide-react';

const menuItems = [
    {
        href: '/admin',
        label: 'Products',
        icon: Barcode,
        color: 'purple',
    },
    {
        href: '/admin/analytics',
        label: 'Analytics',
        icon: ChartLine,
        color: 'blue',
    },
    {
        href: '/admin/orders',
        label: 'Orders',
        icon: ShoppingCart,
        color: 'green',
    },
    {
        href: '/admin/customers',
        label: 'Customers',
        icon: Users,
        color: 'yellow',
    },
    {
        href: '/admin/settings',
        label: 'Settings',
        icon: Settings,
        color: 'red',
    },
] as const;

export default function SidebarMenu() {
    return (
        <nav className="mt-4">
            <ul className="gap-2 px-4 flex flex-col">
                {menuItems.map((item) => (
                    <SidebarMenuItem key={item.href} item={item} />
                ))}
            </ul>
        </nav>
    );
}