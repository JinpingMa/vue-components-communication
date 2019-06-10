<template>
  <v-content>
    <v-toolbar
      color="green"
      dark
    >
      <v-toolbar-title>第{{level}}层组件</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-text>
        <p>从第一层组件获取的值为：
          <span class="colorful-text">{{level1.data}}</span>
        </p>
        <p>第二层组件<code class="code-text">provide</code>的值：
          <v-text-field
            v-model="level2.data"
            style="display:inline-block;"
            color="#1867c0"
            label="Solo"
            placeholder="请输入"
            single-line
            clearable
          ></v-text-field>
        </p>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: '',
    props: {
      level: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      valueLevel2: '来自于第二层组件的值'
    }),
    inject: ['level1'],
    provide() {
      this.level2 = Vue.observable({ data: '来自于第二层组件的值' })
      return {
        level2: this.level2
      }
    }
  }
</script>
