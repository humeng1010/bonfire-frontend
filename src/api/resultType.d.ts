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


// 响应接口
export interface RecommendUsersRes {
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

// 请求接口
export interface GetListTeamParams {
    currentPage?: number,
    description?: string,
    id?: number,
    maxNum?: number,
    name?: string,
    pageSize?: number,
    searchText?: string,
    status?: number,
    userId?: number
}

// 响应接口
export interface GetListTeamRes {
    code: number;
    data: {
        createUser: {
            avatarUrl: string;
            email: string;
            gender: number;
            id: number;
            phone: string;
            profile: string;
            tags: string;
            userAccount: string;
            userRole: number;
            userStatus: number;
            username: string;
        };
        description: string;
        expireTime: Record<string, unknown>;
        id: number;
        maxNum: number;
        name: string;
        status: number;
        updateTime: Record<string, unknown>;
        userId: number;
    }[];
    description: string;
    message: string;
}


// 参数接口
export interface AddTeamParams {
    description?: string;
    expireTime?: Record<string, unknown>;
    maxNum?: number;
    name?: string;
    password?: string;
    status?: number;
    userId?: number;
}

// 响应接口
export interface AddTeamRes {
    code: number;
    data: number;
    description: string;
    message: string;
}
