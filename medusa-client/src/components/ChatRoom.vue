<template>
    <div>
        <div class="add-room-box">
            <Input v-model="roomName" placeholder="输入房间名称添加"  />
            <Icon type="md-add" size="24" v-on:click="addRoomHandle" />
        </div>
        
        <List class="msg-list">
            <ListItem v-for="data in ROOMDATAS" :key="data._id" @click.native="enterRoom(data)" :class="data._id == CURRENTROOMDATA._id ? 'active' : '' " :data="UNREADDATAS">
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" :title="data.roomName" />
                <span class="dot" v-if="UNREADDATAS[data._id]">{{UNREADDATAS[data._id] ? UNREADDATAS[data._id] : '' }}</span>
            </ListItem>
        </List>
    </div>
</template>
<script>
     import { List, Icon , Input} from "view-design"
    import { mapGetters } from 'vuex'
    import styles from './styles.scss';
    const ListItem = List.Item
    const ListItemMeta = List.Item.Meta
    export default {
        data () {
            return {
                roomName: '',
            }
        },
        computed:{
            ...mapGetters(['ROOMDATAS', 'CURRENTROOMDATA', 'UNREADDATAS'])
        },
        components: {
            Icon,
            List,
            ListItem,
            ListItemMeta,
            Input
        },
        methods: {
            addRoomHandle(e){
                this.$store.dispatch("ADD_ROOM",{ roomName: this.roomName});
            },
            enterRoom(data){
                this.$store.dispatch("GET_MESSAGE", {roomId: data._id});
                this.$store.dispatch("SET_ROOM", data);
            }
        },
    }
</script>
