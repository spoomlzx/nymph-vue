<template>
    <add-edit :is-edit="false"/>
</template>

<script>
  import AddEdit from './AddEdit'

  export default {
    name: 'AddForm',
    components: { AddEdit }
  }
</script>
