import request from "./request";
import {
    GetCurrentLoginUserRes,
    RecommendUsersRes,
    SearchUsersByTagsRes,
    UpdateUserByIdRes,
    UserLoginRes,
    UserOutLoginRes
} from "./resultType";
import {LocationQueryValue} from "vue-router";


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
export function updateUserById(params: { id: string | LocationQueryValue[]; username: string | LocationQueryValue[] }): Promise<UpdateUserByIdRes> {
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