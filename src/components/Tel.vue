<template>
    <div>
        <h1>
            16888888888
        </h1>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$bus.$on("haha", arg => {
            alert(arg);
            console.log(arg);
        });
    }
};
</script>

<style>
</style>
