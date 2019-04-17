<template>
    <div>
        <div>
            <input
                type="text"
                @input="handleInput"
                :value="value"
            >
        </div>

    </div>

</template>

<script>
export default {
    props: {
        value: {
            type: [String, Number],
            default: ""
        }
    },
    methods: {
        handleInput(event) {
            console.log(1);
            const value = event.target.value;
            this.$emit("input", value);
        }
    }
};
</script>

<style>
</style>
