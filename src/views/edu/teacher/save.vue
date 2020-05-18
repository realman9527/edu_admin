<template>
    <div class="app-container">
    讲师表单
     <el-form label-width="120px">
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name"/>
      </el-form-item>
      <el-form-item label="讲师排序">
        <el-input-number v-model="teacher.sort" controls-position="right" :min="0"/>
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <el-option :value="1" label="高级讲师"/>
          <el-option :value="2" label="首席讲师"/>
        </el-select>
      </el-form-item>
      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career"/>
      </el-form-item>
      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea"/>
      </el-form-item>

      <!-- 讲师头像：TODO -->

      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
import teacherApi from '@/api/edu/teacher'
export default {
    data(){
        return{
            teacher:{
                id: '',
                name: '',
                sort: 0,
                level: 1,
                career: '',
                intro: '',
                avatar: ''
            },
            saveBtnDisabled:false  // 保存按钮是否禁用,
        }
    },
    created(){
      this.init()
    },
    watch: {  //监听
      $route(to, from) { //路由变化方式，路由发生变化，方法就会执行
        this.init()
      }
    },
    methods:{
        init() {
          console.log(this.$route.params.id)
          //判断路径有id值,做修改
          if(this.$route.params && this.$route.params.id) {
              //从路径获取id值
              const id = this.$route.params.id
              //调用根据id查询的方法
              this.getInfo(id)
          } else { //路径没有id值，做添加
            //清空表单
            this.teacher = {}
          }
        },
        getInfo(id){
          let params = {
            "id": id
          }
          teacherApi.getTeacherInfo(params)
            .then(reponse => {
              this.teacher = reponse.obj
            })
        },
        saveOrUpdate(){
          this.saveTeacher()
        },
        saveTeacher(){
          this.saveBtnDisabled = true
          let params = this.teacher
          teacherApi.addOrUpdateTeacher(params)
              .then(reponse => {
                  //提示信息
                  this.$message({
                      type: 'success',
                      message: '添加成功!'
                  });
                  this.saveBtnDisabled = false
                  //回到列表页面 路由跳转
                  this.$router.push({path:'/teacher/list'})
              })
              .catch(error =>{
                  this.saveBtnDisabled = false
              })
        }
    }
}
</script>