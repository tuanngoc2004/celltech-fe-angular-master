// interface FormLayoutItem {
//     id: string;
//     caption: string;
//     code: string;
//     placeHolder: string | null;
//     component: string;
//     componentText: string;
//     description: string | null;
//     settings: any | null; // Thay any bằng kiểu dữ liệu cụ thể nếu có thể
//   }
  
//   interface FormLayout {
//     formLayout: FormLayoutItem[][];
//     actionLayout: {
//       top: any[];
//       bottom: FormLayoutItem[];
//     };
//   }
  
//   interface SettingForm {
//     id: string;
//     name: string;
//     settings: FormLayout;
//   }
  
//   interface SettingFieldComponent {
//     settings: any; // Thay any bằng kiểu dữ liệu cụ thể nếu có thể
//     caption: string;
//     component: string;
//     componentText: string;
//     componentType: string;
//     ordinalPosition: number;
//     parent: string;
//     parentText: string;
//     parentType: string;
//     tableId: string;
//     tableName: string;
//     id: string;
//     code: string;
//     name: string;
//     description: string | null;
//     created: any | null;
//     createdByText: string | null;
//     createdBy: string | null;
//     modified: any | null;
//     modifiedByText: string | null;
//     modifiedBy: string | null;
//     version: number;
//   }
  
//   interface Data {
//     settingForm: SettingForm;
//     tableId: string;
//     tableName: string;
//   }
  
//   interface RootObject {
//     data: Data;
//     settingFieldComponents: SettingFieldComponent[];
// }
  
  