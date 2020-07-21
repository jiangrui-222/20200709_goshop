import Vue from 'vue';
const state ={
    // token: window.sessionStorage.getItem('token'), // 初始化时用sessionStore.getItem('token'),刷新页面就无需重新登录
    cartFoods: [], // 购物车中食物的列表
}

const getters={
    totalCount(state){
        return state.cartFoods.reduce((preTotal, food) => {
          return  preTotal + food.count
        }, 0);
    },
    totalPrice(state){
        return state.cartFoods.reduce((prePrice,food) => {
           return prePrice + food.count*food.price
        },0)
    }
}

const mutations={
    //加 购物车列表
    uppCartNum :(state,item)=>{
        //console.log(item) //food内容
        if(!item.count) { // 第一次增加
            // food.count = 1  // 新增属性(没有数据绑定)
            /*
            对象
            属性名
            属性值
             */
            Vue.set(item, 'count', 1) // 让新增的属性也有数据绑定
            // 将food添加到cartFoods中
            state.cartFoods.push(item)
        }else{
            item.count++
        }
        console.log(state.cartFoods)
    },
    //减
    downCartNum: (state,item)=>{
        if(item.count){
            item.count--
            if(item.count===0){
                // 将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(item), 1)
            }
        }
    },
    //清空
    clearCarts: (state)=>{
        // 清除food中的count
        state.cartFoods.forEach(food => food.count = 0)
        // 移除购物车中所有购物项
        state.cartFoods = []
    }

}

const actions={
    //更新food中 count 数量
    updateFoodCount(context,{isAdd,food}){
        // console.log(isAdd,food) //true,food具体
        if(isAdd){
            context.commit('uppCartNum',food)
        }else{
            context.commit('downCartNum',food)
        }

        // //判断用户是否登录
        // if(state.token){
        //     //已登录
        //     let updateCartData = {
        //         username: state.username,
        //         token: state.token,
        //         cartGoods: item
        //       }
        //     //后台发请求，更新 购物车
        // }else{
        //     //未登录，将信息保存到本地
        //      localStorage.setItem('cartNum',JSON.stringify(item))
        // }
    },
    //
    clearCart(context){
        context.commit('clearCarts')
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}