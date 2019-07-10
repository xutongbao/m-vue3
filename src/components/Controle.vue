<template>
	<div>
		<button @click="handleAll()">全部加班</button>
        <button @click="handleFilter(1)">双休日加班</button>
		<button @click="handleFilter(2)">节假日加班</button>
		<button @click="handleFilter(3)">工作日加班</button>
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
			this.$store.commit('list/all')
        },
        handleFilter(type) {
            this.$store.commit('list/filter', type)
        }
	}
}
</script>