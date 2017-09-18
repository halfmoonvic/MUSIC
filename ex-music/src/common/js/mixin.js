export const testMixin = {
    created() {
        console.log('执行created勾子')
        this.testMethods('created')
    },
    mounted() {
        console.log('执行 mounted 勾子')
        this.testMethods('mounted')
    },
    methods: {
        testMethods(param) {
            console.log(`执行 testMethods 方法，来自于${param}`)
        }
    }
}
