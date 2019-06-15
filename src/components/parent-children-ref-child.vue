<template>
  <v-content>
    <v-toolbar color="#9E9D24">
      <v-toolbar-title>子组件{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-text>
        <v-textarea
          outline
          :readonly="true"
          :auto-grow="true"
          rows="4"
          label="父组件className"
          :value="parentComVal"
        ></v-textarea>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  export default {
    name: '',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      parentComVal: ''
    }),
    mounted() {
      this.parentComVal = this.$parent.$el.className
      console.log('parent: ', this.$parent)
    },
    methods: {
      sayHello() {
        alert(`hello, I'm function named 'sayHello' from component ${this.title}` )
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@design";
</style>
