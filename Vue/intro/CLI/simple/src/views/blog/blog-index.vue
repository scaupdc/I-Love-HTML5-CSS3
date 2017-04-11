<template>
  <div id="blog-index-div">
    <Table border :context="self" :columns="blogColumns" :data="blogDatas"></Table>
  </div>
</template>

<script>
  export default {
    name: 'blog-index',
    data () {
      return {
        self: this,
        blogColumns: [
          {
            title: '标题',
            key: 'title',
            render (row, column, index) {
              return `<Icon type="compose"></Icon> <strong>${row.title}</strong>`;
            }
          },
          {
            title: '时间',
            key: 'time',
            width: 150,
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render (row, column, index) {
              return `<i-button type="primary" size="small" @click="blogDetail(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
            }
          }
        ],
        blogDatas: [
          {
            blogid: 1,
            title: '文章标题1',
            time: '2017-1-1 12:00'
          },
          {
            blogid: 2,
            title: '文章标题2',
            time: '2017-1-1 12:00'
          },
          {
            blogid: 3,
            title: '文章标题3',
            time: '2017-1-1 12:00'
          },
          {
            blogid: 4,
            title: '文章标题4',
            time: '2017-1-1 12:00'
          },
        ]
      }
    },
    methods: {
      blogDetail (index) {
        this.$router.push({name: 'blog-detail', params: {blogid: this.blogDatas[index].blogid}})
      },
      remove (index) {
        this.blogDatas.splice(index, 1);
      }
    }
  }
</script>

<style scoped>
  #blog-index-div {
    flex: 1;
    flex-direction: column;
  }
</style>
