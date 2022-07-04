import Group from "./Group";

interface User {
    id?: number;
    group: Group;
    name: string;
    email: string;
    is_admin: boolean;
    created_at?: Date | null | undefined;
    updated_at?: Date | null | undefined;
}

export interface Register {
    email: string;
    password: string;
    is_admin: boolean;
}

export interface Login {
    email: string;
    password: string;
}

export default User;
