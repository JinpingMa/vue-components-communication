<template>
  <v-content>
    <v-toolbar
      color="#546E7A"
      dark
    >
      <v-toolbar-title>
        $parent / $children / $ref 适用于父子组件数据传递
      </v-toolbar-title>
    </v-toolbar>
    <v-card flat>
      <v-card-text>
        <v-layout ref="layoutCom" align-center mb-3>
          <v-avatar color="grey" class="mr-3"></v-avatar>
          <strong class="title">父组件</strong>
        </v-layout>
        <v-alert
          :value="true"
          color="#1867c0"
          outline
        >
          <p style="margin:0;">通过<code class="code-text">$parent</code>获取父组件实例，如果有的话</p>
          <p>通过<code class="code-text">$children</code>获取所有直接子组件实例，不保证顺序，不是响应式的</p>
          <p style="margin:10px 0 0 0;">父组件通过<code class="code-text">$ref</code>获取一个dom元素对象和子组件实例</p>
        </v-alert>
        <v-btn color="orange" @click="getChildrenComponents">通过$children获取子组件实例</v-btn>
        <v-btn color="orange" @click="getChildByRef">通过ref获取子组件实例</v-btn>
        <v-layout row>
          <v-flex pa-1>
            <ChildCom
              :title="title1">
            </ChildCom>
          </v-flex>
          <v-flex pa-1>
            <ChildCom
              ref="component2"
              :title="title2">
            </ChildCom>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  import ChildCom from './parent-children-ref-child'

  export default {
    components: {
      ChildCom
    },
    data: () => ({
      title1: '1',
      title2: '2'
    }),
    mounted () {
      console.log('comByRef: ', this.$refs['component2'])
      console.log('layoutCom: ', this.$refs['layoutCom'])
      console.log('children: ', this.$children[0])
    },
    methods: {
      getChildrenComponents() {
        alert('children[0].$el.className ' + this.$children[0].$el.className)
      },
      getChildByRef() {
        this.$refs['component2'].sayHello()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "@design";
</style>
