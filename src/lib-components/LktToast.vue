<script lang="ts" setup>
import {computed} from 'vue';
import {ToastConfig} from "lkt-vue-kernel";

const props = withDefaults(defineProps<ToastConfig>(), {});

const classes = computed(() => {
    let r:string[] = [];
    return r.join(' ');
});

</script>

<template>
    <section class="lkt-toast" :class="classes">
        <div class="lkt-toast-close"></div>
        <div class="lkt-toast-inner" ref="inner">
            <section class="lkt-toast-content">
                <slot/>
            </section>
        </div>
    </section>
</template>