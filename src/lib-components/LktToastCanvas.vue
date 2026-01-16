<script lang="ts" setup>
import {computed, getCurrentInstance, ref} from 'vue';
import LktToast from "../lib-components/LktToast.vue";
import {ToastConfig, ToastController} from "lkt-vue-kernel";

const refresher = ref(0);
const instance = getCurrentInstance();
const instanceReferences = ref([]);

const refresh = () => {
    refresher.value = refresher.value + 1;
    setTimeout(() => {
        instance?.proxy?.$forceUpdate();
    }, 1);
};

const componentsLeft = computed((): ToastConfig[] => {
    refresher.value;
    return ToastController.components.filter(x => x.positionX === 'left');
});

const componentsCenter = computed((): ToastConfig[] => {
    refresher.value;
    return ToastController.components.filter(x => x.positionX === 'center');
});

const componentsRight = computed((): ToastConfig[] => {
    refresher.value;
    return ToastController.components.filter(x => x.positionX === 'right');
});

const computedLeftStackClasses = computed(() => {
    if (componentsLeft.value.length === 0) return '';
    return 'is-visible';
})

const computedCenterStackClasses = computed(() => {
    if (componentsCenter.value.length === 0) return '';
    return 'is-visible';
})

const computedRightStackClasses = computed(() => {
    if (componentsRight.value.length === 0) return '';
    return 'is-visible';
})

defineExpose({
    refresh,
});
</script>

<template>
    <section class="lkt-toast-canvas">
        <div class="lkt-toast-stack left-stack" :class="computedLeftStackClasses">
            <lkt-toast
                v-for="info in componentsLeft"
                ref="instanceReferences"
                :key="info.zIndex"
                v-bind="info"
            />
        </div>
        <div class="lkt-toast-stack center-stack" :class="computedCenterStackClasses">
            <lkt-toast
                v-for="info in componentsCenter"
                ref="instanceReferences"
                :key="info.zIndex"
                v-bind="info"
            />
        </div>
        <div class="lkt-toast-stack right-stack" :class="computedRightStackClasses">
            <lkt-toast
                v-for="info in componentsRight"
                ref="instanceReferences"
                :key="info.zIndex"
                v-bind="info"
            />
        </div>
    </section>
</template>