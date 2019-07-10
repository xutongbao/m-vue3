<template>
  <div class="m-list">
      <ul v-for="item in listNew" v-bind:key="item.applicationNumber">
        <li class="m-list-row">
          <div>
            <span>申请单号:</span>
            <span>{{item.describes}}</span>
          </div>
          <div>
            <span>申请人:</span>
            <span>{{item.describes}}</span>   
            <span>加班类型:</span>
            <span>{{item.describes}}</span>                      
          </div>
          <div>
            <span>加班日期:</span>
            <span>{{item.describes}}</span>   
            <span>加班时数:</span>
            <span>{{item.describes}}</span>              
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import Api from "@/api/index.js";
import { mapState } from 'vuex'

export default {
  name: "list",
  data() {
    return {
      list: []
    };
  },
  computed: {
    ...mapState({
      listNew: 'list'
    })
  },
  methods: {
  },
  created() {
    console.log('created')
    this.$store.dispatch('initList')
    Api.getList('?type=2').then((res) => {
      console.log(res.data)
      this.list = res.data
    })
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
