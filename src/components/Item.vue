<template>
  <div class="story-container">
    <q-card v-if="itemData.id" inline>
      <q-card-title><a target="_blank" :href="itemData.url">{{itemData.title}}, ({{itemData.url | calcHost}})</a></q-card-title>
      <q-card-main>
        <p>by {{itemData.by}}, {{itemData.time | calcTime}} ago</p>
      </q-card-main>
    </q-card>
    <ul class="comments">
      <comment-card v-for="id in itemData.kids" :key="id" :id="id"></comment-card>
    </ul>
  </div>
</template>
<script>
import { QCard, QCardMain, QCardTitle } from 'quasar'
import { timeAgo, HACKERNEWS_ITEM_URL, host } from '../utils/common'
import CommentCard from './CommentCard.vue'

export default {
  name: 'item',
  components: {
    QCard,
    QCardMain,
    QCardTitle,
    CommentCard
  },
  data () {
    return {
      id: 1,
      itemData: {}
    }
  },
  mounted: function () {
    this.fetchItem()
  },
  methods: {
    fetchItem: function () {
      let url = HACKERNEWS_ITEM_URL + this.$route.params.id + '.json'
      this.$http.get(url).then((response) => {
        this.itemData = response.data
      })
    }
  },
  filters: {
    calcTime: timeAgo,
    calcHost: host
  }
}
</script>

<style lang="stylus">
.story-container
  padding 5px
.comments
  list-style none
  max-width 100vw
  overflow auto
  font-size 0.9rem
  padding-left 5vw
</style>