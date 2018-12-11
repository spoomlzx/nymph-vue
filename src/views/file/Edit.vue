<template>
    <add-edit :is-edit="true"/>
</template>

<script>
  import AddEdit from './AddEdit'

  export default {
    name: 'EditForm',
    components: { AddEdit }
  }
</script>
