<template>
  <v-content>
    <v-toolbar
      color="pink"
      dark
    >
      <v-toolbar-title>
        props / $emit 适用于父子组件
      </v-toolbar-title>
    </v-toolbar>
    <v-card flat>
      <v-card-text>
        <v-layout align-center mb-3>
          <v-avatar color="grey" class="mr-3"></v-avatar>
          <strong class="title">父组件</strong>
        </v-layout>
        <div>父组件通过<code class="code-text">props</code>传递值到子组件，子组件通过事件将值传递到父组件(<code class="code-text">$emit</code>触发)</div>
        <p>传入子组件的值为：
          <v-text-field
            v-model="count"
            style="display:inline-block;"
            label="Solo"
            placeholder="请输入数字"
            single-line
            type="number"
            clearable
          ></v-text-field>
        </p>
        <ChildCom :init-num="count" @emitFromChild="handleChildEmit"></ChildCom>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  import ChildCom from './child-component'

  export default {
    components: { ChildCom },
    data: () => ({
      count: 0
    }),
    methods: {
      handleChildEmit(val) {
        this.count = val
      }
    }
  }
</script>
