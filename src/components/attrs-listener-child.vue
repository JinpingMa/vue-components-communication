<template>
  <v-content>
    <v-toolbar
      color="green"
      dark
    >
      <v-toolbar-title>子组件{{title1}}</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-text>
        <p style="padding:0;margin:0;">
          父组件传入的值$attrs有:
          <span class="colorful-text">{{$attrs}}</span>
        </p>
        <p style="padding:0;margin:0;">
          父组件传入的值$listeners有:
          <span class="colorful-text">{{Object.keys($listeners).join(',  ')}}</span>
        </p>
        <v-btn fab color="orange" :data-data="'component'+title1" v-on="$listeners">点击</v-btn>
        <child-com v-bind="$attrs" v-on="listeners"></child-com>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  import childCom from './attrs-listener-childl2'
  export default {
    name: '',
    components: {
      childCom
    },
    inheritAttrs: false,
    props: {
      title1: {
        type: String,
        default: ''
      }
    },
    computed: {
      listeners() {
        const { mouseover, ...listeners } = this.$listeners
        return listeners
      }
    }
  }
</script>
