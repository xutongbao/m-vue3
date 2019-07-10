<template>
	<div>
		<button @click="handleAll()">全部数据</button>
        <button @click="handleFilter()">过滤后的数据</button>
	</div>
</template>

<script type="text/javascript">

export default {
	name: 'Control',
	methods: {
		handleAll() {
			this.$store.commit('all')
        },
        handleFilter() {
            this.$store.commit('filter')
        }
	}
}
</script>