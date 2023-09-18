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
    createTime?: Record<string, unknown>;
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


// 响应接口
export interface MatchUserRes {
    code: number;
    data: {
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
    }[];
    description: string;
    message: string;
}


// 响应接口
export interface GetTeamByLoginIdRes {
    code: number;
    data: {
        avatarUrl: string;
        createTime: Record<string, unknown>;
        currentNum: number;
        description: string;
        expireTime: Record<string, unknown>;
        id: number;
        maxNum: number;
        members: {
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
        }[];
        name: string;
        status: number;
        userId: number;
    }[];
    description: string;
    message: string;
}


// 参数接口
export interface JoinTeamParams {
    password?: string;
    teamId?: number;
}

// 响应接口
export interface JoinTeamRes {
    code: number;
    data: boolean;
    description: string;
    message: string;
}

// 参数接口
export interface QuitTeamParams {
    teamId?: number;
}

// 响应接口
export interface QuitTeamRes {
    code: number;
    data: boolean;
    description: string;
    message: string;
}

// 参数接口
export interface DeleteTeamData {
    teamId?: number;
}

// 响应接口
export interface DeleteTeamRes {
    code: number;
    data: boolean;
    description: string;
    message: string;
}


// 参数接口
export interface UpdateTeamParams {
    description?: string;
    expireTime?: Record<string, unknown>;
    id?: number;
    maxNum?: number;
    name?: string;
    password?: string;
    status?: number;
}

// 响应接口
export interface UpdateTeamRes {
    code: number;
    data: boolean;
    description: string;
    message: string;
}


// 参数接口
export interface UserRegisterParams {
    checkPassword: string;
    userAccount: string;
    userPassword: string;
}

// 响应接口
export interface UserRegisterRes {
    code: number;
    data: number;
    description: string;
    message: string;
}


// 参数接口
export interface UploadAvatarParams {
    avatar: FormData
}

// 响应接口
export interface UploadAvatarRes {
    code: number;
    data: string;
    description: string;
    message: string;
}

// 响应接口
export interface RecommendUsersDistanceRes {
    avatarUrl: string;
    distance: Record<string, unknown>;
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
}
