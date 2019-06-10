<template>
  <v-content>
    <v-toolbar
      color="indigo"
      dark
    >
      <v-toolbar-title>
        Event Bus 适用于所有关系组件
      </v-toolbar-title>
    </v-toolbar>
    <v-card flat>
      <v-card-text>
        <v-layout align-center mb-3>
          <v-avatar color="grey" class="mr-3"></v-avatar>
          <strong class="title">最外层组件</strong>
        </v-layout>
        <p>中央事件总线通过
          <code class="code-text">$emit / $on</code>
          传递和接收值，
          <code class="code-text">$emit</code>
          触发事件传递值，
          <code class="code-text">$on</code>
          监听事件来接收值</p>
        <P>点击触发按钮后所有监听该事件的组件都可以收到值</P>
        <p></p>
        <v-layout row wrap>
          <v-flex
            v-for="card in cardsLevel1"
            :key="card.title"
            v-bind="{ [`xs${card.flex}`]: true }"
          >
            <v-card>
                <v-container
                  fill-height
                  fluid
                  pa-2
                >
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <CommonCom :name="card.title">
                        <v-layout row wrap>
                          <v-flex
                          v-for="card2 in cardsLevel2"
                          :key="card2.title"
                          v-bind="{ [`xs${card2.flex}`]: true }"
                        >
                          <v-card>
                            <v-container
                              fill-height
                              fluid
                              pa-2
                            >
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <CommonCom :name="card2.title">
                                    <v-layout row wrap>
                                      <v-flex
                                        v-for="card3 in card2.children"
                                        :key="card3.title"
                                        v-bind="{ [`xs${card3.flex}`]: true }"
                                      >
                                        <v-card>
                                          <v-container
                                            fill-height
                                            fluid
                                            pa-2
                                          >
                                            <v-layout fill-height>
                                              <v-flex xs12 align-end flexbox>
                                                <CommonCom :name="card3.title"></CommonCom>
                                              </v-flex>
                                            </v-layout>
                                          </v-container>
                                        </v-card>
                                      </v-flex>
                                    </v-layout>
                                  </CommonCom>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-card>
                        </v-flex>
                        </v-layout>
                      </CommonCom>
                    </v-flex>
                  </v-layout>
                </v-container>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex
            v-for="card5 in cardsLevel5"
            :key="card5.title"
            v-bind="{ [`xs${card5.flex}`]: true }"
          >
            <v-card>
              <v-container
                fill-height
                fluid
                pa-2
              >
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <CommonCom :name="card5.title"></CommonCom>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-content>
</template>

<script>
  import CommonCom from './common-component'

  export default {
    components: { CommonCom },
    data: () => ({
      cardsLevel1: [
        { title: '1', flex: 12 }
      ],
      cardsLevel2: [
        { title: '2', flex: 6, children: [
            { title: '4', flex: 6 },
            { title: '5', flex: 6 }
          ] },
        { title: '3', flex: 6, children: [
            { title: '6', flex: 6 },
            { title: '7', flex: 6 }
          ] }
      ],
      cardsLevel5: [
        { title: '8', flex: 6 },
        { title: '9', flex: 6 }
      ]
    })
  }
</script>

<style>

</style>
