"use client"
import React from 'react';
import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'

const MobileNav:React.FC = () => {
  const pathname = usePathname()
  console.log(pathname)

    return (
        <div>
            <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="/"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${pathname==="/"? "bg-muted text-foreground":"text-muted-foreground"}  hover:text-foreground`}
                >
                  <Home className="h-5 w-5" />
                  简历分析
                </Link>
                <Link
                  href="/demandanalysis"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${pathname==="/demandanalysis"? "bg-muted text-foreground":"text-muted-foreground"}  hover:text-foreground`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  招聘需求分析
                  {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge> */}
                </Link>
                <Link
                  href="/seting"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${pathname==="/seting"? "bg-muted text-foreground":"text-muted-foreground"}  hover:text-foreground`}
                >
                  <Package className="h-5 w-5" />
                  设置AI key
                </Link>
                <Link
                  href="/about"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${pathname==="/about"? "bg-muted text-foreground":"text-muted-foreground"}  hover:text-foreground`}
                >
                  <Users className="h-5 w-5" />
                  关于我们
                </Link>
                <Link
                  href="/feedback"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${pathname==="/feedback"? "bg-muted text-foreground":"text-muted-foreground"}  hover:text-foreground`}
                >
                  <LineChart className="h-5 w-5" />
                  反馈
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>开源</CardTitle>
                    <CardDescription>
                    open source
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      github
                    </Button>
                
                  </CardContent>
                </Card>
              </div>
        </div>
    );
};

export default MobileNav;