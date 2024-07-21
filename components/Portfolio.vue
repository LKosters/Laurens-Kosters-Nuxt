<template>
  <div class="py-10">
    <div class="container">
      <div class="lg:columns-2 columns-1">
        <NuxtLink v-for="item in portfolio" :to="'/' + item.slug.current ">
          <div class="mockup-browser border border-base-300 mb-4 hover:-translate-y-1 duration-300">
            <div class="mockup-browser-toolbar">
              <div class="input border border-base-300">{{ item.url }}</div>
            </div>
            <NuxtImg :src="$urlFor(item.image).url()"/>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const portfolio = useGetSanitySchema('portfolio');
</script>
