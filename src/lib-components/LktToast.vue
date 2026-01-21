<script lang="ts" setup>
import {computed, onMounted, ref, watch} from 'vue';
import {
    closeToast,
    extractI18nValue,
    getDefaultValues,
    LktSettings,
    ProgressAnimation,
    ProgressConfig,
    ProgressValueFormat,
    Toast,
    ToastConfig
} from "lkt-vue-kernel";

const props = withDefaults(defineProps<ToastConfig>(), getDefaultValues(Toast));

const progressPercentage = ref(100),
    timeoutDuration = props.duration ?? 10000,
    progressRef = ref(null),
    addAnimationClass = ref(false);

const classes = computed(() => {
        let r: string[] = [];
        if (addAnimationClass.value) r.push('is-visible');
        if (props.positionX) r.push(`animation-${props.positionX}`);
        if (props.class) r.push(props.class);
        return r.join(' ');
    }),
    computedText = computed(() => extractI18nValue(props.text)),
    computedDetails = computed(() => extractI18nValue(props.details))
;

const calculatedCloseIcon = LktSettings.defaultCloseToastIcon

const onProgressEnd = () => {
        if (progressPercentage.value === 0) {
            closeToast(props.zIndex);
        }
    },
    onProgressMouseEnter = () => {
        //@ts-ignore
        progressRef.value.pause();
    },
    onProgressMouseLeave = () => {
        //@ts-ignore
        progressRef.value.start();
    };

onMounted(() => {
    setTimeout(() => {
        addAnimationClass.value = true;
    }, 100);
})

</script>

<template>
    <section class="lkt-toast"
             :class="classes"
             role="status"
             aria-live="polite"
             aria-atomic="true"
             @mouseenter="onProgressMouseEnter"
             @mousemove="onProgressMouseEnter"
             @mouseleave="onProgressMouseLeave">
        <div class="lkt-toast-inner" ref="inner">
            <div class="lkt-toast-header">
                <div class="lkt-toast-header-text">
                    <lkt-icon v-if="icon" :icon="icon"/>
                    <div class="lkt-toast-text" v-html="computedText"/>
                </div>
                <div class="lkt-toast-close" @click="closeToast(zIndex)">
                    <i :class="calculatedCloseIcon"/>
                </div>
            </div>
            <div class="lkt-toast-details" v-html="computedDetails"/>
            <lkt-progress
                ref="progressRef"
                v-model="progressPercentage"
                v-bind="<ProgressConfig>{
                    duration: timeoutDuration,
                    animation: {
                        type: ProgressAnimation.Decremental,
                        autoplay: true,
                        externalControl: false,
                        to: 0,
                        from: 100,
                    },
                    valueFormat: ProgressValueFormat.Hidden,
                    pauseOnHover: true,
                    events: {
                        updatedVisibleProgress: (v) => {
                            if (v === 0) {
                                closeToast(props.zIndex);
                            }
                        }
                    }
                }"
            />
        </div>
    </section>
</template>