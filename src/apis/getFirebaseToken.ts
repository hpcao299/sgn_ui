import { auth } from '@/config/firebase';

const getFirebaseToken = async () => {
    const currentUser = auth.currentUser;
    if (currentUser) return currentUser.getIdToken();

    // User has logged in but application is loading
    return new Promise((resolve, reject) => {
        const waitTimer = setTimeout(() => reject(null), 1000);

        const unRegisterAuthObserver = auth.onAuthStateChanged(async user => {
            if (!user) reject(null);

            const token = await user?.getIdToken();
            resolve(token);

            unRegisterAuthObserver();
            clearTimeout(waitTimer);
        });
    });
};

export default getFirebaseToken;
