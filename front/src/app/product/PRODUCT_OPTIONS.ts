import { ControlType } from "app/shared/utils/crud-item-options/control-type.model";
import { Category, InventoryStatus } from "./interface/product.enums";

export const PRODUCT_OPTIONS = {
    code: {
      controlType: ControlType.INPUT,
      type: "text",
      key: "code",
      label: "Code",
      columnOptions: {
        sortable: true,
        filterable: true,
        default: true,
      },
    },
    name: {
      controlType: ControlType.INPUT,
      type: "text",
      key: "name",
      label: "Name",
      columnOptions: {
        sortable: true,
        filterable: true,
        default: true,
      },
    },
    description: {
      controlType: ControlType.INPUT,
      type: "text",
      key: "description",
      label: "Description",
      columnOptions: {
        sortable: true,
        filterable: true,
        default: false,
      },
    },
    image: {
      controlType: ControlType.INPUT,
      type: "text",
      key: "image",
      label: "Image",
      columnOptions: {
        sortable: false,
        filterable: false,
        default: false,
      },
    },
    price: {
      controlType: ControlType.INPUT,
      type: "number",
      key: "price",
      label: "Price",
      columnOptions: {
        sortable: true,
        filterable: true,
        default: false,
      },
    },
    category: {
      controlType: ControlType.SELECT,
      type: "text",
      key: "category",
      label: "Category",
      options: [
        Category.ACCESSORIES,
        Category.FITNESS,
        Category.CLOTHING,
        Category.ELECTRONICS,
      ].map((categorie: Category) => ({
        label: categorie,
        value: categorie,
      })),
      columnOptions: {
        sortable: true,
        filterable: true,
        default: false,
      },
    },
    quantity: {
      controlType: ControlType.INPUT,
      type: "number",
      key: "quantity",
      label: "Quantity",
      columnOptions: {
        sortable: true,
        filterable: true,
        default: false,
      },
    },
    inventoryStatus: {
      controlType: ControlType.SELECT,
      type: "text",
      key: "inventoryStatus",
      label: "Inventory Status",
      options: [
        InventoryStatus.INSTOCK,
        InventoryStatus.LOWSTOCK,
        InventoryStatus.OUTOFSTOCK,
      ].map((status: InventoryStatus) => ({
        label: status,
        value: status,
      })),
      columnOptions: {
        sortable: true,
        filterable: true,
        default: false,
      },
    },
    rating: {
      controlType: ControlType.SELECT,
      type: "number",
      key: "rating",
      label: "Rating",
      options: [...Array(6)].map((_, index: number) => ({
        label: index.toString(),
        value: index,
      })),
      columnOptions: {
        sortable: true,
        filterable: true,
        default: false,
      },
    },
  };