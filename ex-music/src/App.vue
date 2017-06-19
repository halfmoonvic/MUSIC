<template>
    <div id="app">
        <tab-head></tab-head>
        <router-view name="body"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>


<script>
import tabHead from 'components/tab/tab';

export default {
    name: 'app',
    components: {
        'tab-head': tabHead
    }
}
</script>

<style>

</style>
