<template>
  <form :class="formClasses">
    <slot />
  </form>
</template>
<script lang="ts" setup>
import { computed, provide, reactive, toRefs, watch } from 'vue';
import { debugWarn, isFunction } from '@/utils';
import { useNamespace } from '@/hooks';
import { useFormSize } from './hooks';
import { formContextKey } from './constants';
import { formEmits, formProps } from './form';
import { filterFields, useFormLabelWidth } from './utils';

import type { ValidateFieldsError } from 'async-validator';
import type { Arrayable } from '@/utils';
import type {
  FormContext,
  FormItemContext,
  FormItemRule,
  FormValidateCallback,
  FormValidationResult,
} from './types';
import type { FormItemProp } from './form-item';
import { filter } from 'lodash-unified';
import { M } from 'vite/dist/node/types.d-aGj9QkWt';

const COMPONENT_NAME = 'GpForm';
defineOptions({
  name: COMPONENT_NAME,
});
const props = defineProps(formProps);
const emit = defineEmits(formEmits);
const fields: FormItemContext[] = [];

const formSize = useFormSize();
const ns = useNamespace('form');

const formClasses = computed(() => {
  const { labelPosition, inline } = props;
  return [
    ns.b(),
    ns.m(formSize.value || 'default'),
    {
      [ns.m(`label-${labelPosition}`)]: labelPosition,
      [ns.m('inline')]: inline,
    },
  ];
});

const getField: FormContext['getField'] = (prop) => {
  return fields.find((field) => field.prop === prop);
};

const addField: FormContext['addField'] = (field) => {
  fields.push(field);
};

const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1);
  }
};

const resetFields: FormContext['resetFields'] = (properties = []) => {
  if (!props.model) {
    debugWarn(COMPONENT_NAME, 'model is required for resetFields to work.');
    return;
  }
  filterFields(fields, properties).forEach((field) => field.resetField());
};

const clearValidate: FormContext['clearValidate'] = (props = []) => {
  filterFields(fields, props).forEach((field) => field.clearValidate());
};

const isValidatable = computed(() => {
  const hasModel = !!props.model;
  if (!hasModel) {
    debugWarn(COMPONENT_NAME, 'model is required for resetFields to work.');
  }
  return hasModel;
});
const obtainValidateFields = (props: Arrayable<FormItemProp>) => {
  if (fields.length === 0) return [];

  const filteredFields = filterFields(fields, props);
  if (!filteredFields.length) {
    debugWarn(COMPONENT_NAME, 'please pass correct props');
    return [];
  }

  return filteredFields;
};

const validate = async (
  callback?: FormValidateCallback
): FormValidationResult => validateField(undefined, callback);

const doValidateField = async (
  props: Arrayable<FormItemProp> = []
): Promise<boolean> => {
  if (!isValidatable.value) return false;

  const fields = obtainValidateFields(props);
  if (fields.length === 0) return true;

  let validationErrors: ValidateFieldsError = {};
  for (const field of fields) {
    try {
      await field.validate('');
    } catch (fields) {
      validationErrors = {
        ...validationErrors,
        ...(fields as ValidateFieldsError),
      };
    }
  }

  if (Object.keys(validationErrors).length === 0) return true;
  return Promise.reject(validationErrors);
};

const validateField: FormContext['validateField'] = async (
  modelProps = [],
  callback
) => {
  const shouldThrow = !isFunction(callback);
  try {
    const result = await doValidateField(modelProps);

    if (result === true) {
      await callback?.(result);
    }

    return result;
  } catch (e) {
    if (e instanceof Error) throw e;

    const invalidFields = e as ValidateFieldsError;

    if (props.scrollToError) {
      scrollToField(Object.keys(invalidFields)[0]);
    }
    await callback?.(false, invalidFields);
    return shouldThrow && Promise.reject(invalidFields);
  }
};

const scrollToField = (prop: FormItemProp) => {
  const field = filterFields(fields, prop)[0];
  if (field) {
    field.$el?.scrollIntoView(props.scrollIntoViewOptions);
  }
};

watch(
  () => props.rules,
  () => {
    if (props.validateOnRuleChage) {
      validate().catch((err) => debugWarn(err));
    }
  },
  { deep: true }
);

provide(
  formContextKey,
  reactive({
    ...toRefs(props),
    emit,
    resetFields,
    clearValidate,
    validateField,
    getField,
    addField,
    removeField,

    ...useFormLabelWidth(),
  })
);

defineExpose({
  validate,
  validateField,
  resetFields,
  clearValidate,
  scrollToField,
  fields,
});
</script>
