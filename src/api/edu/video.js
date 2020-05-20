import request from '@/utils/request'
export default {

    //添加小节
    addVideo(video) {
        return request.JSON_POST('/eduservice/video/addVideo',params)
    },
    
    //删除小节
    deleteVideo(id) {
        return request.JSON_POST('/eduservice/video/deleteVideo',params)
    },
}