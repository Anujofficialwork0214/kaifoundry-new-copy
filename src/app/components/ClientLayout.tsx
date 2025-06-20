"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Hide Navbar only on /CareersScreen/JobApplication
  const hideNavbarPaths = ["/careers-screen/job-application","/contact-us"];

  return (
    <>
      {!hideNavbarPaths.includes(pathname) && <Navbar />}
      {children}
    </>
  );
}
