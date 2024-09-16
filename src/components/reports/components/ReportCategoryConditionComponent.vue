<template>
  <div v-if="subCategory" class="report-condition">
    <span>{{ subCategory.label }}</span>
    <q-select
      outlined
      v-model="condition.comparator"
      :options="subCategory.comparators"
    />
    <q-select
      v-if="subCategory.value.type === 'enum'"
      outlined
      class="report-value"
      v-model="condition.value"
      :options="subCategory.value.options"
      :optionLabel="subCategory.value.optionLabel"
    />
    <q-input
      v-else-if="subCategory.value.type === 'date'"
      outlined
      class="report-value"
      v-model="condition.value"
      mask="date"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date minimal v-model="condition.value"> </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input v-else outlined class="report-value" v-model="condition.value" />
    <q-btn
      round
      color="red"
      size="xs"
      icon="close"
      @click="reportStore.deleteConditionByIdx(conditionIdx)"
    />
  </div>
</template>

<script setup lang="ts">
import { ReportCategory } from 'components/reports/interfaces/report-category.interface';
import { storeToRefs } from 'pinia';
import useReportStore from 'src/stores/reports';
import { computed } from 'vue';

const props = defineProps<{
  category: ReportCategory;
  conditionIdx: number;
}>();

const reportStore = useReportStore();
const { conditionByIdx } = storeToRefs(reportStore);

const condition = computed(() => conditionByIdx.value(props.conditionIdx));
const subCategory = computed(() => {
  return props.category.subs[condition.value.subCategoryName];
});
</script>

<style scoped>
.report-condition {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.report-value {
  width: 100%;
}

:deep(.q-field__native),
:deep(.q-field__marginal),
:deep(.q-field__control) {
  height: 30px !important;
  min-height: 30px !important;
  font-size: 15px;
}
</style>
