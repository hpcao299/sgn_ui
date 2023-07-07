import { useAuthContext } from '@/contexts/AuthContext';
import React from 'react';

const ProfilePage: React.FC = () => {
    const { signOut } = useAuthContext();

    return (
        <div>
            <button onClick={signOut}>Sign out</button>
        </div>
    );
};

export default ProfilePage;
