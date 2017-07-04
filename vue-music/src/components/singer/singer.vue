<template>
    <div class="singer" ref="singer">
    </div>
</template>

<script>
export default {
    name: 'singer',
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

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
