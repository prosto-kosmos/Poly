<template>
  <q-card flat bordered class="q-pa-sm report-preview">
    <div class="report-preview-list">
      <slot v-if="!submitDisabled()">
        <div
          v-for="([value, condition], idx) in getConditions()"
          :key="idx"
          class="report-condition"
        >
          <div class="report-condition-value" :title="value">
            {{ value }}
          </div>
          <q-btn
            round
            color="red"
            size="xs"
            icon="close"
            @click="reportStore.deleteCondition(condition)"
          />
        </div>
      </slot>
      <div v-if="submitDisabled()" class="report-empty-list">
        <span v-if="!getConditions().length">
          {{ 'Добавьте минимум одно условие' }}
        </span>
        <span v-if="!departments.length">
          {{ 'Добавьте минимум одно подразделение' }}
        </span>
      </div>
    </div>
    <q-btn
      color="primary"
      size="md"
      label="Сформировать Отчет"
      :disable="submitDisabled()"
      @click="reportStore.submit()"
    />
  </q-card>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reportCategories } from 'src/components/reports/constants/report-category.constant';
import { ReportSubCategoryName } from 'src/components/reports/enums/report-sub-category-name.enum';
import {
  ReportCategory,
  ReportSubCategory,
} from 'src/components/reports/interfaces/report-category.interface';
import { ReportCondition } from 'src/components/reports/interfaces/report-query.interface';
import useReportStore from 'src/stores/reports';

const reportStore = useReportStore();
const { conditionsByName, departments } = storeToRefs(reportStore);

const getConditionRow = (
  condition: ReportCondition,
  category: ReportCategory,
  subCategory: ReportSubCategory
): string => {
  const value =
    subCategory.value.type === 'enum' && subCategory.value.optionLabel
      ? subCategory.value.optionLabel(condition.value as string)
      : condition.value || '';

  return `${category.label}.${subCategory.label} ${condition.comparator} ${value}`;
};

const getConditions = (): [string, ReportCondition][] => {
  const sortedConditions: [string, ReportCondition][] = [];
  reportCategories.forEach((category) => {
    Object.entries(category.subs).forEach(([subCategoryKey, subCategory]) => {
      conditionsByName
        .value(subCategoryKey as ReportSubCategoryName)
        .forEach((condition) => {
          sortedConditions.push([
            getConditionRow(condition, category, subCategory),
            condition,
          ]);
        });
    });
  });
  return sortedConditions;
};

const submitDisabled = (): boolean => {
  return !getConditions().length || !departments.value.length;
};
</script>
<style scoped>
.report-preview {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.report-preview-list {
  overflow: auto;
  height: 100%;
}

.report-empty-list {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.6;
}

.report-condition {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 3px;
  padding-bottom: 3px;
}

.report-condition-value {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
