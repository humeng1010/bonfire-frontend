/**
 * 处理本地url和网络url
 * @param value
 */
export const computedAvatarUrl = (value) => {
    return value.startsWith('http') ? value : `/api/common/download?name=${value}`
}
