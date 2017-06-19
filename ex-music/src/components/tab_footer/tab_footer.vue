<template>
    <ul class="tab-footer">
        <router-link to="/home" tag="li" class="tab-item">首页</router-link>
        <router-link to="/user" tag="li" class="tab-item">用户</router-link>
    </ul>
</template>

<script>
export default {
    name: 'tab_footer',
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="scss" scoped>
@import '~common/sass/index.sass';

.tab-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    @include flex();
    .tab-item {
        flex: 1 1 auto;
        text-align: center;
    }
}


</style>
