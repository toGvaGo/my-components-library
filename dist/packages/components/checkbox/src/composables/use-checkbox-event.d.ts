import { useFormItemInputId } from '../../../form';
import { CheckboxProps } from '../checkbox';
import { CheckboxDisabled, CheckboxModel, CheckboxStatus } from '../composables';
export declare const useCheckboxEvent: (props: CheckboxProps, { model, isLimitExceeded, hasOwnLabel, isDisabled, isLabeledByFormItem, }: Pick<CheckboxModel, "model" | "isLimitExceeded"> & Pick<CheckboxStatus, "hasOwnLabel"> & Pick<CheckboxDisabled, "isDisabled"> & Pick<ReturnType<typeof useFormItemInputId>, "isLabeledByFormItem">) => {
    handleChange: (e: Event) => void;
    onClickRoot: (e: MouseEvent) => Promise<void>;
};
