import { useForm, Controller, useFieldArray, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Card, FormLayout, Select, TextField } from '@shopify/polaris';

import { useStores } from '../../store/RootStore';
import { type } from '../../store/ToastStore';

import FormSearchProducts, { TGetProducts } from './ProductsSearch';

import { T_HOOK_FORM_CREATE, ENUM_FIELDS, schemaCreate, Priorities, Products } from './consts';

const Dashboard = () => {
    const { toastStore } = useStores();
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<T_HOOK_FORM_CREATE>({
        resolver: yupResolver(schemaCreate),
        defaultValues: {
            [ENUM_FIELDS.transfer_order_item]: [
                {
                    product_id: 0,
                    quantity: 0,
                    reason_code: '',
                },
            ],
        },
    });
    const { fields, append, remove } = useFieldArray({
        name: ENUM_FIELDS.transfer_order_item,
        control,
    });

    const handleToast = () => {
        toastStore.openToast('Mo len ban', type.error);
    };

    const handleDataProduct = (data: TGetProducts[]) => {
        console.log('data handleDataProduct: ', data);
    };

    const onSubmit: SubmitHandler<T_HOOK_FORM_CREATE> = (data: any) => {
        console.log('data SubmitHandler: ', data);
    };

    // console.log('errors: ', errors);
    // console.log('control: ', control._fields);

    return (
        <div>
            <h1>Dashboard</h1>

            <button onClick={handleToast} style={{ cursor: 'pointer' }}>
                Show Toast
            </button>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Card title="Products transfer">
                    <Card.Section>
                        <FormLayout>
                            <FormLayout.Group condensed>
                                <Controller
                                    name={ENUM_FIELDS.priority_id}
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            onChange={field.onChange}
                                            value={field.value?.toString()}
                                            label="Priority"
                                            options={Priorities}
                                            error={errors[ENUM_FIELDS.priority_id]?.message}
                                        />
                                    )}
                                />
                            </FormLayout.Group>
                        </FormLayout>
                    </Card.Section>
                    <Card.Section>
                        <FormLayout>
                            {fields.map((field_item, index) => {
                                return (
                                    <FormLayout.Group key={field_item.id} condensed>
                                        <div>
                                            <div>
                                                <FormSearchProducts
                                                    index={index}
                                                    errors={errors}
                                                    control={control}
                                                    handleDataProduct={handleDataProduct}
                                                    name={ENUM_FIELDS.transfer_order_item}
                                                />
                                                {/* <Controller
                                                    name={ENUM_FIELDS.transfer_order_item}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            value={field.value[index]?.product_id.toString()}
                                                            options={Products}
                                                            onChange={selected => {
                                                                let new_arr = [...field.value];
                                                                new_arr[index].product_id = Number(selected);
                                                                field.onChange(new_arr);
                                                            }}
                                                            error={errors[ENUM_FIELDS.transfer_order_item]?.[index]?.product_id?.message}
                                                            label="Roles"
                                                            labelHidden
                                                        />
                                                    )}
                                                />
                                                <Controller
                                                    name={ENUM_FIELDS.transfer_order_item}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            value={field.value[index]?.quantity.toString()}
                                                            options={Products}
                                                            onChange={selected => {
                                                                let new_arr = [...field.value];
                                                                new_arr[index].quantity = Number(selected);
                                                                field.onChange(new_arr);
                                                            }}
                                                            error={errors[ENUM_FIELDS.transfer_order_item]?.[index]?.quantity?.message}
                                                            label="Roles"
                                                            labelHidden
                                                        />
                                                    )}
                                                /> */}
                                            </div>
                                            {index > 0 && (
                                                <div className="ml-5">
                                                    <Button plain destructive onClick={() => remove(index)}>
                                                        DELETE
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </FormLayout.Group>
                                );
                            })}
                        </FormLayout>
                        <br />
                        <div className="mt-3">
                            <Button
                                size="slim"
                                onClick={() => {
                                    append({
                                        product_id: 0,
                                        quantity: 0,
                                        reason_code: '',
                                    });
                                }}
                            >
                                Add new product
                            </Button>
                        </div>
                    </Card.Section>
                    <br />
                    <br />
                    <input type="Submit" style={{ padding: '5px', fontSize: '30px' }} />
                    {/* <Button size="large">Submit</Button> */}
                </Card>
            </form>
        </div>
    );
};

export default Dashboard;
