import { StackedLayout } from "@/components/stacked-layout";
import TopNav from "./top-nav";
import MobileNav from "./mobile-nav";
import Providers from "../providers";

const navItems: { label: string; url: string }[] = [
  { label: "Scheduler", url: "/scheduler" },
];

interface LayoutProps {
  children: Readonly<React.ReactNode>;
}

export interface NavbarProps {
  navItems: { label: string; url: string }[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Providers>
      <StackedLayout
        navbar={<TopNav navItems={navItems} />}
        sidebar={<MobileNav navItems={navItems} />}
      >
        {children}
      </StackedLayout>
    </Providers>
  );
}
