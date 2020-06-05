<template>
    <div ref="chatContainer" class="chat-list">
        <List class="msg-list"  >
            <ListItem v-for="data in MESSAGEDATAS" :key="data.index" :class="data.userId == USERDATAS._id ? 'my-style' : '' ">
                <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" :title="data.userName" :description="data.message" />
            </ListItem>
        </List>
    </div>
    
</template>
<script>
    import { List  } from "view-design"
    import { mapGetters } from 'vuex'
    import styles from './styles.scss';
    const ListItem = List.Item
    const ListItemMeta = List.Item.Meta
    export default {
        components: {
            List,
            ListItem,
            ListItemMeta
        },
        computed:{
            ...mapGetters(['MESSAGEDATAS', 'USERDATAS'])
        },
         updated(){
            const container = this.$refs.chatContainer;
            container.scrollTop = container.scrollHeight;
        },
       
    }
</script>
