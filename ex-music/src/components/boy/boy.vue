<template>
    <div>我是男孩</div>
</template>

<script>
// import {} from './config.js';

export default {
    name: 'boy',
    data() {
        return {
            id: ''
        };
    },
    created() {
        // this._getRecommend();
        this.getId()
    },
    methods: {
        getId() {
            console.log(this);
            console.log(this.$route.query);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
