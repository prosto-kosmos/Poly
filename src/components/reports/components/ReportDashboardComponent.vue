<template>
  <div class="report-dashboard">
    <q-card flat bordered class="report-header q-pa-sm">
      <span class="text-h6"> Конструктор Отчетов </span>
    </q-card>
    <div class="report-container">
      <div class="report-department-tree">
        <report-department-tree-component />
      </div>
      <div class="report-stepper">
        <report-stepper-component />
      </div>
      <div class="report-preview">
        <report-preview-component />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReportStepperComponent from 'components/reports/components/ReportStepperComponent.vue';
import ReportPreviewComponent from 'components/reports/components/ReportPreviewComponent.vue';
import ReportDepartmentTreeComponent from 'components/reports/components/ReportDepartmentTreeComponent.vue';
</script>

<style scoped>
.report-dashboard {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.report-header {
  text-align: center;
}

.report-container {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.report-department-tree {
  min-width: 30%;
}

.report-stepper {
  min-width: 40%;
}

.report-preview {
  min-width: 30%;
}
</style>
