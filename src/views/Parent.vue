<template>
    <div>
        <h1>parent</h1>
        <transition-group name="group">
            <router-view key="default" />
            <router-view
                key="email"
                name="email"
            />
            <router-view
                key="tel"
                name="tel"
            />
        </transition-group>

    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.group-enter {
    opacity: 0;
}

.group-enter-active {
    transition: opacity 1s ease;
}

.group-enter-to {
    opacity: 1;
}
.group-leave {
    opacity: 1;
}

.group-leave-active {
    transition: opacity 1s ease;
}

.group-leave-to {
    opacity: 0;
}
</style>
