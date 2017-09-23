<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout view="hHh LpR fFf">
      <header slot="header">
        <q-tabs v-model="selectedTab">
          <q-tab slot="title" class="app-icon" />
          <q-route-tab to="/stories/top" label="top" exact slot="title" />
          <q-route-tab to="/stories/new" label="new" exact slot="title" />
          <q-route-tab to="/stories/show" label="show" exact slot="title" />
          <q-route-tab to="/stories/ask" label="ask" exact slot="title" />
          <q-route-tab to="/stories/job" label="job" exact slot="title" />
          <q-tab slot="title" name="about" @click="showAbout()" label="about" />
        </q-tabs>
      </header>
      <main>
        <router-view></router-view>
      </main>
    </q-layout>
  </div>
</template>

<script>
import { QTabs, QTab, QRouteTab, QLayout, Dialog } from 'quasar'

export default {
  components: {
    QTabs,
    QTab,
    QRouteTab,
    QLayout
  },
  data () {
    return {
      selectedTab: 'top'
    }
  },
  methods: {
    showAbout: function () {
      Dialog.create({
        title: 'HackerNews Progressive Web App made with Quasar Framework',
        message: 'Author: <a class="ext-link" target="_blank" href="https://www.linkedin.com/in/jonafrank13/">Jona Frank</a></br>Github: <a class="ext-link" target="_blank" href="https://github.com/jonafrank13/hnpwa-quasar">hnpwa-quasar</a></br>Email: <a class="ext-link" href="mailto:jona.mailbox@gmail.com">jona.mailbox@gmail.com</a></br>Quasar Framework: <a class="ext-link" target="_blank" href="http://quasar-framework.org/">quasar-framework.org</a>',
        buttons: [
          {
            label: 'Close',
            handler: () => {
              this.selectedTab = 'top'
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

main
  text-align center
  margin-top 40px

header
  margin 0
  height 10px
  background-color $primary

.q-tabs-head
  font-size 0.95rem

.q-tab
  text-transform capitalize

.app-icon
  background-image url('assets/quasar-logo.png')
  background-size 2.5rem
  background-repeat no-repeat
  background-position center
  min-width 50px

.ext-link
  color $primary !important
  text-decoration underline
</style>
