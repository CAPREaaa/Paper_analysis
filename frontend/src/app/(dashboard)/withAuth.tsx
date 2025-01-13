import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: React.ComponentType) => {
  
    // eslint-disable-next-line react/display-name
    return (props: any) => {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/signin');
            }
        }, [router])

        return <WrappedComponent {...props} />
    }
}

export default withAuth;