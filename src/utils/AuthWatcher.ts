'use client';

import { useEffect } from 'react';
import { auth } from '@/config/firebase';
import { useAuthStore } from '@/stores';
import { useRouter } from 'next/navigation';
import config from '@/config';

const AuthWatcher = () => {
    const router = useRouter();
    const [setCurrentUser, getCurrentUser, signOut] = useAuthStore(state => [
        state.setCurrentUser,
        state.getCurrentUser,
        state.signOut,
    ]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const currentUser = {
                    email: user.email || '',
                    id: user.uid,
                };
                setCurrentUser(currentUser);
                document.cookie = `email=${user.email};path=/`;

                getCurrentUser().then(data => {
                    if (!data?.is_verified) {
                        router.push(config.routes.profileUpdate);
                    }
                });

                return;
            }

            signOut();
            document.cookie = 'email=;path=/';
        });

        return () => unsubscribe();
    }, []);

    return null;
};

export default AuthWatcher;
