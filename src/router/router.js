import pwd from '../components/PwdReset.vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegisterPersonal from '../components/RegisterPersonal'
import ServiceTxt from '../components/ServiceTxt'
import WorkingData from '../components/WorkingData'
import UserInfo from '../components/UserInfo'
import MySalary from '../components/MySalary'
import Setting from '../components/Setting'
import MyTeaching from '../components/MyTeaching'

const routes=[
    {path:'/pwdreset',component:pwd},
    {path:'/',name:'Helloworld',component:HelloWorld},
    {path:'/registerpersonal',component:RegisterPersonal},
    {path:'/servicetxt',component:ServiceTxt},
    {path:'/workingdata',component:WorkingData},
    {path:'/userinfo',component:UserInfo},
    {path:'/mysalary',component:MySalary},
    {path:'/setting',component:Setting},
    {path:'/myteaching',component:MyTeaching}
]

const router=new VueRouter({routes})

export default router