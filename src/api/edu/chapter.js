import request from '@/utils/request'
export default {
    //1 根据课程id获取章节和小节数据列表
    getAllChapterVideo(params) {
        return request({
            url: '/eduservice/chapter/getChapterVideo/',
            method: 'get',
            params
          })
    },
    //添加章节
    addChapter(params) {
        return request.JSON_POST('/eduservice/chapter/addOrUpdateChapter',params)
    },
    //根据id查询章节
    getChapter(params) {
        return request({
            url: '/eduservice/chapter/getChapterInfo/',
            method: 'get',
            params
          })
    },
    //删除章节
    deleteChapter(params) {
        return request.JSON_POST('/eduservice/chapter/deleteChapter',params)
        
    },
}