<template>
  <v-content>
    <v-toolbar
      color="#26c6da"
      dark
    >
      <v-toolbar-title>组件{{name}}</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-text>
      <p> 点击<span style="color:blue;font-weight: bold;">触发</span>按钮后传递的值为：
        <span class="emit-text">值来自于组件{{name}}</span>
      </p>
      <p> 接收的值为：
        <span class="receive-text">{{value}}</span>
      </p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="#4caf50" @click="triggerEmit">触发</v-btn>
<!--        <v-btn color="orange" @click="minusNum">接收</v-btn>-->
      </v-card-actions>
      <slot></slot>
    </v-card>
  </v-content>
</template>

<script>
  export default {
    name: '',
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      value: ''
    }),
    mounted() {
      this._EventBus.$on('eventBusEmit', val => {
        this.value = val
      })
    },
    methods: {
      triggerEmit () {
        this._EventBus.$emit('eventBusEmit', `值来自于组件${this.name}`)
      }
    }
  }
</script>

<style scoped>
  .emit-text {
    padding-left: 10px;
    font-style: italic;
    color: mediumpurple;
  }
  .receive-text {
    padding-left: 10px;
    /*font-style: italic;*/
    /*-webkit-text-stroke: 1px red;*/
    background: -webkit-gradient(linear,left top,right top,from(#ff8a00),to(#da1b60));
    background: linear-gradient(to right,#ff8a00,#da1b60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    text-shadow: none;
  }
</style>
