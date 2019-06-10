<script>
  // import ComuPropsEmit from '../components/comu-props-emit'
  export default {
    // components: {ComuPropsEmit},
    data: () => ({
      length: 6,
      window: 0,
      componentsList: [
        'ComuPropsEmit',
        'ComuEventBus',
        'ComuAttrsListener',
        'ComuProvideInject',
        'ComuPropsEmit',
        'ComuPropsEmit'
      ]
    })
  }
</script>

<template>
  <v-app>
    <v-layout align-center class="mt-4 mr-4 mb-4 ml-2">
      <v-item-group
        v-model="window"
        class="shrink mr-4"
        mandatory
        tag="v-flex"
      >
        <v-item
          v-for="n in length"
          :key="n"
        >
          <div slot-scope="{ active, toggle }">
            <v-btn
              :input-value="active"
              icon
              @click="toggle"
            >
              <v-icon color="blue lighten-2">fiber_manual_record</v-icon>
            </v-btn>
          </div>
        </v-item>
      </v-item-group>

      <v-flex>
        <v-window
          v-model="window"
          class="elevation-1"
          vertical
        >
          <v-window-item
            v-for="n in length"
            :key="n"
            style="max-height: calc(100vh - 48px);overflow:auto;"
          >
            <component :is="componentsList[n-1]"></component>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<style lang="scss">
  @import "@design";
</style>
