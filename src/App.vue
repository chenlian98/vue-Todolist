<template>
  <div id="app">
    <todo></todo>
   <Fabulous
           v-for="(item, index) in zanData"
           :key="index"
           :zanData="item"
           @state="getState"
   ></Fabulous>
    </div>
</template>

<script>
import Todo from './components/Todo'
import Fabulous from './components/Fabulous'
export default {
    name: 'app',
    components: {
        Fabulous,
        Todo
    },
    data() {
        return {
            zanData: [
                {isZan: 0, count: 10, id: 1},
                {isZan: 1, count: 11, id: 2},
                {isZan: 0, count: 20, id: '45678'},
                {isZan: 1, count: 420, id: '4678'},
                {isZan: 0, count: 32, id: 'fghj'},
                {isZan: 0, count: 10, id: '345'},
                {isZan: 0, count: 10, id: '4567gh'},
                {isZan: 0, count: 10, id: 'erty'},
            ]
        }
    },
    methods: {
        getState(id) {
            this.zanData.forEach(item => {
                if(item.id === id) {
                    if (item.isZan === 1) {
                        item.isZan = 0
                        item.count = item.count - 1
                    } else {
                        item.isZan = 1
                        item.count = item.count + 1
                    }
                }
            })
        }
    }
}




</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
#app>img {
  width: 150px;
}
  .todo-list-example>form,label {
    margin-right: 10px;
  }
  .todo-list-example input {
    padding: 10px;
  }
.todo-list-example>form,label,input,button {
  box-sizing: border-box;
  height: 50px;
  font-size: 15px;
}
.todo-list-example button {
    width: 50px;
}
</style>
