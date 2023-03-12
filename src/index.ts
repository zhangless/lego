/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-12 00:33:28
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-12 00:34:52
 * @FilePath: \lego\briker\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from "vue";

import LText from "./components/LText";

const com = [LText];

const install = (app: App) => {
  com.forEach((com) => {
    app.component(com.name, com);
  });
};

export { LText, install };


export default { 
    install
};
