"use client";

import Link from "next/link";
import React from "react";
import { Twitter, Facebook, Youtube, Linkedin } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { components } from "@/lib/constants";
import Image from "next/image";

const Header = () => {
  return (
    <header className="headnav w-full flex flex-col gap-4 items-center justify-center py-4 bg-white z-50">
      <section
        id="links"
        className="w-full md:w-[70%] border-b-[1px] border-spacing-3 border-[#D4D7DD] flex flex-wrap items-center justify-between px-4 md:px-0"
      >
        <div className="flex items-center gap-4 pb-4">
          <Link
            className="text-[12px] md:text-[14px] font-light text-[#41444B] uppercase"
            href={""}
          >
            Support
          </Link>
          <Link
            className="text-[12px] md:text-[14px] font-light text-[#41444B] uppercase"
            href={""}
          >
            Partners
          </Link>
          <Link
            className="text-[12px] md:text-[14px] font-light text-[#41444B] uppercase"
            href={""}
          >
            Careers
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href={""} className="text-[#001ED3] p-1">
            <Twitter width={15} height={15} />
          </Link>
          <Link href={""} className="text-[#001ED3] p-1">
            <Facebook width={15} height={15} />
          </Link>
          <Link href={""} className="text-[#001ED3] p-1">
            <Youtube width={15} height={15} />
          </Link>
          <Link href={""} className="text-[#001ED3] p-1">
            <Linkedin width={15} height={15} />
          </Link>
        </div>
      </section>

      <section
        id="navigation"
        className="w-full md:w-[70%] flex items-center justify-between px-4 md:px-0"
      >
        <div className="text-bold">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        </div>
        <div className="hidden md:flex">
          <NavigationMenu className="z-[100]">
            <NavigationMenuList>
              {/* home */}
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="z-[110] absolute top-full">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Image
                            src={"/images/img.png"}
                            alt={"img"}
                            width={100}
                            height={200}
                          />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* pages */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                <NavigationMenuContent className="z-[110] absolute top-full">
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
              {/* news */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>News</NavigationMenuTrigger>
                <NavigationMenuContent className="z-[110] absolute top-full">
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
              {/* contacts */}
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contacts
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
