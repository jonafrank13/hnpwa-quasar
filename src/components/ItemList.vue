<template>
  <div>
    <q-pagination v-if="maxPages > 1" v-model="page" :max="maxPages" />
    <q-list separator no-border>
      <q-item v-for="story in storyItems" :key="story.id">
        <q-item-side>
          <q-item-tile label>{{story.score}}</q-item-tile>
        </q-item-side>
        <q-item-main>
          <q-item-tile label><router-link :to="{ path: '/story/'+story.id }">{{story.title}}, ({{story.url | calcHost}})</router-link></q-item-tile>
          <q-item-tile sublabel><router-link :to="{ path: '/story/'+story.id }">by {{story.by}}, {{story.time | calcTime}} ago | {{story.descendants}} comments</router-link></q-item-tile>
        </q-item-main>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import { QList, QItem, QItemSide, QItemMain, QItemTile, QPagination } from 'quasar'
import { timeAgo, HACKERNEWS_STORY_URL, HACKERNEWS_ITEM_URL, host } from '../utils/common'

export default {
  name: 'item-list',
  components: {
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QPagination
  },
  data () {
    return {
      storyItems: [],
      totalItems: 0,
      page: 1,
      maxPages: 1,
      storyNumbers: []
    }
  },
  mounted: function () {
    this.fetchList()
  },
  methods: {
    fetchList: function () {
      let url = HACKERNEWS_STORY_URL + this.$route.params.section + 'stories.json'
      this.$http.get(url).then((response) => {
        this.storyNumbers = response.data
        this.totalItems = this.storyNumbers.length
        this.maxPages = Math.ceil(this.totalItems / 30)
        this.fetchItems()
      })
    },
    fetchItems: function () {
      let start = (this.page - 1) * 30
      let end = start + 30
      // Workaround due to preferential route matching in vue-router
      this.page = Number(this.$route.path.split('page/')[1]) ? Number(this.$route.path.split('page/')[1]) : this.page
      this.storyItems = []
      for (let i = start; i < end; i++) {
        if (!this.storyNumbers[i]) {
          continue
        }
        let url = HACKERNEWS_ITEM_URL + this.storyNumbers[i] + '.json'
        this.$http.get(url).then((response) => {
          if (response.data) {
            this.storyItems.push(response.data)
          }
        })
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.params.section !== from.params.section) {
        this.fetchList()
      }
      else {
        this.fetchItems()
      }
    },
    page () {
      this.$router.push({path: '/stories/' + this.$route.params.section + '/page/' + this.page})
    }
  },
  filters: {
    calcTime: timeAgo,
    calcHost: host
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
a
  color inherit !important
</style>
