export interface Route {
    path: string;
    component: React.FC;
    layout?: React.FC;
}
