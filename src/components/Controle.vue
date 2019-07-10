<template>
	<div>
		<button @click="handleAll()">全部加班</button>
        <button @click="handleFilterType(1)">双休日加班</button>
		<button @click="handleFilterType(2)">节假日加班</button>
		<button @click="handleFilterType(3)">工作日加班</button>
	</div>
</template>

<script type="text/javascript">

export default {
	name: 'Control',
	methods: {
		handleAll() {
			this.$store.commit('all')
        },
        handleFilterType(type) {
            this.$store.commit('filter', type)
        }
	}
}
</script>