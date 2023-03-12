export interface CommonComponentProps {
    actionType: string;
    url: string;
    height: string;
    width: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRadius: string;
    boxShadow: string;
    opacity: string;
    position: string;
    left: string;
    top: string;
    right: string;
    isEditing: boolean;
}
export declare const commonDefaultProps: CommonComponentProps;
export interface TextComponentProps extends CommonComponentProps {
    text: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    lineHeight: string;
    textAlign: string;
    color: string;
    backgroundColor: string;
}
export interface ImageComponentProps extends CommonComponentProps {
    src: string;
}
export declare type AllComponentProps = TextComponentProps & ImageComponentProps;
export declare const textDefaultProps: TextComponentProps;
export declare const imageDefaultProps: ImageComponentProps;
export declare const textStylePropNames: string[];
export declare const imageStylePropsNames: string[];
export declare const isEditingProp: {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const transformToComponentProps: (props: TextComponentProps) => {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: StringConstructor;
        default: string | boolean;
    };
    fontSize: {
        type: StringConstructor;
        default: string | boolean;
    };
    fontFamily: {
        type: StringConstructor;
        default: string | boolean;
    };
    fontWeight: {
        type: StringConstructor;
        default: string | boolean;
    };
    fontStyle: {
        type: StringConstructor;
        default: string | boolean;
    };
    textDecoration: {
        type: StringConstructor;
        default: string | boolean;
    };
    lineHeight: {
        type: StringConstructor;
        default: string | boolean;
    };
    textAlign: {
        type: StringConstructor;
        default: string | boolean;
    };
    color: {
        type: StringConstructor;
        default: string | boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string | boolean;
    };
    actionType: {
        type: StringConstructor;
        default: string | boolean;
    };
    url: {
        type: StringConstructor;
        default: string | boolean;
    };
    height: {
        type: StringConstructor;
        default: string | boolean;
    };
    width: {
        type: StringConstructor;
        default: string | boolean;
    };
    paddingLeft: {
        type: StringConstructor;
        default: string | boolean;
    };
    paddingRight: {
        type: StringConstructor;
        default: string | boolean;
    };
    paddingTop: {
        type: StringConstructor;
        default: string | boolean;
    };
    paddingBottom: {
        type: StringConstructor;
        default: string | boolean;
    };
    borderStyle: {
        type: StringConstructor;
        default: string | boolean;
    };
    borderColor: {
        type: StringConstructor;
        default: string | boolean;
    };
    borderWidth: {
        type: StringConstructor;
        default: string | boolean;
    };
    borderRadius: {
        type: StringConstructor;
        default: string | boolean;
    };
    boxShadow: {
        type: StringConstructor;
        default: string | boolean;
    };
    opacity: {
        type: StringConstructor;
        default: string | boolean;
    };
    position: {
        type: StringConstructor;
        default: string | boolean;
    };
    left: {
        type: StringConstructor;
        default: string | boolean;
    };
    top: {
        type: StringConstructor;
        default: string | boolean;
    };
    right: {
        type: StringConstructor;
        default: string | boolean;
    };
};
