<template>
  <div id="blog-index-div">
    <el-table :data="blogDatas" border style="width: 100%">

      <el-table-column label="标题">
        <template scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column label="日期" width="180">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button size="small" @click="handleView(scope.$index, scope.row)">查看</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'blog-index',
    data () {
      return {
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
      handleView (index, row) {
        this.$router.push({name: 'blog-detail', params: {blogid: this.blogDatas[index].blogid}})
      },
      handleDelete (index, row) {
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
