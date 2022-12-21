import * as yup from 'yup';

export enum ENUM_FIELDS {
    company_id = 'company_id',
    owner_id = 'owner_id',
    from_warehouse_id = 'from_warehouse_id',
    to_warehouse_id = 'to_warehouse_id',
    product_id = 'product_id',

    status_id = 'status_id',
    priority_id = 'priority_id',
    verified_date = 'verified_date',
    verified_by = 'verified_by',
    approved_date = 'approved_date',
    approved_by = 'approved_by',
    pickup_date = 'pickup_date',
    delivery_date = 'delivery_date',
    reason_code = 'reason_code',
    description = 'description',
    outbound_order_id = 'outbound_order_id',
    outbound_order_number = 'outbound_order_number',
    inbound_shmt_id = 'inbound_shmt_id',
    inbound_shmt_number = 'inbound_shmt_number',
    transfer_order_item = 'transfer_order_item',
    transfer_order_item_id = 'transfer_order_item_id',
    quantity = 'quantity',
    delivered_quantity = 'delivered_quantity',
    received_quantity = 'received_quantity',
    outbound_order_item_id = 'outbound_order_item_id',
    inbound_shmt_item_id = 'inbound_shmt_item_id',
}

type TransferOrderItemCreate = {
    [ENUM_FIELDS.product_id]: number;
    [ENUM_FIELDS.quantity]: number;
    [ENUM_FIELDS.reason_code]?: string;
};

export type T_HOOK_FORM_CREATE = {
    [ENUM_FIELDS.company_id]: number;
    [ENUM_FIELDS.owner_id]: number;
    [ENUM_FIELDS.from_warehouse_id]: number;
    [ENUM_FIELDS.to_warehouse_id]: number;
    [ENUM_FIELDS.priority_id]: number;
    [ENUM_FIELDS.reason_code]: string;
    [ENUM_FIELDS.description]?: string;
    [ENUM_FIELDS.transfer_order_item]: TransferOrderItemCreate[];
};

export const schemaCreate = yup.object().shape({
    [ENUM_FIELDS.priority_id]: yup.number().label('Priority').required(),
    [ENUM_FIELDS.transfer_order_item]: yup.array<TransferOrderItemCreate>(
        yup.object({
            [ENUM_FIELDS.product_id]: yup.number().label('Product').required().min(1),
            [ENUM_FIELDS.quantity]: yup.number().label('Quantity').required().min(1),
        }),
    ),
});

export type OptionsData = {
    label: string;
    value: string;
};

export const Priorities: OptionsData[] = [
    { label: '--- Select Priority ---', value: '0' },
    { label: 'Normal', value: '1' },
    { label: 'High', value: '2' },
];

export const Products = [
    { label: '--- Select Product ---', value: '0' },
    { label: 'May tinh', value: '1' },
    { label: 'Dien thoai', value: '2' },
    { label: 'Dong ho', value: '3' },
];
