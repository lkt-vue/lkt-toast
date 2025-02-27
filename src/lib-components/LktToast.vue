<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue';
import {extractI18nValue, ToastConfig} from "lkt-vue-kernel";
import {closeToast} from "../functions/functions";

const props = withDefaults(defineProps<ToastConfig>(), {});

const progressPercentage = ref(100),
    timeoutDuration = props.duration ?? 10000,
    progressRef = ref(null),
    addAnimationClass = ref(false);

const classes = computed(() => {
        let r: string[] = [];
        if (addAnimationClass.value) r.push('is-visible');
        if (props.positionX) r.push(`animation-${props.positionX}`);
        return r.join(' ');
    }),
    computedText = computed(() => extractI18nValue(props.text))

const onProgressEnd = () => {
        closeToast(props.zIndex);
    },
    onProgressMouseEnter = () => {
        progressRef.value.pause();
    },
    onProgressMouseLeave = () => {
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
             @mouseenter="onProgressMouseEnter"
             @mousemove="onProgressMouseEnter"
             @mouseleave="onProgressMouseLeave">
        <div class="lkt-toast-inner" ref="inner">
            <div class="lkt-toast-header">
                <lkt-icon v-if="icon" :icon="icon"/>
                <div class="lkt-toast-text" v-html="computedText"></div>
                <div class="lkt-toast-close" @click="closeToast(zIndex)">
                    <i class="lkt-icon-close"/>
                </div>
            </div>
            <lkt-progress
                ref="progressRef"
                v-model="progressPercentage"
                :duration="timeoutDuration"
                type="decremental"
                value-format="hidden"
                pause-on-hover
                @end="onProgressEnd"
            />
        </div>
    </section>
</template>