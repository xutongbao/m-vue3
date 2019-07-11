<template>
  <div class="m-list">
    <Control></Control>
    <ul v-for="item in tempList" v-bind:key="item.applicationNumber" class="m-list-row-wrap">
      <li class="m-list-row">
        <div class="m-list-number">
          <span>申请单号:</span>
          <span>{{item.applicationNumber}}</span>
        </div>
        <div>
          <span>申请人:</span>
          <span>{{ item.nickname}}</span>
          <span>加班类型:</span>
          <span>{{overtimeType(item.type)}}</span>
        </div>
        <div>
          <span>加班日期:</span>
          <span>{{new Date(item.startTime).toLocaleDateString()}}</span>
          <span>加班时数:</span>
          <span>{{reducetime(item.startTime, item.endTime)}}</span>
        </div>
      </li>
      <button @click="deleteItem(item.applicationNumber)">删除</button>
    </ul>
  </div>
</template>

<script>
import Api from "@/api/index.js";
import Vuex, { createNamespacedHelpers, mapState } from "vuex";
import Control from "@/components/Controle.vue";
console.log(Vuex)
export default {
  name: "list",
  data() {
    return {
    };
  },
  components: {
    Control
  },
  computed: {
    ...mapState({
      tempList: state => state.list.tempList
    })
  },
  methods: {
    overtimeType(type) {
      let hook = {
        '1': '双休日加班',
        '2': '节假日加班',
        '3': '工作日加班'
      }
      return hook[type];
    },
    reducetime(startTime, endTime) {
      //获取时间差
      let start_num = new Date(new Date(startTime).toGMTString()) * 1;
      let end_num = new Date(new Date(endTime).toGMTString()) * 1;
      let num = (end_num - start_num) / 1000;
      let day = (num / 60 / 60 / 24).toFixed(1);
      return day;
    },  
    deleteItem(applicationNumber) {
      let data = {
        applicationNumber
      }
      Api.deleteItem(data).then(() => {
        console.log('删除成功')
        this.$store.dispatch('list/initList')
      })
    }
  },
  created() {
    this.$store.dispatch('list/initList')
  }
};
</script>

<style scoped>
.m-list {
  margin: 10px 20px;
  padding: 0;
}
.m-list-row-wrap {
  margin: 0;
  padding: 0;
}
.m-list-row {
  margin: 10px 0;
  padding: 0;
  list-style-type: none;
}
</style>
