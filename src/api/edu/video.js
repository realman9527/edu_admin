import request from '@/utils/request'
export default {

    //添加小节
    addVideo(params) {
        return request.JSON_POST('/eduservice/video/addVideo',params)
    },
    
    //删除小节
    deleteVideo(params) {
        return request.JSON_POST('/eduservice/video/deleteVideo',params)
    },

    //删除视频
    deleteAliyunvod(id) {
        return request.JSON_POST('/eduservice/video/removeAlyVideo',params)
    }
}