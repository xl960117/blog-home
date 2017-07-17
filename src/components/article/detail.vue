<template>
  <div style="padding: 0 100px;">
    <div class="tx-c fz-24 ft-bold tc-3 m-b-20">{{ form.title }}</div>
    <div class="tx-c fz-16 tc-9d m-b-20">作者：{{ form.author }}</div>
    <div v-html="form.content"></div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        id: '',
        form: {}
      }
    },
    methods: {
      getData () {
        this.apiPost('article/detail', { id: this.id }).then((res) => {
          if (res.code == 200) {
            this.form = res.data
          } else {
            this.dealError(res)
          }
        })
      }
    },
    created () {
      this.id = this.$route.params.id
      this.getData()
    }
  }
</script>
