import request from '@/utils/request.js'

export default{
    getTeacherListPage(params){
        return request({
            url: '/eduservice/teacher/pageListTeacherSearch',
            method: 'get',
            params
        })
    },
    deleteTeacherId(params){
        return request.JSON_POST('/eduservice/teacher/removeTeacherById',params)
    },
    addTeacher(params){
        return request({
            url: '/eduservice/teacher/addTeacher',
            method: 'post',
            params
        })
    }

}