'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      router.push('/user/studio/content/video');
    }
  }, [router]);

  return null; // Optional: You can return a loading spinner if needed
};

export default Page;