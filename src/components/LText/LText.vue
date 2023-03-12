<template>
  <component
    :is="tag"
    :style="styleProps"
    class="ltext-com"
    @click="handleClick"
  >
    {{ text }}</component
  >
</template>



<script lang="ts">

import { pick } from "lodash-es";
import { computed, defineComponent } from "vue";
import {
  textDefaultProps,
  transformToComponentProps,
  textStylePropNames,
} from "../../defaultProps";
// useCompon
import useComponentCommon from "../../hook/useComponentsCommon";

const textProp = transformToComponentProps(textDefaultProps);

console.log(textProp, "textProp");
export default defineComponent({
  name: "LText",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    ...textProp,
  },

  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>


<style>
.ltext-com {
  position: relative !important;
}
</style>
