// 响应接口

export interface SearchUsersByTagsRes {
    code: number;
    data: {
        current: number;
        pages: number;
        records: {
            avatarUrl: string;
            createTime: Record<string, unknown>;
            email: string;
            gender: number;
            id: number;
            isDelete: number;
            phone: string;
            profile: string;
            tags: string;
            updateTime: Record<string, unknown>;
            userAccount: string;
            userPassword: string;
            userRole: number;
            userStatus: number;
            username: string;
        }[];
        size: number;
        total: number;
    };
    description: string;
    message: string;
}


export interface GetCurrentLoginUserRes {
    code: number;
    data: {
        avatarUrl: string;
        createTime: Record<string, unknown>;
        email: string;
        gender: number;
        id: number;
        isDelete: number;
        phone: string;
        profile: string;
        tags: string;
        updateTime: Record<string, unknown>;
        userAccount: string;
        userPassword: string;
        userRole: number;
        userStatus: number;
        username: string;
    };
    description: string;
    message: string;
}


// 参数接口
export interface UpdateUserByIdParams {
    avatarUrl?: string;
    email?: string;
    gender?: number;
    id?: number;
    isDelete?: number;
    phone?: string;
    profile?: string;
    tags?: string;
    updateTime?: Record<string, unknown>;
    userAccount?: string;
    userPassword?: string;
    userRole?: number;
    userStatus?: number;
    username?: string;
}

// 响应接口
export interface UpdateUserByIdRes {
    code: number;
    data: string;
    description: string;
    message: string;
}


// 响应接口
export interface UserLoginRes {
    code: number;
    data: {
        avatarUrl: string;
        createTime: Record<string, unknown>;
        email: string;
        gender: number;
        id: number;
        isDelete: number;
        phone: string;
        profile: string;
        tags: string;
        updateTime: Record<string, unknown>;
        userAccount: string;
        userPassword: string;
        userRole: number;
        userStatus: number;
        username: string;
    };
    description: string;
    message: string;
}


// 响应接口
export interface UserOutLoginRes {
    code: number;
    data: string;
    description: string;
    message: string;
}
