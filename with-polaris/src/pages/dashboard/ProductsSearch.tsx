/* eslint-disable react-hooks/exhaustive-deps */
import { Autocomplete, FormLayout, TextField, Select } from '@shopify/polaris';
import { useState, useEffect, memo } from 'react';
import { Control, Controller } from 'react-hook-form';

import { ENUM_FIELDS } from './consts';

const ReasonCode = [
    { label: '--- Select reason ---', value: '0' },
    { label: 'Hàng bán chạy', value: '1' },
    { label: 'Hàng mới', value: '2' },
];

export type TGetProducts = {
    product_id: number;
    quantity: number;
    reason_code?: string;
};
type Props = {
    index: number;
    errors: any;
    name: string;
    handleDataProduct: (data: TGetProducts[]) => void;
    control: Control<any, any>;
};

const nameActions = {
    changeProductId: 'changeProductId',
    changeQuantity: 'changeQuantity',
    changeReasonCode: 'changeReasonCode',
};
const getProducts: TGetProducts[] = [];
const FormSearchProducts = (props: Props) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<any>([]);

    // const [getProducts, setGetProducts] = useState<TGetProducts[]>(initState);

    const { name, index, control, errors, handleDataProduct } = props;

    const handleGetDataProduct = (data: number | string, index: number, type: string) => {
        if (!getProducts[index]) {
            getProducts.push({
                product_id: 0,
                quantity: 0,
                reason_code: '',
            });
        }
        switch (type) {
            case nameActions.changeProductId:
                getProducts[index].product_id = Number(data);
                break;
            case nameActions.changeQuantity:
                getProducts[index].quantity = Number(data);
                break;
            case nameActions.changeReasonCode:
                getProducts[index].reason_code = data.toString();
                break;
        }
        handleDataProduct(getProducts);
    };

    const updateSelection = (selected: any) => {
        const selectedValue = selected.map((selectedItem: any) => {
            const matchedOption = options.find((option: any) => {
                return option.value === selectedItem;
            });
            return matchedOption && matchedOption.label;
        });
        setSelectedOptions(selected);
        return selectedValue;
    };

    return (
        <FormLayout>
            <FormLayout.Group>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Product"
                            value={field.value[index]?.product_id.toString()}
                            onChange={e => {
                                // handleGetDataProduct(e, index, nameActions.changeQuantity);
                                let new_arr = [...field.value];
                                new_arr[index].product_id = Number(e);
                                field.onChange(new_arr);
                            }}
                            autoComplete="off"
                            error={errors[name]?.[index]?.product_id?.message}
                        />
                    )}
                />

                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <TextField
                            label="Quantity"
                            type="number"
                            // value={field.value[index]?.quantity.toString()}
                            value={field.value[index].quantity.toString()}
                            onChange={e => {
                                // field.onChange(e);
                                // handleGetDataProduct(e, index, nameActions.changeQuantity);
                                console.log('e: ', e);
                                let new_arr = [...field.value];
                                new_arr[index].quantity = Number(e);
                                field.onChange(new_arr);
                            }}
                            autoComplete="off"
                            error={errors[name]?.[index]?.quantity?.message}
                        />
                    )}
                />

                {/* <Controller
                    name={`${nameIndex}.reason_code`}
                    control={control}
                    render={({ field }) => (
                        <Select
                            onChange={e => {
                                field.onChange(e);
                                handleGetDataProduct(e[0], index, nameActions.changeReasonCode);
                            }}
                            value={field.value}
                            label="Reason"
                            options={ReasonCode}
                        />
                    )}
                /> */}
            </FormLayout.Group>
        </FormLayout>
    );
};

export default memo(FormSearchProducts);
