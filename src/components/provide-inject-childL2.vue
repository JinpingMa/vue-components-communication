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
        <p>从第一层组件获取的值为
          <span class="colorful-text">{{level1.data}}</span>
        </p>
        <p>从第二层组件获取的值为
          <span class="colorful-text">{{level2.data}}</span>
        </p>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  export default {
    name: '',
    props: {
      level: {
        type: String,
        default: ''
      }
    },
    inject: ['level1', 'level2'],
  }
</script>

<style scoped>

</style>
