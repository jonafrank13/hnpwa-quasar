<template>
  <li v-if="comment.id" class="comment">
    <div v-html="comment.text"></div>
    <div class="smaller">by {{comment.by}}, {{comment.time | calcTime}} ago
      <span v-if="open" @click="open=false" style="cursor: pointer;">, [-] hide replies</span>
      <span v-if="!open" @click="open=true" style="cursor: pointer;">, [+] show replies</span>
    </div>
    <ul class="comments" v-show="open">
      <comment-card v-for="id in comment.kids" :key="id" :id="id"></comment-card>
    </ul>
  </li>
</template>

<script>
import { timeAgo, HACKERNEWS_ITEM_URL } from '../utils/common'

export default {
  name: 'comment-card',
  props: ['id'],
  data () {
    return {
      comment: {},
      open: true
    }
  },
  mounted: function () {
    this.fetchComment()
  },
  methods: {
    fetchComment: function () {
      let url = HACKERNEWS_ITEM_URL + this.id + '.json'
      this.$http.get(url).then((response) => {
        this.comment = response.data
      })
    }
  },
  filters: {
    calcTime: timeAgo
  }
}
</script>

<style lang="stylus">
li
  text-align left
.comment div
  padding 5px 0px
p
  margin-bottom 2px
  font-size 0.9rem
  line-height normal
.smaller
  font-size 0.7rem
  border-bottom 1px solid #CCC
</style>