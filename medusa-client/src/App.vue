<style scoped>
    
</style>
<template>
    <div class="layout">
        <span class="bg-layout"><img src="./assets/1.jpg"></span>
        <Layout>
            <Content :style="{ padding: '200px 100px 0' }" class="content-layout">
                <Card class="app-card">
                    <EnterHandle v-if="!USERDATAS.userName" />
                    <ChatBox v-if="USERDATAS.userName"  />
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { Card, Content, Layout } from "view-design";
    import EnterHandle from "./components/EnterHandle";
    import ChatBox from "./components/ChatBox";
    import styles from './app.scss';
    export default {
         components: {
            Card,
            Content,
            Layout,
            EnterHandle,
            ChatBox
        },
        computed:{
            ...mapGetters(['USERDATAS'])
        },
        mounted(){
            this.$store.dispatch("GET_ROOM");
        },
        sockets: {
            connect: function () {
                console.log('socket connected', 1111111111)
            },
            chat: function (data) {
                const { state = {} } = this.$store
                const { currentRoomData } = state
                if(currentRoomData._id === data.roomId ) {
                    this.$store.dispatch("ADD_MESSAGE",data)
                }else {
                    console.log(999999)
                    this.$store.dispatch("SET_UNREAD",data)
                }
            }
        },
    };
</script>