<template>
    <div class="home-container">
        <div class="list">
            <ul class="list-group">
                <li  v-for="(item,index) in listData"
                    :key="index"
                    class="list-group-item">
                    <span>{{item.title}}</span>
                    <i class="fa fa-close" @click="del(item.id)"></i>
                </li>
            </ul>
            <div class="input-group mb-3 form-todo">
                <input type="text" class="form-control" placeholder="Please enter todo" ref="getValue">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="create-todo"
                     @click="btnTodo"
                    >创建</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Todo',
         data() {
           return {
             listData: []
           }
         },
         async created() {
           try {
             const res = await axios({
               method: 'GET',
               url: 'http://localhost:3000/todo'
             })
             this.listData = res.data
           } catch (e) {
             console.log(e)
           }
         },
    methods: {
     btnTodo() {
        try {
          axios({
            method: 'POST',
            url: 'http://localhost:3000/todo',
            data: {
              title: this.$refs.getValue.value
            }
          })
         } catch (e) {
          console.log(e)
        }
      },
      del(id) {
        if (window.confirm('确定要删除此项吗?')) {
         axios({
            url: `http://localhost:3000/todo/${id}`,
            method: 'DELETE'
          })
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
    .home-container {
        width: 300px;
        margin: 20px auto;
    }
    .list .list-group-item {
        border: #0c8ed9 1px solid;
        height: 50px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .list .list-group-item i {
        cursor: pointer;
        transition: .3s;
    }

    .list .list-group-item i:hover {
        transform: rotate(90deg) scale(1.2);
    }
    input {
        flex: 1;
        padding: 0 10px;
    }
    button {
        width: 50px;
        background: aqua;
        outline: black;
        box-sizing: border-box;
        height: 50px;
        cursor: pointer;
    }
    .form-todo {
        margin: 20px 0;
        height: 50px;
        display: flex;
    }
    span {
      cursor: pointer;
    }
</style>