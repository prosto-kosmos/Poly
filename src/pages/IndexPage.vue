<template>
  <report-dashboard-component></report-dashboard-component>
</template>

<script lang="ts">
import ReportDashboardComponent from 'components/reports/components/ReportDashboardComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ReportDashboardComponent },
});
</script>
