<template>
    <div class="Fabulous">
        <div class="zan">
            <i class="fa fa-heart"
               :class="{red : zanData.isZan}"
               @click="dianZan(zanData.id)"></i>
            <span>{{zanData.count}}</span>
        </div>
    </div>
</template>

<script>
    /*Fabulous 点赞*/
    export default {
        name: "Fabulous",
        props: {
            zanData: {
                type: Object,
                default: () => ({})
            },
        },
        data() {
            return {}
        },
        methods: {
            dianZan(id) {
                // 自定义事件
                // setData()
                this.$emit('state', id)
            }
        }
    }
</script>

<style scoped>
    .zan {
        font-size: 20px;
    }

</style>