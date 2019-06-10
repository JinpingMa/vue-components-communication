<template>
  <v-content>
    <v-toolbar
      color="#26c6da"
      dark
    >
      <v-toolbar-title>
        provide / inject 适用于父子、祖孙上下级关系组件上级到下级数据传递
      </v-toolbar-title>
    </v-toolbar>
    <v-card flat>
      <v-card-text>
        <v-layout align-center mb-3>
          <v-avatar color="grey" class="mr-3"></v-avatar>
          <strong class="title">第一层组件</strong>
        </v-layout>
        <p>上级组件通过<code class="code-text">provide</code>定义可以被下级注入的变量，下级组件通过<code class="code-text">inject</code>获取上级的变量</p>
        <v-alert
          :value="true"
          color="orange"
          icon="priority_high"
          outline
        >
          这种值传递是非响应式的，需要做特殊的代码
        </v-alert>
        <div>
          <v-textarea
            outline
            :readonly="true"
            :auto-grow="true"
            rows="7"
            :label="codeTitle1"
            :value="codeText1"
          ></v-textarea>
          <v-textarea
            outline
            :readonly="true"
            :auto-grow="true"
            rows="4"
            :label="codeTitle2"
            :value="codeText2"
          ></v-textarea>
        </div>
        <p>第一层组件<code class="code-text">provide</code>的值：
          <v-text-field
            v-model="valueLevel1"
            style="display:inline-block;"
            color="#1867c0"
            label="Solo"
            placeholder="请输入"
            single-line
            clearable
          ></v-text-field>
        </p>
        <ChildCom level="二">
          <ChildCom2 level="三">
          </ChildCom2>
        </ChildCom>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  import ChildCom from './provide-inject-child'
  import ChildCom2 from './provide-inject-childL2'
  const codeText1 =
  `provide() {
    const foo = {}
    Object.defineProperty(foo, 'info', {
      enumerable: true,
      get: () => this.info
    }
    return { foo }
  }`
  const codeText2 =
  `provide() {
    this.foo = Vue.observable({ data: '' })
    return { foo: this.foo }
  }`

  export default {
    components: {
      ChildCom,
      ChildCom2,
    },
    data: () => ({
      codeTitle1: '1. 第一种有效方式，使用getter函数：',
      codeText1: codeText1,
      valueLevel1: '来自于第一层组件的值',
      codeTitle2: '2. 使用Vue2.6新API：Vue.observable：',
      codeText2: codeText2,
      valueLevel2: '来自于第一层组件的值'
    }),
    provide() {
      const level1 = {}
      Object.defineProperty(level1, 'data', {
        enumerable: true,
        get: () => this.valueLevel1
      })
      return {
        level1
      }
    }
  }
</script>

