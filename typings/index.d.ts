import Vue from "vue";
declare module "msun-lib-pbr-business" {
  export interface msunBaseComponent {
    // ModuleA: typeof import('../src/')
  }
/**
 * 血库Tab组件（输血申请单、输血信息打印、大量用血审批、输血观察记录、输血不良反应上报、输血疗效评价、血袋回收） 
 * @params {patId:-1,patInHosId:-1,registerId,patTypeId:1,applySource:1,saveSource,componentId}
 * 
   * 显示单独组件的名称
   * componentId='apply-form'//申请单
    componentId='transfusion-print' //输血信息打印
    componentId='transfusion-record'//输血观察记录
    componentId='bad-reaction'//输血不良反应上报
    componentId='mass-approval'//大量用血审批
    componentId='evaluate'//输血疗效评价
    componentId='retrieve'//血袋回收
  
 */
  export const bisApplyTab :any;
  /**360视图输血记录 */
  export const bisView360 :any;
  /**病理Tab（申请单、病理报告、标本离体、标本固定、标本送检）*/
  export const pisApplyTab :any;
  export const  pisBarcodePrint :any;
  export const pisPrintSetting :any;
  export const pisSampleAccept:any;
  export const pisSampleFixed:any;
  export const  pisSampleLeave:any;
  export const  pisSampleSend:any;
  export const rmsApplyTab :any;
  export const rmsMessage:any;
  export const rmsNursForm :any;
  export const rmsReportRecord:any;
  export const iframeEventBus:any;
  export const msunIframe: any;
  export const pisApplyInfo: any;
  export const pisReportList:any;
}
