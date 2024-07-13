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

const Mainnav:React.FC = () => {
  const pathname = usePathname()
  console.log(pathname)
  
    return (
        <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">AI招聘助手</span>
            </Link>
            {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg ${pathname=="/"?"bg-muted text-primary":"text-muted-foreground" }  px-3 py-2   transition-all hover:text-primary`}
              >
                <Home className="h-4 w-4" />
                简历分析
              </Link>
              <Link
                href="/demandanalysis"
                className={`flex items-center gap-3 rounded-lg ${pathname=="/demandanalysis"?"bg-muted text-primary":"text-muted-foreground" }  px-3 py-2   transition-all hover:text-primary`}
              >
                <ShoppingCart className="h-4 w-4" />
                招聘需求分析
                {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge> */}
              </Link>
              <Link
                href="/seting"
                className={`flex items-center gap-3 rounded-lg ${pathname=="/seting"?"bg-muted text-primary":"text-muted-foreground" }  px-3 py-2   transition-all hover:text-primary`}
              >
                <Package className="h-4 w-4" />
                设置 ai key{" "}
              </Link>
              <Link
                href="/about"
                className={`flex items-center gap-3 rounded-lg ${pathname=="/about"?"bg-muted text-primary":"text-muted-foreground" }  px-3 py-2   transition-all hover:text-primary`}
              >
                <Users className="h-4 w-4" />
                关于我们
              </Link>
              <Link
                href="/feedback"
                className={`flex items-center gap-3 rounded-lg ${pathname=="/feedback"?"bg-muted text-primary":"text-muted-foreground" }  px-3 py-2   transition-all hover:text-primary`}
              >
                <LineChart className="h-4 w-4" />
                反馈
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>代码开源</CardTitle>
                <CardDescription>
                open source
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  github
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
};

export default Mainnav;