<template>
  <q-card flat bordered class="q-pa-sm report-departments">
    <q-tree
      class="col-12 col-sm-6"
      :nodes="departmentTree"
      node-key="id"
      tick-strategy="leaf"
      v-model:ticked="reportQuery.departments"
      v-model:expanded="expanded"
    />
  </q-card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useReportStore from 'src/stores/reports';
import { onMounted, ref } from 'vue';

const reportStore = useReportStore();
const { departmentTree, reportQuery } = storeToRefs(reportStore);

const expanded = ref<number[]>([]);

onMounted(async () => {
  await reportStore.loadDepartmentTree();
  reportStore.tickAllDepartments();
  expanded.value = departmentTree.value.map((department) => department.id);
});
</script>
<style scoped>
.report-departments {
  height: 100%;
}
</style>
