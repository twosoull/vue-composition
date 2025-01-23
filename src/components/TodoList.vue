<template>
    <ul>
        <li v-for="(item, index) in todoItems" :key="index">{{item}}
            <button type="button" @click="remove(item,index)">삭제</button>
        </li>
    </ul>
</template>

<script>
    export default {
        props:['todoItems'],
        setup(props, context) {
            function remove(item,index) {
                localStorage.removeItem(item);
                context.emit('remove',index);
            }
            return {remove}
        }
    }
</script>

<style lang="scss" scoped>

</style>