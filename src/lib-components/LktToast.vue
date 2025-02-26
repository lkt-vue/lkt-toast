<script lang="ts" setup>
import {computed} from 'vue';
import {extractI18nValue, ToastConfig} from "lkt-vue-kernel";

const props = withDefaults(defineProps<ToastConfig>(), {});

const classes = computed(() => {
    let r:string[] = [];
    return r.join(' ');
});

const computedText = computed(() => {
    return extractI18nValue(props.text);
})

</script>

<template>
    <section class="lkt-toast" :class="classes">
        <div class="lkt-toast-close"></div>
        <div class="lkt-toast-inner" ref="inner">
            <div class="lkt-toast-content" v-html="computedText"></div>
        </div>
    </section>
</template>