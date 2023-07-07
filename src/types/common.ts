export interface Route {
    path: string;
    component: React.FC;
    layout?: React.FC;
}

export interface FirebaseError {
    code: string;
    message: string;
}
