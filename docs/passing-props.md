# Passing Props

To use the TabulatedData component you need to pass props to it. see the list of supported props below

<table>
  <thead>
    <th>Name</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>columns</td>
      <td>You can pass an array of object of columns you want to show on your table. Where you specify two key <b>label</b> and <b>field</b>. see example <a href="#columns">here</a></td>
    </tr>
    <tr>
      <td>data</td>
      <td>You can pass an array of data matching the columns specify. see example <a href="#data">here</a></td>
    </tr>
    <tr>
      <td>actions</td>
      <td>You can pass an array of actions. see example. <a href="#actions">here</a> </td>
    </tr>
    <tr>
      <td>theme</td>
      <td>There are two default, <b>Light</b> and <b>Dark</b></td>
    </tr>
    <tr>
      <td>sortBy</td>
      <td>You can sort by any of the columns specified. see example <a href="#sort-by">here</a></td>
    </tr>
    <tr>
      <td>sortDir</td>
      <td>You can sort direction either <b>ASC</b> or <b>DESC</b>. see example <a href="#sort-direction">here</a></td>
    </tr>
    <tr>
      <td>loading</td>
      <td>Make the table know when fetching data is done. It's requires a boolean i.e <b>TRUE</b> or <b>False</b></td>
    </tr
  </tbody>
</table>


## Columns

Its expect an array of object of columns you want to show on your table. Where you specify two key `label` and `field`

```html
<template>
   <TabulatedData :columns="cols"  ></TabulatedData>
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
          }
      },
  }
</script>

```

## Data

You can pass an array of data matching the columns specified.

```html
<template>
    <TabulatedData :columns="cols"  :data="data" ></TabulatedData>
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
              data: [
                    {
                      id: 1, 
                      name: 'Steve Abolarin', 
                      username: 'code', 
                      status: 'Active', 
                      StatusInt: 1
                    },
                    {
                      id: 2, 
                      name: 'Nath Abolarin', 
                      username: 'codel', 
                      status: 'Inactive', 
                      StatusInt: 0
                    },
                    {
                      id: 3, 
                      name: 'Shafi Rahman', 
                      username: 'ava', 
                      status: 'Inactive', 
                      StatusInt: 0
                    },
                    {
                      id: 4, 
                      name: 'Chika React', 
                      username: 'chikaX', 
                      status: 'Inactive', 
                      StatusInt: 1
                    },
                  ],
                }
              },
          }
</script>

```

## Action
You can pass an array of actions.
```html
<template>
    <TabulatedData  :columns="cols"  
                    :data="data" 
                    :actions="actions"
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
              data: [
                    {
                      id: 1, 
                      name: 'Steve Abolarin', 
                      username: 'code', 
                      status: 'Active', 
                      StatusInt: 1
                    },
                    {
                      id: 2, 
                      name: 'Nath Abolarin', 
                      username: 'codel', 
                      status: 'Inactive', 
                      StatusInt: 0
                    },
                    {
                      id: 3, 
                      name: 'Shafi Rahman', 
                      username: 'ava', 
                      status: 'Inactive', 
                      StatusInt: 0
                    },
                    {
                      id: 4, 
                      name: 'Chika React', 
                      username: 'chikaX', 
                      status: 'Inactive', 
                      StatusInt: 1
                    },
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
        }
</script>

```

## Theme

We have 2 default themes, <b>Light </b> and <b>Dark</b>

```html
<template>
    <TabulatedData  :columns="cols"  
                    :data="data" 
                    :actions="actions"
                    theme="light"
    ></TabulatedData>
</template>
```

## Sort By

You can sort by any of the columns specified
```html
<template>
    <TabulatedData  :columns="cols"  
                    :data="data" 
                    :actions="actions"
                    theme="light"
                    sortBy="username"
    ></TabulatedData>
</template>
```



## Sort Direction

You can sort direction either ASC or DESC
```html
<template>
    <TabulatedData  :columns="cols"  
                    :data="data" 
                    :actions="actions"
                    theme="light"
                    sortBy="username"
                    sortDir="asc"
    ></TabulatedData>
</template>
```

