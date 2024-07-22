<template>
  <div class="py-10">
    <div v-if="portfolio" class="container">
      <div class="breadcrumbs text-sm">
        <ul>
          <li><NuxtLink to="/">Portfolio</NuxtLink></li>
          <li>{{ portfolio.title }}</li>
        </ul>
      </div>
      <h1 class="text-4xl font-extrabold mb-10">{{ portfolio.title }}</h1>
      <div class="mb-10">
        <p>
          {{ portfolio.description }}
        </p>
      </div>
      <div class="flex flex-col lg:flex-row">
        <div class="mockup-browser border border-base-300 flex-1">
          <div class="mockup-browser-toolbar">
            <div class="input border border-base-300">{{ portfolio.url }}</div>
          </div>
          <NuxtImg class="w-full" :src="$urlFor(portfolio.image).url()"/>
        </div>
        <div class="flex justify-around mt-10 lg:mt-0 lg:justify-start lg:items-end lg:flex-col lg:pl-20">
          <div class="mb-10" v-for="item in portfolio.techStackDetails">
            <button @click="selectedTech = item" onclick="tech_details.showModal()" class="btn btn-square !h-full !w-full p-5">
              <NuxtImg class="h-16 lg:h-32 icon" :src="item.logo.metadata.url" />
            </button>
          </div>
          <dialog id="tech_details" class="modal">
            <div class="modal-box">
              <h3 v-if="selectedTech" class="text-lg font-bold">{{ selectedTech.title }}</h3>
              <p v-if="selectedTech" class="py-4">{{ selectedTech.description }}</p>
            </div>
            <form method="dialog" class="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
<!--        <div class="mockup-phone artboard phone-1 mr-0">-->
<!--          <div class="camera"></div>-->
<!--          <div class="display">-->
<!--            <div class="artboard artboard-demo phone-1">-->
<!--              <NuxtImg class="h-full w-full object-cover" :src="$urlFor(portfolio.image).url()"/>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug;
const portfolio = useGetSanitySingleBySlug('portfolio', slug);

const selectedTech = ref();
</script>

<style scoped>
.icon {
  filter: invert(20%) sepia(243%) saturate(1576%) hue-rotate(-21deg) brightness(137%) contrast(73%);
}
</style>
