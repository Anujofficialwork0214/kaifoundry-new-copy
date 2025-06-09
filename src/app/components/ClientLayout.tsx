"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Log the current pathname (optional for debugging)
  console.log("Current Pathname:", pathname);

  // Hide Navbar only on /CareersScreen/JobApplication
  const hideNavbarPaths = ["/CareersScreen/JobApplication"];

  return (
    <>
      {!hideNavbarPaths.includes(pathname) && <Navbar />}
      {children}
    </>
  );
}
