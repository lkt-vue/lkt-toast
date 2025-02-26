<script lang="ts" setup>
import {computed, getCurrentInstance, ref} from 'vue';
import {Settings} from '../settings/Settings';
import LktToast from "../lib-components/LktToast.vue";
import {ToastConfig} from "lkt-vue-kernel";

const refresher = ref(0);
const instance = getCurrentInstance();
const instanceReferences = ref([]);

const refresh = () => {
    refresher.value = refresher.value + 1;
    setTimeout(() => {
        instance?.proxy?.$forceUpdate();
    }, 1);
};

const components = computed((): ToastConfig[] => {
    refresher.value;
    // @ts-ignore
    return Settings.controller.components;
});

defineExpose({
    refresh,
});
</script>

<template>
    <section class="lkt-toast-canvas">
        <lkt-toast
            v-for="info in components"
            ref="instanceReferences"
            :key="info.zIndex"
            v-bind="info"
        />
    </section>
</template>