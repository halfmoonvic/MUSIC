<template>
    <div>
        <h2>路由push带查询参数跳转功能</h2>
        <button @click="tiaozhuan">跳转</button>
    </div>
</template>

<script>
export default {
    name: 'girl',
    data() {
        return {

        };
    },
    created() {
        this.id = 'aaa'
    },
    methods: {
        tiaozhuan() {
            this.$router.push({
                path: '/boy',
                query: {
                    id: this.id,
                    name: 'cs'
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
