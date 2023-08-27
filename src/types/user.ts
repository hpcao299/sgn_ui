export interface UserDetailsDto {
    phone: string;
    name: string;
}

export interface RegisterUserDto {
    email: string;
}

export interface CurrentUser {
    id?: string;
    email?: string;
    name?: string;
    phone?: string;
    is_verified?: number;
    is_admin?: number;
    num_items?: number;
}

export interface PotentialUser {
    id: string;
    email: string;
    name: string;
    phone: string;
    total_bought: number;
    total_orders: number;
}
