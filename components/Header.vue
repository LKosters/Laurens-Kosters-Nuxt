<template>
<!--      $urlFor(siteSettings.logo).size(500).url()-->
  <div class="navbar bg-base-300">
    <div class="container">
      <NuxtLink>
        <div class="avatar">
          <div class="w-12 rounded-full">
            <NuxtImg :src="$urlFor(siteSettings.logo).size(500).url()" />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const siteSettings = useGetSanitySingleById('siteSettings', 'siteSettings');
</script>
