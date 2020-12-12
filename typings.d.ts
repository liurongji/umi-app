/*
 * @Author: your name
 * @Date: 2020-12-04 10:56:23
 * @LastEditTime: 2020-12-09 12:25:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umi-app\typings.d.ts
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare module 'global';
declare module 'eruda';
