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
      <td>
      The columns props define the header for the table and the column of data it should be assigned to in the table content to be rendered. 
      It is an array containing objects, each object containing the <strong>label</strong> which is the text to be shown
      in the head of the table while the <strong>field</strong> maps the heading to the value to of the property key in the data
      passed to the tablated data. 
      <br><br>
      See example <a href="#columns">here</a>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>
        The data props contains the data to be shown in the table body. The data must be an array of objects, 
        each of the object containing a key - value pair where the key must match only one field specified in the 
        column props for it to be mapped to that particular column. 
        <br><br>
        A value needed only by an <strong>action</strong> should also be passed in the objects but the key for the value
        should not match any field defined in the column props.
        <br><br>
        See example <a href="#data">here</a>
      </td>
    </tr>
    <tr>
      <td>actions</td>
      <td>
        We can define action buttons like edit, delete, view for each row of the table for users to interact
        with each row of data differently. This buttons can be displayed or shown when a condition is met.
        You can pass an array of object of actions. 
        <br><br>
        See example <a href="#actions">here</a> 
      </td>
    </tr>
    <tr>
      <td>theme</td>
      <td>
        TabulatedData comes in two flavors <b>light</b> and <b>dark</b> flavor. The default flavor is
        <b>light</b>. You can change to dark mode by passing <b>dark</b> as the prop value.
      </td>
    </tr>
    <tr>
      <td>sortBy</td>
      <td>
        TabulatedData makes sorting the table easy on initialization of the table if any data exists or when data 
        is to be rendered. Here we pass the <b>field</b> name matching what has been declared in our columns 
        prop for our data to be sorted by.
        <br><br>
        See example <a href="#sort-by">here</a>
      </td>
    </tr>
    <tr>
      <td>sortDir</td>
      <td>You can sort the table content in either <b>ASC</b>(ascending) or <b>DESC</b>(descending) order. 
      If a column containing alphabets or alphanumeric values is assigned to the sortBy, sorting is carried out from a-z
      in ASC order or z-a in DESC.
      <br><br>
      See example <a href="#sort-direction">here</a></td>
    </tr>
    <tr>
      <td>loading</td>
      <td>
        This prop tells TabulatedData if data is still fetched in case it is used with an API or external source
        you don't have control over. It requires a boolean i.e <b>true</b> or <b>false</b>. If true is set 
        TabulatedData shows a spinning loader, if set to false the data is rendered if the data passed is not empty.
        <br><br>
        The best approach is to assign the loading prop to a component data variable that can be changed 
        from true to false after a successful request or manipulation of data to be rendered.
      </td>
    </tr>
    <tr>
       <td>showPerPage</td>
       <td>
        This must be a number and as the name suggests it defines how many records should be shown per page. 
        The default is 12 items per page.
       </td>
    </tr>
  </tbody>
</table>


## Columns

It expects an array of object of columns you want to use as the header for your table. Where you specify two key `label` and `field`

```html
<template>
   <TabulatedData :columns="heading"></TabulatedData>
</template>
```

```javascript
<script>
import TabulatedData from 'TabulatedData';

 export default {
      components: {TabulatedData},
      data() {
          return {
              heading: [
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
The <b>label</b> is the text displayed in the header of our table.
Each object defined in the array passed as our columns props signifies a new column, where the label for
that column is the text shown for that header while the value of the <b>field</b> property is the 
name of the key for the value in our data to be rendered as the table body.

If the <b>label</b> is assigned an empty value the header shows nothing but the column still renders the value
for the matching <b>field</b> specified.

The <b>field</b> must be specified and must exists in the data passed to be rendered as the table body.


## Data
This is the data that is shown as the table body. The data can be fed at initialization time or after
making a network call. 

The data must contain array of objects, where each object contain a key-value pair. The key matching a <b>field</b>
specified in the columns prop and the value being the data to be shown for each columns. 

Any key-value pair passed that is not specified in the columns prop will not be shown on the table.

A key needed by the actions as argument for the actions prop must be passed alongside the data but it won't be rendered
with the table.

```html
<template>
    <TabulatedData :columns="heading"  :data="data"></TabulatedData>
</template>
```

```javascript

<script>
import TabulatedData from 'TabulatedData';

 export default {
      components: {TabulatedData},
      data() {
          return {
              heading: [
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
                  ],
                }
              },
          }
</script>

```

## Actions
This is an array of objects containing the buttons we want to be shown for each row of our data in the
table body. Each object in the array specifies a corresponding button.

```html
<template>
    <TabulatedData  :columns="heading"  
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
              heading: [
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
In each action object we can have:

<b>class</b>: This can be any css selector we have defined in our .css stylesheet or component stylesheet. This is optional.

<b>text</b>: This is the text shown on the button. This is optional.

<b>title</b>: The text shown when we hover on our button for accessibility. This is optional.

<b>callback</b>: A function to be called when we click on our button. This function must be defined in our
component methods and must be passed as reference to the TabulatedData for it to work. E.g:
If we assign a callback with the name deleteUser we have to do this to our TabulatedData call:
```Vue
<TabulatedData :columns="header"  
                :data="data" 
                :actions="actions" 
                @deleteUser="deleteUser">
</TabulatedData>
```

The deleteUser function passed as ref must be declared in our component methods.


<b>args</b>: This is an array of the arguments to be passed when TabulatedData calls the callback attached to the button.
This can be left empty if the callback doesn't require an argument. Every value in the array of <i>args</i> must already exists in the 
data for each row rendered in our table body. 


<b>showKey</b>: This is optional and only needed if we conditionally need to display or hide a button. This must be a string
and must have been passed among the data to be rendered in our table body as it maps to the key in the object rendered for each row.


<b>showWhen:</b>: This is optional and if passed must be an array of values we expect our <b><i>showKey</i></b> value to
to be for this button to be shown for the particular page.


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

You can sort by any of the object key passed in our array of objects data passed to be rendered as our table body.
This is not required but if passed must be a key defined in the data to be rendered as our table body.
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

You can sort in either <b><i>asc</i></b>(ascending) or <b><i>desc</i></b>(descending) order. 
This is optional and is not required
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

