import request from '@/utils/request'
export default {
    //1 添加课程信息
    addCourseInfo(params) {
          return request.JSON_POST('/eduservice/course/addCourseInfo',params)
    },
    //2 查询所有讲师
    getListTeacher() {
        return request({
            url: '/eduservice/teacher/findAll',
            method: 'get'
          })
    },
    //根据课程id查询课程基本信息
    getCourseInfoId(params) {
        return request({
            url: '/eduservice/course/getCourseInfo/',
            method: 'get',
            params
          })
    },
    //修改课程信息
    updateCourseInfo(params) {
          return request.JSON_POST('/eduservice/course/updateCourseInfo',params)
    },
    //课程确认信息显示
    getPublihCourseInfo(params) {
        return request({
            url: '/eduservice/course/getPublishCourseInfo/',
            method: 'get',
            params
        })
    },
    //课程最终发布
    publihCourse(params) {
        return request.JSON_POST('/eduservice/course/publishCourse',params)
    },
    //TODO 课程列表
    //课程最终发布
    getListCourse(params) {
        return request({
            url: '/eduservice/course/getCourseList',
            method: 'get',
            params
        })
    }
}
