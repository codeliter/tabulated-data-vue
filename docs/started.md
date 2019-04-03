# Getting Started

> We will be using [ES2015](https://github.com/lukehoban/es6features) in the code samples in the guide.


## Usage

```html
<template>
   <TabulatedData :columns="cols" :loading="false"
                  :data="data" :actions="actions"
                  theme="light"
                  @unblockUser="unblockUser" 
                  @blockUser="blockUser"
                  sortBy="username" 
                  sortDir="asc"
    ></TabulatedData>
</template>
```


```javascript

<script>
import TabulatedData from 'TabulatedData';

 export default {
        components: {TabulatedData},
        data() {
            return {
                cols: [
                    {
                        label: "User ID",
                        field: "id"
                    },
                    {
                        label: "Full name",
                        field: 'name'
                    },
                    {
                        label: 'Username',
                        field: 'username'
                    },
                    {
                        label: 'Status',
                        field: 'status'
                    }
                ],
                dataB: [],
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
```


