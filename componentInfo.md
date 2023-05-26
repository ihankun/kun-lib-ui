1、血库Tab组件（输血申请单、输血信息打印、大量用血审批、输血观察记录、输血不良反应上报、输血疗效评价、血袋回收）
 原路径：msun-core-business/packages/bis-apply-tab/src/bis-apply-tab.vue
 新路径：import {bisApplyTab} from "msun-lib-pbr-business"
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历、护士站
 #### 血库组件  
        1. 传参 {patId:-1,patInHosId:-1,registerId,patTypeId:1,applySource:1,saveSource,componentId}
        2. componentId 页面显示相应的单组件  
        
        componentId='apply-form'//申请单
            componentId='transfusion-print' //输血信息打印
            componentId='transfusion-record'//输血观察记录
            componentId='bad-reaction'//输血不良反应上报
            componentId='mass-approval'//大量用血审批
        componentId='evaluate'//输血疗效评价
            componentId='retrieve'//血袋回收
2、血库360视图输血记录
 原路径：msun-core-business/packages/bis-view360/src/bis-view360.vue
 新路径：import {bisView360} from "msun-lib-pbr-business"
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历
 
 3.病理申请单
 原路径：
 import PisApplyInfo from 'msun-core-business/packages/pis-apply-info/src/pis-apply-info.vue';
 新路径：import { pisApplyInfo } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历，手麻
 
 4.病理Tab（申请单、病理报告、标本离体、标本固定、标本送检）
 原路径：
 import PisApplyTab from 'msun-core-business/packages/pis-apply-tab/src/pis-apply-tab.vue';
 新路径：import { pisApplyTab } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历，手麻
 
 5.病理条码打印
 原路径：
 import pisBarcodePrint from 'msun-core-business/packages/pis-barcode-print/src/pis-barcode.vue';
 新路径：import { pisBarcodePrint } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历、护士站

 6.病理打印设置
 原路径：
 import pisPrintSetting from 'msun-core-business/packages/pis-print-setting/src/pis-print-setting.vue';
 新路径：import { pisPrintSetting } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历、护士站

7.病理标本接收
 原路径：
 import pisSampleAccept from 'msun-core-business/packages/pis-sample-accept/src/pis-sample-accept.vue';
 新路径：import { pisSampleAccept } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历、护士站

 8.病理标本固定
 原路径：
 import pisSampleFixed from 'msun-core-business/packages/pis-sample-fixed/src/pis-sample-fixed.vue';
 新路径：import { pisSampleFixed } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历、护士站

 9.病理标本离体
 原路径：
 import pisSampleLeave from 'msun-core-business/packages/pis-sample-leave/src/pis-sample-leave.vue';
 新路径：import { pisSampleLeave } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历、护士站

10.病理标本发送
 原路径：
 import pisSampleSend from 'msun-core-business/packages/pis-sample-send/src/pis-sample-send.vue';
 新路径：import { pisSampleSend } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历、护士站

 11.康复申请单tab
 原路径：
 import rmsApplyTab from 'msun-core-business/packages/rms-apply-tab/src/rms-apply-tab.vue';
 新路径：import { rmsApplyTab } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：住院电子病历

 12.康复消息通知
 原路径：
 import rmsMessage from 'msun-core-business/packages/rms-message/src/rms-message.vue';
 新路径：import { rmsMessage } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：住院电子病历

 13.康复门诊申请单
 原路径：
 import rmsNursForm from 'msun-core-business/packages/rms-nurs-form/src/rms-nurs-form.vue';
 新路径：import { rmsNursForm } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：门诊电子病历

  14.康复报告记录
 原路径：
 import rmsReportRecord from 'msun-core-business/packages/rms-report-record/src/rms-report-record.vue';
 新路径：import { rmsReportRecord } from 'msun-lib-pbr-business';
 新依赖："msun-lib-pbr-business": "^0.0.9",
 调用产品：电子病历360视图