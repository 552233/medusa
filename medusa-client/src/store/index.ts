import Vue from "vue";
import Vuex from "vuex";
import Axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    enterCode: '' as string,
    currentRoomData: '' as string,
    userDatas: {} as any,
    messageDatas: [] as Array<object>,
    roomDatas:[] as Array<object>,
    unreadDatas: [] as any
  },
  getters: {
    ENTERCODE : state => {
        return state.enterCode
    },
    USERDATAS : state => {
        return state.userDatas
    },
    MESSAGEDATAS : state => {
        return state.messageDatas
    },
    CURRENTROOMDATA : state => {
        
        return state.currentRoomData
    },
    ROOMDATAS : state => {
        return state.roomDatas
    },
    UNREADDATAS : state => {
        return state.unreadDatas
    },
  },
  mutations: {
    JION_IN: (state,payload)=> {
        state.userDatas = payload
    },
    LOGIN_IN: (state,payload)=> {
        state.userDatas = payload
    },
    SET_ROOM: (state,payload)=> {
        state.currentRoomData = payload
        state.messageDatas = []
        state.unreadDatas[payload._id] = 0
    },
    SET_MESSAGE_DATAS: (state,payload) => {
        state.messageDatas.push(...payload);
    },
    SET_ROOM_DATAS: (state,payload) => {
        state.roomDatas.push(...payload);
    },
    SET_UNREAD:  (state,payload) => {
        const { unreadDatas } = state
        state.unreadDatas[payload.roomId] = unreadDatas[payload.roomId] ? unreadDatas[payload.roomId] + 1 : 1
        state.roomDatas=[...state.roomDatas]
    },
  },
  actions: {
    JION_IN: async (context,payload)=> {
        const {data} = await Axios.post(`http://localhost:5000/user`, payload);
        context.commit('JION_IN', data)
    },
    LOGIN_IN: async (context,payload)=> {
        context.commit('LOGIN_IN', payload)
       
    },
    SET_ROOM: (context,payload)=> {
        context.commit('SET_ROOM', payload)
    },
    ADD_ROOM: async (context,payload)=> {
        await Axios.post('http://localhost:5000/room', payload);
        context.commit('SET_ROOM_DATAS', [payload])
    },
    GET_MESSAGE : async (context,payload) => {
        const {data} = await Axios.get(`http://localhost:5000/chat?roomId=${payload.roomId}`);
        context.commit("SET_MESSAGE_DATAS",data);
    },
    GET_ROOM : async (context,payload) => {
        const {data} = await Axios.get('http://localhost:5000/room');
        context.commit("SET_ROOM_DATAS",data);
    },
    ADD_MESSAGE: (context,payload)=> {
        context.commit('SET_MESSAGE_DATAS', [payload])
    },
    SET_UNREAD: (context,payload) => {
        context.commit('SET_UNREAD', payload)
    }
    
  },
  modules: {}
});
