# Passing Function

```html
<TabulatedData :columns="cols" :loading="false"
                  :data="data" :actions="actions"
                  theme="light"
                  @unblockUser="unblockUser" 
                  @blockUser="blockUser"
                  sortBy="username" 
                  sortDir="asc"
    ></TabulatedData>

```

```javascript
    methods: {
        blockUser(id, name) {
            window.alert(`User ${name} with id ${id} will be blocked`);
        },
        unblockUser(id, name) {
            window.alert(`User ${name} with id ${id} will be unblocked`);
        }
    }
```