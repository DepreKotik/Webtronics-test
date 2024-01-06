<template>
  <section
    class="wrapper wrapper--center-mod"
    :class="{ active: isActive, disable: !isActive }"
  >
    <div class="container">
      <dl>
        <div class="list__item">
          <dt>Name</dt>
          <dd>{{ ticket.name }}</dd>
        </div>
        <div class="list__item">
          <dt>Id</dt>
          <dd>{{ ticket.id }}</dd>
        </div>
        <div class="list__item">
          <dt>Title</dt>
          <dd>{{ ticket.title }}</dd>
        </div>
        <div class="list__item">
          <dt>Message</dt>
          <dd>{{ ticket.body }}</dd>
        </div>
        <div class="list__item">
          <dt>Date</dt>
          <dd>{{ ticket.date }}</dd>
        </div>
      </dl>
      <button-item
        :type="button"
        @click="this.$emit('closeTicket')"
        :style="{ width: '150px', margin: '20px auto 0 auto' }"
        >Close</button-item
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "popup-item",
  props: {
    isActive: {
      type: Boolean,
    },
    ticket: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.disable {
  display: none;
}

.active {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgb(237, 237, 237, 0.7);
  backdrop-filter: blur(6px);
}

.list__item {
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding: 10px;
  border-bottom: 1px solid #dbd4d4;

  @media (max-width: 769px) {
    display: block;
    border-bottom: none;
  }
}

dt {
  font-weight: 700;
  font-size: 17px;

  @media (max-width: 769px) {
    margin-bottom: 15px;
  }
}
</style>
