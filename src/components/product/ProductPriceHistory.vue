<template>
  <div class="span12">
    <h1><i class="fa fa-history "></i> Histórico</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Valor</th>
        <th>Data</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="historic in historicPrice">
        <td>{{historic.amount}}</td>
        <td>{{historic.dateUpdate}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: ['historicPrice']
  }
</script>
