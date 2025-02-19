"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
  
    const isAuthenticated = false;

    if (!isAuthenticated) {
      router.push("/signIn");
    }
  }, [router]);

  return (
    <div>
      Home Page
    </div>
  );
}
