<template>
  <q-list bordered class="rounded-borders report-stepper">
    <div v-for="(category, idx) in reportCategories" :key="idx">
      <!-- TODO: :default-opened="idx === 0" -->
      <q-expansion-item group="category-group">
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white" size="md">
              {{ idx + 1 }}
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <div class="text-subtitle1">{{ category.label }}</div>
          </q-item-section>
        </template>
        <report-category-card-component :category="category" />
      </q-expansion-item>
      <q-separator />
    </div>
  </q-list>
</template>

<script setup lang="ts">
import { reportCategories } from 'components/reports/constants/report-category.constant';
import ReportCategoryCardComponent from './ReportCategoryCardComponent.vue';
</script>

<style scoped>
.report-stepper {
  height: 100%;
}
</style>
