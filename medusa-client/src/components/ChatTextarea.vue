<template>
    <Input  type="textarea" placeholder=""  class="chat-txt" @keyup.enter.native="sendMessage"  v-model="message"/>
</template>
<script>
    import { Input } from "view-design"
    import styles from './styles.scss';
    export default {
        data () {
            return {
                message: ''
            }
        },
        components: {
            Input
        },
        methods : {
            async sendMessage(){ 
                const { state = {} } = this.$store 
                const { enterCode, userDatas, currentRoomData } = state  
                if(this.message){
                    const message = {
                        roomName: currentRoomData.roomName,
                        userName: userDatas.userName,
                        userId: userDatas._id,
                        roomId: currentRoomData._id,
                        message : this.message,
                    }
                    const response = await this.$socket.emit('chat',message);
                    this.$store.dispatch("ADD_MESSAGE", message);
                    this.message = "";
                }
            },
        }
    }
</script>
