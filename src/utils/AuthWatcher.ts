import config from '@/config';
import { auth } from '@/config/firebase';
import { useAuthContext } from '@/contexts/AuthContext';
import { CurrentUser } from '@/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function AuthWatcher() {
    const { getCurrentUser } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            if (user) {
                const currentUser: CurrentUser | null = await getCurrentUser();

                // If user has logged in but user isn't been verified yet
                if (currentUser && !currentUser.is_verified) {
                    navigate(config.routes.profileUpdate);
                }

                localStorage.setItem('auth', JSON.stringify({ isSignedIn: true }));
                return;
            }

            localStorage.setItem('auth', JSON.stringify({ isSignedIn: false }));
        });

        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}
