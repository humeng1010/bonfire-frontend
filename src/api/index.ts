import request from "./request";
import {GetCurrentLoginUserRes, SearchUsersByTagsRes} from "./resultType";


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