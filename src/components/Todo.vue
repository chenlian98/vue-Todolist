<template>
    <div class="todo-container">
        <ol>
            <li v-for="(item, index ) in todos" :key="index">{{ item }}</li>
        </ol>
        <div class="input">
            <input type="text" v-model="item">
            <button v-on:click="btnTodo">提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Todo",
        data() {
            return {
                todos:[
                    'item',
                    'item1',
                    '学习',
                    '打游戏',
                ],
                item: ''
            }
        },
        methods: {
            btnTodo() {
                if(!this.item){
                    alert('为空')
                }else {
                    //this.todos.push(this.item)
                    this.todos = [...this.todos, this.item]
                    //this.todos = this.todos.concat([this.item])
                    this.item = ''
                }
               // console.log(this.item)
            }
        }
    }
</script>

<style>
.todo-container{
    float: left;
    width: 500px;
    margin: 0 auto;
}
</style>