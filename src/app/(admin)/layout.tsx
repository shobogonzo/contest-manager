"use client";

import Providers from "@/app/providers";
import { SidebarLayout } from "@/components/sidebar-layout";
import SidebarNav from "./sidebar-nav";
import MobileNav from "./mobile-nav";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <SidebarLayout sidebar={<SidebarNav />} navbar={<MobileNav />}>
        {children}
      </SidebarLayout>
    </Providers>
  );
}

export default Layout;
