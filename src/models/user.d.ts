/**
 * 用户类别
 */
export type UserType = {
    id?: number;
    username?: string;
    userAccount?: string;
    avatarUrl?: string;
    gender?: number;
    phone?: string;
    email?: string;
    //个人简介
    profile?: string;
    userStatus?: number;
    userRole?: number;
    tags?: string[];
    createTime?: Date;
};