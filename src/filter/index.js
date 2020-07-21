import Vue from 'vue';
import moment from 'moment'
// import format from 'date-fns/format';


//定义时间格式，过滤器
Vue.filter('dateFormat',function(value , formatStr='YYYY-MM-DD HH:mm:ss'){
    return moment(value).format(formatStr)
    // return format(value,formatStr)

})