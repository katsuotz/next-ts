"use client"

import Image from 'next/image'
import {useAppDispatch, useAppSelector} from "@/store";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {logout} from "@/features/auth/authActions";

export default function Nav() {
  const user = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()

  return (
    <>
      {user ?
        <header
          className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
          <div className="container flex h-14 items-center justify-between">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className=""
              width={100}
              height={24}
              priority
            />

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                  {user ?
                    <Link href="#" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle() + ' cursor-pointer'}
                                          onClick={() => dispatch(logout())}>
                        Logout
                      </NavigationMenuLink>
                    </Link> :
                    <Link href="/login" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Login
                      </NavigationMenuLink>
                    </Link>
                  }
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        : <></>}
    </>
  )
}
