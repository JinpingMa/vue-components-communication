<template>
  <v-content>
    <v-toolbar
      color="indigo"
      dark
    >
      <v-toolbar-title>子组件</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div> 接收父组件传递的值，点击按钮后将自增值传递到父组件 </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn color="#4caf50" @click="plusNum">自增</v-btn>
        <v-btn color="orange" @click="minusNum">自减</v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
</template>

<script>
  export default {
    name: '',
    props: {
      initNum: {
        type: Number,
        default: 0
      }
    },
    methods: {
      plusNum () {
        this.$emit('emitFromChild', this.initNum + 1)
      },
      minusNum () {
        this.$emit('emitFromChild', this.initNum - 1)
      }
    }
  }
</script>
