<script setup lang="ts">
import { NavItem } from "~~/components/organisms/Nav.vue";
// feats
import mobile from "@/assets/img/feats/mobile-feat.svg";
import desktop from "@/assets/img/feats/desktop-feat.svg";
import dashboard from "@/assets/img/feats/dashboard-feat.svg";
import illustration from "@/assets/img/feats/illustration-feat.svg";
import web from "@/assets/img/feats/web-feat.svg";
import caseStudy from "@/assets/img/feats/case-study-feat.svg";

// designs

const navItems: NavItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "About me", href: "#about", current: false },
  { name: "My designs", href: "#designs", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "Resume", href: "#resume", current: false },
  { name: "Contact me", href: "#contact", current: false },
];
const feats: { image: any; title: string }[] = [
  {
    image: mobile,
    title: "100+ Mobile screen designs",
  },
  {
    image: desktop,
    title: "50+ Desktop screen designs",
  },
  {
    image: dashboard,
    title: "25+ Dashboard designs",
  },
  {
    image: illustration,
    title: "10 Illustration designs",
  },
  {
    image: web,
    title: "10+ Mobile & Web Projects",
  },
  {
    image: caseStudy,
    title: "2 Case Studies",
  },
];

const designs = [
  { image: "img/designs/design-1.png", link: "" },
  { image: "img/designs/design-2.png", link: "" },
  { image: "img/designs/design-3.png", link: "" },
  { image: "img/designs/design-4.png", link: "" },
  { image: "img/designs/design-5.png", link: "" },
  { image: "img/designs/design-6.png", link: "" },
  { image: "img/designs/design-7.png", link: "" },
  { image: "img/designs/design-8.png", link: "" },
  { image: "img/designs/design-9.png", link: "" },
];

const skills: string[] = [
  "User research",
  "Visual Design",
  "UX Design",
  "Interaction Design",
  "Mobile App Design",
  "Illustration/Sketch",
];
</script>

