<template>
  <div class="m-list">
      <Control></Control>
      <ul v-for="item in listNew" v-bind:key="item.applicationNumber">
        <li class="m-list-row">
          <div>
            <span>申请单号:</span>
            <span>{{item.applicationNumber}}</span>
          </div>
          <div>
            <span>申请人:</span>
            <span>{{ item.auditor ? item.auditor[0].nickname : null}}</span>  
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
      </ul>
  </div>
</template>

<script>
import Api from "@/api/index.js";
import { mapState } from 'vuex'
import Control from '@/components/Controle.vue'

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
      listNew: 'tempList'
    })
  },
  methods: {
    overtimeType(type) {
      let hook = {
        '1': '双休日加班',
        '2': '节假日加班',
        '3': '工作日加班'
      }
      return hook[type]
    },
    reducetime(startTime, endTime) {
      //获取时间差
      let start_num = new Date(new Date(startTime).toGMTString()) * 1;
      let end_num = new Date(new Date(endTime).toGMTString()) * 1;
      let num = (end_num - start_num) / 1000;
      let day = (num / 60 / 60 / 24).toFixed(1);
      return day;
    },    
  },
  created() {
    this.$store.dispatch('initList')
  },  
};
</script>

<style scoped>
.m-list {
  margin: 0 20px;
  padding: 0;
}
.m-list-row{
  list-style-type:none;
}

</style>
