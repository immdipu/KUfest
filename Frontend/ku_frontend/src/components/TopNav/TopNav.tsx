/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import UserAvatar from "./Avatar/UserAvatar";
import { useAppSelector } from "@/redux/hooks";
import { AutoLogin, LoggedIn } from "@/redux/slice/authSlice";
import { useAppDispatch } from "@/redux/hooks";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Explore Places",
    href: "/#places",
    description:
      "Explore places in Nepal. Find the best places to visit in Nepal. Discover the best of Nepal.",
  },
  {
    title: "Assistance on Demand",
    href: "/assistances",
    description:
      "On-Demand Help and Support - Instantly connect with professionals for daily tasks and emergencies.",
  },
  {
    title: "Accessible Transportation",
    href: "/transportation",
    description:
      "Seamless Travel for All - Find and book wheelchair-accessible transportation, ensuring safe and convenient journeys.",
  },
  {
    title: "Professional Guides",
    href: "/assistances",
    description:
      "Connecting You to Experts - Easily connect with professionals for essential services and tourist guides.",
  },
];

const TopNav = () => {
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(AutoLogin());
      const data = localStorage.getItem("data")
        ? JSON.parse(localStorage.getItem("data")!)
        : null;
      if (data) {
        dispatch(LoggedIn(data));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="z-50 h-16 sticky top-0 bg-neutral-200">
      <div className="h-full flex w-full items-center bg-neutral-200 px-7">
        <div className="">
          <Link
            href={"/"}
            className="   text-neutral-900 font-bold text-xl px-5  py-2 rounded-full "
          >
            <img
              src="/assests/logo.jpg"
              alt="img"
              className=" img-blend w-30 h-10"
            />
          </Link>
        </div>
        <div className="flex border-2  flex-1 justify-center">
          <div className="h-fit">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-base">
                    Our Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="p-2">
            <Link
              href={"//#places"}
              className="text-base hover:bg-slate-100 transition-colors duration-150 ease-linear py-2 px-3 rounded-md font-medium"
            >
              Explore Places
            </Link>
          </div>
          <div className="p-2">
            <Link
              href={"/aboutus"}
              className="text-base font-medium hover:bg-slate-100 transition-colors duration-150 ease-linear py-2 px-3 rounded-md"
            >
              About us
            </Link>
          </div>
        </div>
        <div className="mr-9">
          {user.isUserAuthenticated ? (
            <UserAvatar />
          ) : (
            <Link
              href={"/login"}
              className="bg-neutral-700 hover:bg-neutral-900  text-neutral-100 px-5  py-2 rounded-full "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="hover:bg-neutral-50 hover:shadow-md transition-all duration-150 ease-linear">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm text-neutral-500 pt-1 leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
