'use client';
import { useEffect } from 'react';
import { useRouter , useParams} from 'next/navigation';

const UserPage = () => {
    const router = useRouter();
    const { user_id } = useParams();
    useEffect(() => {
        router.push(`/${user_id}/home`);
    }, [router]);

    return null;
};

export default UserPage;