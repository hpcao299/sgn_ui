import config from '@/config';
import { useAuthContext } from '@/contexts/AuthContext';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
    const { signOut } = useAuthContext();
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut().then(() => navigate(config.routes.home));
    };

    return (
        <div>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    );
};

export default ProfilePage;
