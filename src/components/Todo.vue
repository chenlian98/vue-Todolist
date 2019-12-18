<template>
    <div class="todo-container">
        <div class="box">
            <input type="text" v-model="item">
            <button v-on:click="btnTodo">创建</button>
        </div>
        <ul>
            <li v-for="(item, index ) in todos" :key="index">{{ item }}
                <i class="fa fa-close"></i>
            </li>
        </ul>
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
                    this.item = ''
                }

            }
        }
    }
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
   .todo-container{
    width: 500px;
    margin: 50px auto;
    }
   .box input,button {
       box-sizing: border-box;
       height: 50px;
       border: 1px solid aqua;
       padding: 0 10px;
    }






</style>