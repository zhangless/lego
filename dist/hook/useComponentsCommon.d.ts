import { CommonComponentProps } from "../defaultProps";
declare const useComponentCommon: (props: Readonly<Partial<CommonComponentProps>>, picks: string[]) => {
    styleProps: import("vue").ComputedRef<Partial<Readonly<Partial<CommonComponentProps>>>>;
    handleClick: () => void;
};
export default useComponentCommon;
