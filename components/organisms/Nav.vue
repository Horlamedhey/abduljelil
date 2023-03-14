<script setup lang="ts">
export interface NavItem {
  name: string;
  href: string;
  current: boolean;
  //   hash?: string;
}
const props = defineProps({
  navItems: {
    type: Array<NavItem>,
  },
});
</script>

<template>
  <HeadlessDisclosure
    as="nav"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <HeadlessDisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <!-- <Bars3Icon
              v-if="!open"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <XMarkIcon
              v-else
              class="block h-6 w-6"
              aria-hidden="true"
            /> -->
          </HeadlessDisclosureButton>
        </div>

        <div class="hidden sm:block mx-auto">
          <div class="flex space-x-4">
            <NuxtLink
              v-for="item in navItems"
              :key="item.name"
              :to="item.href"
              :class="[
                { 'border-b-2': item.current },
                'text-white border-secondary hover:border-b-2 px-3 py-2 text-sm font-medium font-poppins',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <HeadlessDisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <HeadlessDisclosureButton
          v-for="item in navItems"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</HeadlessDisclosureButton
        >
      </div>
    </HeadlessDisclosurePanel>
  </HeadlessDisclosure>
</template>
