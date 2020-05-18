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
    addOrUpdateTeacher(params){
        return request.JSON_POST('/eduservice/teacher/addOrUpdateTeacher',params)
    },
    getTeacherInfo(params){
        return request({
            url: '/eduservice/teacher/getTeacherById',
            method: 'get',
            params
        })
    }

}