<template>
    <div @click="testMethods('呵呵')">我是男孩</div>
</template>

<script>
import {testMixin} from 'common/js/mixin'

export default {
    name: 'boy',
    mixins: [testMixin],
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
        },
        testMethods() {
            console.log('组件自身的方法')
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
