<template>
  <tr>
    <th>{{ticket.name}}</th>
    <th>{{ticket.id}}</th>
    <th>{{ticket.title}}</th>
    <th>{{`${ticket.body.slice(0, 40)}...`}}</th>
    <th>{{ticket.date}}</th>
    <th>
      <button-item :style="{margin: '0'}" @click="this.$emit('openTicket', ticket)">Details</button-item>
    </th>
  </tr>
  
</template>

<script>
export default {
  name: 'ticket-item',
  data: () => ({
  }),
  props: {
    ticket: {
      type: Object
    }
  }
}
</script>

<style scoped>
th {
  font-weight: 400;
}
</style>
