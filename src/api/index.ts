import request from "./request";
import {
    AddTeamParams,
    AddTeamRes,
    DeleteTeamData,
    DeleteTeamRes,
    GetCurrentLoginUserRes,
    GetListTeamParams,
    GetListTeamRes,
    GetTeamByLoginIdRes,
    JoinTeamParams,
    JoinTeamRes,
    MatchUserRes,
    QuitTeamParams,
    QuitTeamRes,
    RecommendUsersRes,
    SearchUsersByTagsRes,
    UpdateTeamParams,
    UpdateTeamRes,
    UpdateUserByIdParams,
    UpdateUserByIdRes,
    UploadAvatarParams,
    UploadAvatarRes,
    UserLoginRes,
    UserOutLoginRes,
    UserRegisterParams,
    UserRegisterRes
} from "./resultType";


/**
 * searchUsersByTags
 * @param {string} currentPage currentPage
 * @param {string} pageSize pageSize
 * @param {string} tags tags
 * @returns
 */
export function searchUsersByTags(currentPage: number, pageSize: number, tags: []): Promise<SearchUsersByTagsRes> {
    return request.get(`/user/searchUsersByTagsWithPage?currentPage=${currentPage}&pageSize=${pageSize}&tags=${tags}`);
}

/**
 * getCurrentLoginUser
 * @returns
 */
export function getCurrentLoginUser(): Promise<GetCurrentLoginUserRes> {
    return request.get(`/user/current`);
}


/**
 * 注册新用户
 * @param {object} params 注册请求数据
 * @param {string} params.checkPassword 确认密码
 * @param {string} params.userAccount 账户
 * @param {string} params.userPassword 密码
 * @returns
 */
export function userRegister(params: UserRegisterParams): Promise<UserRegisterRes> {
    return request.post(`/user/register`, params);
}

/**
 * updateUserById
 * @param {object} params user
 * @param {string} params.avatarUrl
 * @param {object} params.createTime
 * @param {string} params.email
 * @param {number} params.gender
 * @param {number} params.id
 * @param {number} params.isDelete
 * @param {string} params.phone
 * @param {string} params.profile
 * @param {string} params.tags
 * @param {object} params.updateTime
 * @param {string} params.userAccount
 * @param {string} params.userPassword
 * @param {number} params.userRole
 * @param {number} params.userStatus
 * @param {string} params.username
 * @returns
 */
export function updateUserById(params: UpdateUserByIdParams): Promise<UpdateUserByIdRes> {
    return request.put(`/user/update`, params);
}


// 参数接口
export interface UserLoginParams {
    userAccount?: string;
    userPassword?: string;
}

/**
 * userLogin
 * @param {object} params userLoginRequest
 * @param {string} params.userAccount
 * @param {string} params.userPassword
 * @returns
 */
export function userLogin(params: UserLoginParams): Promise<UserLoginRes> {
    return request.post(`/user/login`, params);
}


/**
 * userOutLogin
 * @returns
 */
export function userOutLogin(): Promise<UserOutLoginRes> {
    return request.post(`/user/out-login`);
}


/**
 * recommendUsers
 * @param {string} currentPage currentPage
 * @param {string} pageSize pageSize
 * @returns
 */
export function recommendUsers(currentPage: number, pageSize: number): Promise<RecommendUsersRes> {
    return request.get(`/user/recommend?currentPage=${currentPage}&pageSize=${pageSize}`);
}


/**
 * getListTeam
 * @returns
 * @param params
 */
export function getListTeam(params?: GetListTeamParams): Promise<GetListTeamRes> {
    return request({
        url: '/team/list',
        method: 'get',
        params
    });
}


/**
 * addTeam
 * @param {object} params teamAddRequest
 * @param {string} params.description
 * @param {object} params.expireTime 过期时间,格式:yyyy-MM-dd
 * @param {number} params.maxNum
 * @param {string} params.name 队伍名称
 * @param {string} params.password
 * @param {number} params.status
 * @param {number} params.userId
 * @returns
 */
export function addTeam(params: AddTeamParams): Promise<AddTeamRes> {
    return request.post(`/team/add`, params);
}


/**
 * matchUser
 * @param {string} num num
 * @returns
 */
export function matchUser(num: number): Promise<MatchUserRes> {
    return request.get(`/user/match?num=${num}`);
}


/**
 * getTeamByLoginId
 * @returns
 */
export function getTeamByLoginId(): Promise<GetTeamByLoginIdRes> {
    return request.get(`/team/get-by-id`);
}


/**
 * joinTeam
 * @param {object} params teamJoinRequest
 * @param {string} params.password
 * @param {number} params.teamId
 * @returns
 */
export function joinTeam(params: JoinTeamParams): Promise<JoinTeamRes> {
    return request.post(`/team/join`, params);
}


/**
 * quitTeam
 * @param {object} params teamQuitRequest
 * @param {number} params.teamId
 * @returns
 */
export function quitTeam(params: QuitTeamParams): Promise<QuitTeamRes> {
    return request.post(`/team/quit`, params);
}


/**
 * deleteTeam
 * @returns
 */
export function deleteTeam(data: DeleteTeamData): Promise<DeleteTeamRes> {
    return request({url: '/team/delete', method: 'DELETE', data});
}


/**
 * updateTeam
 * @param {object} params teamUpdateRequest
 * @param {string} params.description
 * @param {object} params.expireTime
 * @param {number} params.id
 * @param {number} params.maxNum
 * @param {string} params.name
 * @param {string} params.password
 * @param {number} params.status
 * @returns
 */
export function updateTeam(params: UpdateTeamParams): Promise<UpdateTeamRes> {
    return request.put(`/team/update`, params);
}


/**
 * 上传文件
 * @returns
 */
export function uploadAvatar(params: UploadAvatarParams): Promise<UploadAvatarRes> {
    return request.post(`/upload/avatar`, params, {headers: {"Content-Type": "multipart/form-data"}});
}


// 参数接口

// 响应接口
export interface UploadTeamAvatarRes {
    code: number;
    data: string;
    description: string;
    message: string;
}

/**
 * 上传队伍文件
 * @returns
 */
export function uploadTeamAvatar(params: FormData): Promise<UploadTeamAvatarRes> {
    return request.post(`/upload`, params, {headers: {"Content-Type": "multipart/form-data"}});
}