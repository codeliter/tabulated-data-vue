# Passing Function
Any function that is declared in our actions array as a callback must have been declared in the methods object of
our component. In order to allow TabulatedData call this function when the action button configured to call this
function is clicked on we must pass the function as reference in our TabulatedData call like below.

```html
<TabulatedData :columns="cols" :loading="false"
                  :data="data" :actions="actions"
                  theme="light"
                  @unblockUser="unblockUser" 
                  @blockUser="blockUser"
                  sortBy="username" 
                  sortDir="asc">
</TabulatedData>
```

We see the method passed as reference is declared in our <b>methods</b> object of our component as below.
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