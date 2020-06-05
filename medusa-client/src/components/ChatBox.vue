

<template>
    <div class="chat-split">
        <Split v-model="split3" :min="min" :max="max">
            <div slot="right" class="chat-split-pane no-padding">
                <Split v-model="split4" mode="vertical" :min="min" :max="max" class="chat-top">
                    <div slot="top" class="chat-split-pane "  >
                        <header class="chat-header">{{CURRENTROOMDATA.roomName}}</header>
                        <ChatMessage /> 
                    </div>
                    <div slot="bottom" class="chat-split-pane chat-textarea">
                        <ChatTextarea />
                    </div>
                </Split>
            </div>
            <div slot="left" class="chat-split-pane">
                <ChatRoom />
            </div>
        </Split>
    </div>
</template>
<script>
    import { Split } from 'view-design';
     import { mapGetters } from 'vuex'
    import ChatTextarea from './ChatTextarea';
    import ChatMessage from './ChatMessage';
    import ChatRoom from './ChatRoom';
    import styles from './styles.scss';
    export default {
        data () {
            return {
                split3: 0.2,
                split4: 0.7,
                min: "150px",
                max: "200px"
            }
        },
        computed:{
            ...mapGetters(['CURRENTROOMDATA'])
        },
        components: {
            Split,
            ChatTextarea,
            ChatMessage,
            ChatRoom
        },
       
    }
</script>
<style>
    
</style>
