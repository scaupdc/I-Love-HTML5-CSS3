<template>
  <div id="article">
    <ul>
      <li v-for="article in articleList">
        <router-link :to="{name:'article-detail',params:{id:article.id,model:article}}">
          <span>{{article.id}}</span>
          <span>{{article.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'article',
    data(){
      return {
        articleList: []
      }
    },
    created(){
      this.articleList = [
        {id: 1, title: 'title1', content: 'article detail 1', time: '2017-1-1'},
        {id: 2, title: 'title2', content: 'article detail 2', time: '2017-1-2'},
        {id: 3, title: 'title3', content: 'article detail 3', time: '2017-1-3'}
      ]
    }
  }
</script>

<style lang="css" scoped>
  ul {
    list-style-type: none;
    height: 40px;
  }
</style>
