import { HOT_GETBYPAGE, HOT_GETBYID, HOT_SUPPORT,HOT_UNSUPPORT } from '../actionType'

export function getByPage(data) {
    return {
        type: HOT_GETBYPAGE,
        data: data
    }
}

export function support(data) {
    return {
        type: HOT_SUPPORT,
        data: data
    }
}

export function unSupport(data) {
    return {
        type: HOT_UNSUPPORT,
        data:data
    }
}
