<template>
	<div>
		<button @click="handleFilter('all')">全部加班</button>
        <button @click="handleFilter(1)">双休日加班</button>
		<button @click="handleFilter(2)">节假日加班</button>
		<button @click="handleFilter(3)">工作日加班</button>
		<el-button @click="handleShow()">添加</el-button>

		<el-dialog
		title="添加"
		:visible.sync="dialogVisible"
		width="300px"
		:before-close="handleClose">
		<el-input v-model="nickname" placeholder="请输入姓名"></el-input>
		<span slot="footer" class="dialog-footer">
			<el-button @click="handleClose()">取 消</el-button>
			<el-button type="primary" @click="handleAdd()">确 定</el-button>
		</span>
		</el-dialog>		
	</div>
</template>

<script type="text/javascript">
import Api from '@/api/index.js'

function getID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

export default {
	name: 'Control',
    data() {
      return {
		dialogVisible: false,
		nickname: ''
      };
    },	
	methods: {
        handleFilter(type) {
            this.$store.commit('list/filter', type)
		},
		handleShow() {
			this.dialogVisible = true
			this.nickname = ''
		},
		handleClose() {
			this.dialogVisible = false
		},
		handleAdd() {
			let data = {
				applicationNumber: getID(6),
				nickname: this.nickname
			}
			Api.addItem(data).then(() => {
				this.dialogVisible = false
				this.$store.dispatch('list/initList')
			})
		}
	}
}
</script>