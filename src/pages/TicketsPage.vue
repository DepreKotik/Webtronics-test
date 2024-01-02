<template>
  <section v-if="$store.state.isAuth" class="wrapper">
    <header-item></header-item>
    <div class="container">
      <title-item :style="{marginBottom: '0'}">Tickets</title-item>
      <select @change="selectOption" :style="{margin: '0 0 20px auto'}" class="profile__input">
        <option value="new">New ones first</option>
        <option value="old">Old ones first</option>
        <option value="id">By id</option>
      </select>
      <table :style="{ width: '100%' }">
        <thead>
          <tr>
            <th>Author</th>
            <th>Id</th>
            <th>Title</th>
            <th>Message</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <ticket-item
            v-for="ticket in tickets"
            :key="ticket.id"
            :ticket="ticket"
            @openTicket="openTicket"
          ></ticket-item>
        </tbody>
      </table>
    </div>
    <popup-item
      :isActive="isActive"
      :ticket="currentTicket"
      @closeTicket="closeTicket"
    ></popup-item>
  </section>
  <section v-else-if="!$store.state.isAuth">{{ $router.push("/login") }}</section>
</template>

<script>


export default {
  data: () => ({
    tickets: [],
    isActive: false,
    currentTicket: {}
  }),
  mounted() {
      fetch('https://mpc52950b346ea8978b0.free.beeceptor.com/data')
      .then(response => response.json())
      .then(json => {this.tickets = json})
      .catch(() => {
        alert('Server error')
      })
  },
  methods: {
    openTicket(ticket) {
      this.currentTicket = ticket;
      this.isActive = true;
    },
    closeTicket() {
      this.isActive = false;
    },
    selectOption(event) {
      if (event.target.value === "old") {
        this.tickets = this.tickets.sort((ticket1, ticket2) => {
          return Date.parse(ticket1.date) - Date.parse(ticket2.date)
      })
      } else if (event.target.value === "new") {
        this.tickets = this.tickets.sort((ticket1, ticket2) => {
          return Date.parse(ticket2.date) - Date.parse(ticket1.date)
          })
      } else if (event.target.value === "id") {
        this.tickets = this.tickets.sort((ticket1, ticket2) => {
          return ticket1.id - ticket2.id
          })
      }
    },
  }
};
</script>

<style>
tr {
  display: grid;
  grid-template-columns: 2fr 0.5fr 3fr 5fr 2fr 2fr;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #dbd4d4;
}

th {
  text-align: start;
}

thead tr {
  font-size: 17px;
  border-bottom: 2px solid #dbd4d4;
  padding-bottom: 15px;
}
</style>
