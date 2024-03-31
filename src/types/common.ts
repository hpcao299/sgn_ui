export interface Route {
    path: string;
    component: React.FC;
    layout?: React.FC;
}

export interface FirebaseError {
    code: string;
    message: string;
}

export interface ErrorResponse {
    code: number;
    message: string;
    errorCode?: string;
}

export interface ResponseData<T> {
    data: T;
}

export interface PaginateResponseData<T> {
    data: T;
    total_pages: number;
    current_page: number;
}
