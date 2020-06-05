<template lang="html">
    <Card  class="enter-card">
        <div style="text-align:center">
            <h3>登入</h3>
            <Input v-model="userName" placeholder="Enter something..." class="enter-input" @keyup.enter.native="saveHandle"/>
            <Button type="primary" long v-on:click="saveHandle" >加入</Button>
        </div>
    </Card>
</template>
<script>
    import { Card, Input, Button } from "view-design";
    import Axios from 'axios'
    import styles from './styles.scss';
    export default {
        data () {
            return {
                userName: '',
            }
        },
        components: {
            Card,
            Input,
            Button
        },
        methods: {
            async saveHandle(){
                const {data} = await Axios.get(`http://localhost:5000/user?userName=${this.userName}`);
                if(data.length) {
                    this.$store.dispatch("LOGIN_IN", data[0]);
                }else {
                    this.$store.dispatch("JION_IN",{ userName: this.userName});
                }
            }
        }
        
    }
</script>
