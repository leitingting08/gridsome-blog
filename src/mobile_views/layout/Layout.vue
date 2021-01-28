<template>
    <div>
        <transition name="fade">
          <slot/>
        </transition>
        <bottombar style="position:fixed;bottom:0;"></bottombar>
    </div>
</template>

<script>
    import Bottombar from './components/Bottombar'
    export default {
        components: {
            Bottombar
        },
    }
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.mobile-border{
    border-top:1px solid #E4E7ED;
    border-bottom:1px solid #E4E7ED;
}
.mobile-border-top{
    border-top:1px solid #E4E7ED;
}
.mobile-margin-top{
    margin-top: 10px;
}
</style>