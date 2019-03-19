<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Welcome to Your Plugin in Vue.js</h1>
        <TabulatedData :columns="cols" :loading="false"
                       :data="data" :actions="actions"
                       @unblockUser="unblockUser" @blockUser="blockUser"
                       sortBy="username" sortDir="asc"
        ></TabulatedData>
    </div>
</template>

<script>
    import TabulatedData from './components/TabulatedData';

    export default {
        components: {TabulatedData},
        data() {
            return {
                cols: ['id', 'name', 'username', 'status'],
                data: [
                    {id: 1, name: 'Steve Abolarin', username: 'code', status: 'Active', StatusInt: 1},
                    {id: 2, name: 'Nath Abolarin', username: 'codel', status: 'Inactive', StatusInt: 0},
                    {id: 3, name: 'Shafi Rahman', username: 'ava', status: 'Inactive', StatusInt: 0},
                    {id: 4, name: 'Chika React', username: 'chikaX', status: 'Inactive', StatusInt: 1},
                ],
                actions: [
                    {
                        class: 'btn btn-primary',
                        callback: 'blockUser',
                        args: ['id', 'name'],
                        text: 'Block user',
                        title: "Block User",
                        showKey: 'StatusInt',
                        showWhen: [1]
                    },
                    {
                        class: 'btn btn-danger',
                        callback: 'unblockUser',
                        args: ['id', 'name'],
                        text: 'Unblock user',
                        title: "unblock User",
                        showKey: 'StatusInt',
                        showWhen: [0]
                    },
                ]
            }
        },
        methods: {
            blockUser(id, name) {
                window.alert(`User ${name} with id ${id} will be blocked`);
            },
            unblockUser(id, name) {
                window.alert(`User ${name} with id ${id} will be unblocked`);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>