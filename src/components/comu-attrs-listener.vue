<template>
  <v-content>
    <v-toolbar
      color="#26c6da"
      dark
    >
      <v-toolbar-title>
        $attrs / $listener 适用于父子、祖孙上下级关系组件数据传递
      </v-toolbar-title>
    </v-toolbar>
    <v-card flat>
      <v-card-text>
        <v-layout align-center mb-3>
          <v-avatar color="grey" class="mr-3"></v-avatar>
          <strong class="title">父组件</strong>
        </v-layout>
        <v-alert
          :value="true"
          color="#1867c0"
          outline
        >
          <p style="margin:0;">下级组件通过<code class="code-text">$attrs</code>获取上级组件所有的属性值，上级组件通过<code class="code-text">$listener</code>监听所有下级组件的事件</p>
          <p style="margin:10px 0 0 0;">设置<code class="code-text">inheritAttrs: false</code>阻止<code class="code-text">$attrs</code>值绑定到子组件根元素上</p>
        </v-alert>
        <ul class="props-list-style">
          <li>传入子组件{{para.title1}}的值为：</li>
          <li
            v-for="item in Object.keys(para)"
            :key="item" class="props-list-item"
          >{{item}}: {{para[item]}}</li>
        </ul>
        <p>处理子组件<code class="code-text">点击</code>事件，获取到的子组件的data-set中<code>data</code>的值：
          <span class="colorful-text">{{childDataset}}</span>
        </p>
        <ChildCom
          :title1="para.title1"
          :title2="para.title2"
          :title3="para.title3"
          :para1="para.para1"
          :para2="para.para2"
          @mouseover="handleChildMouseOver"
          @click="handleChildClick">
        </ChildCom>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  import ChildCom from './attrs-listener-child'

  export default {
    components: {
      ChildCom
    },
    data: () => ({
      childDataset: '',
      title:'title1111',
      message:'message111',
      para: {
        title1: '1',
        title2: '2',
        title3: '3',
        para1: '4',
        para2: '5'
      }
    }),
    methods: {
      handleChildClick(e) {
        this.childDataset = e.currentTarget.dataset.data
      },
      handleChildMouseOver(e) {
        this.childDataset = e.currentTarget.dataset.data
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '@design';
  .props-list-style {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 16px 0;
    li.props-list-item {
      + li.props-list-item {
        margin-left: 24px;
      }
    }
  }
</style>
