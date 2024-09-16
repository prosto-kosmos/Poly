<template>
  <q-card bordered class="q-ma-sm">
    <q-card-section class="row justify-between items-center q-py-sm">
      <div class="text-subtitle2">
        {{
          category.description || `Условия для параметра «${category.label}»`
        }}
      </div>
      <q-btn round color="primary" size="sm" icon="add">
        <q-menu>
          <q-list style="min-width: 150px">
            <q-item
              clickable
              v-close-popup
              v-for="(
                [subCategoryName, subCategory], idx
              ) in getSubCategoryEntries(category)"
              :key="idx"
              @click="
                reportStore.addCondition(
                  subCategoryName,
                  subCategory.value.default
                )
              "
            >
              <q-item-section>
                {{ subCategory.label }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-card-section>
    <q-separator inset />

    <q-card-section class="report-conditions">
      <slot v-for="(condition, idx) in conditions">
        <report-category-condition-component
          v-if="hasSubCategory(condition.subCategoryName, category)"
          :key="idx"
          :category="category"
          :conditionIdx="idx"
        />
      </slot>
      <div
        v-if="noConditionsForCategory(category)"
        class="report-empty-conditions"
      >
        {{ `Добавьте новое условие для параметра «${category.label}»` }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import {
  ReportCategory,
  ReportSubCategory,
} from 'components/reports/interfaces/report-category.interface';
import { storeToRefs } from 'pinia';
import ReportCategoryConditionComponent from './ReportCategoryConditionComponent.vue';
import useReportStore from 'src/stores/reports';
import { ReportSubCategoryName } from 'src/components/reports/enums/report-sub-category-name.enum';

defineProps<{
  category: ReportCategory;
}>();

const getSubCategoryEntries = (category: ReportCategory) => {
  return Object.entries(category.subs) as [
    ReportSubCategoryName,
    ReportSubCategory
  ][];
};

const hasSubCategory = (
  subCategoryName: ReportSubCategoryName,
  category: ReportCategory
) => {
  return Object.keys(category.subs).includes(subCategoryName);
};

const noConditionsForCategory = (category: ReportCategory) => {
  const allNames = Object.keys(category.subs) as ReportSubCategoryName[];
  const existNames = conditions.value.map((c) => c.subCategoryName);
  return !allNames.some((name) => existNames.includes(name));
};

const reportStore = useReportStore();
const { conditions } = storeToRefs(reportStore);
</script>

<style scoped>
.report-conditions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.report-empty-conditions {
  display: flex;
  justify-content: center;
  opacity: 0.6;
}
</style>
