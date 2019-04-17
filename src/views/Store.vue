<template>
    <div>
        <h1>Store</h1>
        <div>{{appName}}</div>
        <div>{{userName}}</div>

        <!-- <div>
            <AInput @input="handleInput" />
        </div>

        <div>{{inputValue}}</div>
        <div>
            <AShow :content="inputValue"></AShow>
        </div> -->
    </div>
</template>

<script>
import AInput from "_c/AInput";
import AShow from "_c/AShow";
export default {
    name: "store",
    data() {
        return {
            inputValue: ""
        };
    },
    computed: {
        appName() {
            return this.$store.state.appName;
        },
        userName() {
            return this.$store.state.user.userName;
        }
    },
    components: {
        AInput,
        AShow
    },
    methods: {
        handleInput(val) {
            this.inputValue = val;
        }
    }
};
</script>

<style>
</style>