<template>
  <div>
    <header>
      <OrganismsNav :navItems="navItems" />
    </header>
    <main>
      <section id="home">
        <AtomsOverlay class="-top-16 -z-[1]">
          <div
            class="bg-cover bg-no-repeat bg-center bg-hero absolute inset-0 -z-[1]"
          />
          <div
            class="flex flex-col gap-20 justify-between relative max-w-7xl mx-auto py-12 px-4 md:px-12 text-center"
          >
            <div class="md:mt-16">
              <nuxt-img
                src="img/abduljelil.webp"
                alt="abduljelil"
                class="w-2/3 md:w-1/3 max-w-xs m-auto"
              />
              <div class="text-white">
                <h1
                  class="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl font-croissant mb-4"
                >
                  Hello, I’m Jelil Ajao
                </h1>
                <p class="text-xl font-bold">
                  I am a
                  <span
                    class="text-black bg-trace bg-center bg-contain bg-no-repeat pl-2 inline-block text-left h-8 w-72"
                  >
                    Ui & Ux freelance designer
                  </span>
                </p>
              </div>
              <AtomsButton class="bg-secondary"> Hire me </AtomsButton>
            </div>

            <div class="flex flex-wrap gap-6 justify-center lg:justify-between">
              <div
                v-for="(feat, i) in feats"
                :key="`feat-${i}`"
                class="w-[120px] sm:w-[150px] lg:w-[130px] xl:w-[170px] h-[120px] sm:h-[150px] lg:h-[130px] xl:h-[170px] bg-white bg-opacity-[0.08] rounded-lg text-white text-center flex justify-around p-4 font-semibold text-sm flex-col"
              >
                <img
                  :src="feat.image"
                  alt=""
                  class="mx-auto w-6 lg:w-7 xl:w-auto"
                />
                <span class="text-xs lg:text-md xl:text-lg">
                  {{ feat.title }}
                </span>
              </div>
            </div>
          </div>
        </AtomsOverlay>
      </section>
      <section
        class="relative"
        id="about"
      >
        <div
          class="flex gap-20 lg:py-20 pb-20 px-4 md:px-12 max-w-7xl mx-auto flex-col lg:flex-row"
        >
          <div class="w-full lg:w-1/2 lg:pr-20">
            <h2 class="mb-4 text-center lg:text-left">About me</h2>
            <p class="tracking-wide">
              As a passionate and fast-learning design newbie with one year of
              experience in Ui/Ux design, I am excited to take my skills to the
              next level and expand my horizons in the design industry. With a
              keen eye for aesthetics and a strong understanding of design
              principles, I am committed to creating visually appealing and
              effective designs that communicate the intended message to the
              target audience. I am constantly seeking to improve my skills and
              knowledge, and am eager to collaborate with other creative
              professionals to create innovative and impactful designs.
            </p>
            <AtomsButton
              class="bg-primary text-white mx-auto block xxs:inline-block"
            >
              Download resume
            </AtomsButton>
          </div>
          <div class="w-full lg:w-1/2 lg:pl-20">
            <img
              src="@/assets/img/me.svg"
              alt=""
              class="mx-auto w-44 lg:-mt-10"
            />
            <div class="mt-8">
              <h2 class="mb-4 text-center">My skills</h2>
              <div
                class="flex flex-wrap w-full md:w-3/5 lg:w-full justify-center mx-auto"
              >
                <span
                  v-for="(skill, i) in skills"
                  :key="`skill-${i}`"
                  class="w-3/5 pb-2 sm:pb-0 sm:w-1/2 sm:border-l-4 border-b-4 sm:border-b-0 text-center sm:text-left rounded pl-2 my-3 border-primary"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="@/assets/img/wavy.svg"
          alt=""
          class="absolute left-0 bottom-0"
        />
      </section>
      <section
        class="bg-[#F5F5F5]"
        id="designs"
      >
        <div class="py-20 px-4 md:px-12 max-w-7xl mx-auto text-center">
          <h2 class="mb-12">My designs</h2>
          <div class="flex flex-wrap justify-center md:justify-between gap-6">
            <nuxt-img
              v-for="(design, i) in designs"
              :key="`design-${i}`"
              :src="design.image"
              :alt="`design-${i}`"
              sizes="100% xs:90vw sm:40vw xl:43vw"
              class="w-full xs:w-[46.9%] sm:w-[48%] lg:w-[31%]"
            />
            <!-- <div class="w-[400px] h-[400px] rounded-xl"></div> -->
          </div>
          <AtomsButton class="bg-primary text-white"> See more </AtomsButton>
        </div>
      </section>
      <nuxt-img
        src="img/desktop.png"
        alt=""
        width="100vw"
      />
    </main>
    <footer id="contact">
      <div
        class="bg-black flex flex-col md:flex-row text-white px-4 md:px-12 justify-around pt-10 gap-12 pb-8"
      >
        <div>
          <h3 class="font-bold text-2xl mb-6">Contact me via...</h3>
          <h4 class="font-bold mb-1">Mobile</h4>
          <span class="text-sm">08103142216 | 08103389971 | 09152803293</span>
          <h4 class="font-bold mb-1 mt-3">Email</h4>
          <span class="text-sm">Jelilajao@gmail.com | Jelilajao@yahoo.com</span>
          <h4 class="font-bold mb-1 mt-3">Linktree</h4>
          <span class="text-sm">Linktr.ee/ajao95</span>
        </div>
        <div>
          <h3 class="font-bold text-2xl mb-6">Contact me for...</h3>
          <h4 class="font-bold mb-1 mt-3">Product design</h4>
          <span class="text-sm">User research | Wireframe | Prototyping</span>
          <h4 class="font-bold mb-1 mt-3">Graphic design</h4>
          <span class="text-sm"
            >Flyer design | Social media ads | Business designs</span
          >
          <h4 class="font-bold mb-1 mt-3">Branding</h4>
          <span class="text-sm"
            >Gift items | Stationary | Souvenirs | Picture framing</span
          >
        </div>
      </div>
      <div class="bg-secondary h-10 justify-center text-xs flex items-center">
        Jelil Ajao Akorede (c) {{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>
