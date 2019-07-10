<template>
	<div>
		<button @click="handleAll()">全部加班</button>
        <button @click="handleFilterType(1)">双休日加班</button>
		<button @click="handleFilterType(2)">节假日加班</button>
		<button @click="handleFilterType(3)">工作日加班</button>
		<button @click="handleAdd()">添加</button>
	</div>
</template>

<script type="text/javascript">
import Api from '@/api/index.js'

function getID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

export default {
	name: 'Control',
	methods: {
		handleAll() {
			this.$store.commit('all')
        },
        handleFilterType(type) {
            this.$store.commit('filter', type)
		},
		handleAdd() {
			let data = {
				applicationNumber: getID(6)
			}
			Api.addItem(data).then((res) => {
				console.log('添加')
				this.$store.dispatch("initList");
			})
		}
	}
}
</script>