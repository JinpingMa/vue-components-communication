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
        <p>下级组件通过<code class="code-text">$attrs</code>获取上级组件所有的属性值，上级组件通过<code class="code-text">$listener</code>监听所有下级组件的事件</p>
<!--        <p>传入子组件的值为：</p>-->
        <ul class="props-list-style">
          <li>传入子组件{{para1.title}}的值为：</li>
          <li class="props-list-item">{{para1.title}}</li>
          <li
            v-for="item in para1.comPara"
            :key="item" class="props-list-item"
          >{{item}}</li>
        </ul>
        <ul class="props-list-style">
          <li>传入子组件{{para2.title}}的值为：</li>
          <li class="props-list-item">{{para2.title}}</li>
          <li v-for="item in para2.comPara" :key="item" class="props-list-item">{{item}}</li>
        </ul>
        <ul class="props-list-style">
          <li>传入子组件{{para3.title}}的值为：</li>
          <li class="props-list-item">{{para3.title}}</li>
          <li v-for="item in para3.comPara" :key="item" class="props-list-item">{{item}}</li>
        </ul>
        <ul class="props-list-style">
          <li>传入子组件{{para4.title}}的值为：</li>
          <li class="props-list-item">{{para4.title}}</li>
          <li v-for="item in para4.comPara" :key="item" class="props-list-item">{{item}}</li>
        </ul>
        <p>处理子组件<code class="code-text">点击</code>事件，获取到的子组件的data-set中<code>data</code>的值：
          <span class="colorful-text">{{childDataset}}</span>
        </p>
        <ChildCom
          :title="para1.title"
          :para1="para1.comPara[0]"
          :para2="para1.comPara[1]"
          :para3="para1.comPara[2]"
          :para4="para1.comPara[3]"
          :para5="para1.comPara[4]"
          @mouseover="handleChildMouseOver"
          @click="handleChildClick">
          <ChildCom
            :title="para2.title"
            :para21="para2.comPara[0]"
            :para22="para2.comPara[1]"
            :para23="para2.comPara[2]"
            @mouseover="handleChildMouseOver"
            @click="handleChildClick">
          </ChildCom>
        </ChildCom>
        <ChildCom
          :title="para3.title"
          :para31="para3.comPara[0]"
          :para32="para3.comPara[1]"
          @mouseover="handleChildMouseOver"
          @click="handleChildClick">
          <ChildCom
            :title="para4.title"
            :para41="para4.comPara[0]"
            :para42="para4.comPara[1]"
            :para43="para4.comPara[2]"
            :para44="para4.comPara[3]"
            @click="handleChildClick"
            @mouseover="handleChildMouseOver"
          >
          </ChildCom>
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
      para1: {
        comPara: ['para1', 'para2', 'para3', 'para4', 'para5'],
        title: '1'
      },
      para2: {
        comPara: ['para21', 'para22', 'para23'],
        title: '2'
      },
      para3: {
        comPara: ['para31', 'para32'],
        title: '3'
      },
      para4: {
        comPara: ['para41', 'para42', 'para43', 'para44'],
        title: '4'
      },
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
    margin-bottom: 24px;
    li.props-list-item {
      + li.props-list-item {
        margin-left: 24px;
      }
    }
  }
</style>
