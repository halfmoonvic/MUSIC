<template>
    <ul class="tab">
        <router-link tag="li" class="tab-item" to="/food">
            <span class="tab-link">food</span>
        </router-link>
        <router-link tag="li" class="tab-item" to="/girl">
            <span class="tab-link">girl</span>
        </router-link>
        <router-link tag="li" class="tab-item" to="/boy">
            <span class="tab-link">boy</span>
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'tab',
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

<style lang="sass" scoped>
@import '~common/sass/index.sass';

.tab
    display: flex
    @include flex()
    height: 30px
    border-bottom: 1px red solid
    // display: flex;
    .tab-item
        flex: 1 1 auto
        text-align: center
        &.active
            color: red



</style>
