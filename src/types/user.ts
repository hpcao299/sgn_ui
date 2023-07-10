export interface UserDetailsDto {
    phone: string;
    name: string;
}

export interface RegisterUserDto {
    email: string;
}

export interface CurrentUser {
    id: string;
    email: string;
    name?: string;
    phone?: string;
    is_verified?: number;
    num_items?: number;
}
