import {reqShopGoods, reqShopInfo, reqShopRatings} from '../../api';

const state ={
    goods: [], // 商品列表
    ratings: [], // 商家评价列表
    info: {}, // 商家信息
    cartFoods: [], // 购物车中食物的列表

}
const getters ={
    positiveSize(state){
        return state.ratings.reduce((preTotal, rating) => {
            return preTotal + (rating.rateType===0 ? 1 : 0)
        }, 0);
    }
}
const mutations ={
    //Mutation：必须同步执行
    // 任何时候改变state的状态都通过提交 mutation 来改变
    // 里面可以定义多个函数，当触发这个函数就会改变state状态

    receiveInfo: (state,item) =>{
        //接收商家信息
        state.info = item
        // console.log('info',state.info)

    },
    
    receiveRatings: (state,item) =>{
        //接收商家评价数组
        state.ratings =item
        console.log('ratings',item)

    },

    receiveGoods: (state,item)=>{
        // 接收商品数组
        state.goods = item
        //  console.log('good',state.goods)

    },
    
}
const actions ={
    //Action：可以异步

    async getShopInfo(context, item){
        const result =await  reqShopInfo()
        const info = result.info
        // console.log('info',info)
        context.commit('receiveInfo', info)
    },

    getShopRatings(context, callback){
        reqShopRatings().then( res => {
            const ratings = res.ratings
            // console.log(res)
            context.commit('receiveRatings', ratings)
        }).catch(error =>{
            console.log(error)
        })
        callback()
    },

    async getShopGoods(context, callback){
        const result = await reqShopGoods()
        const goods = result.goods
        context.commit('receiveGoods', goods)
        //scroll数据更新了
        callback()
    },


    
}

export default {
    state,
    getters,
    mutations,
    actions
}
