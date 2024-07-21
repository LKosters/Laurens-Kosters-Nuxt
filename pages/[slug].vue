<template>
  <div class="py-10">
    <div class="container">
      <div class="breadcrumbs text-sm">
        <ul>
          <li><NuxtLink to="/">Portfolio</NuxtLink></li>
          <li>{{ portfolio.title }}</li>
        </ul>
      </div>
      <h1 class="text-4xl font-extrabold">{{ portfolio.title }}</h1>
      <div v-for="item in portfolio.techStackDetails">
        {{ item.title }}
      </div>
      <div class="flex py-10">
        <div class="mockup-browser border border-base-300 w-1/2">
          <div class="mockup-browser-toolbar">
            <div class="input border border-base-300">{{ portfolio.url }}</div>
          </div>
          <NuxtImg :src="$urlFor(portfolio.image).url()"/>
        </div>
        <div class="mockup-phone artboard phone-1">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo phone-1">
              <NuxtImg class="h-full w-full object-cover" :src="$urlFor(portfolio.image).url()"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const slug = route.params.slug;

const portfolio = useGetSanitySingleBySlug('portfolio', slug);
</script>
