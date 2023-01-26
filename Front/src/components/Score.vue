<script setup>
import { ref, inject } from 'vue';

let teamX = ref()
let teamY = ref()

const getCombis = inject("getCombis")

</script>

<template>
        <div class="flex flex-col text-center items-center text-2xl w-[500px] h-[300px] mt-10 p-2 border border-black">
            <div class="w-full">
                American Football
            </div>
            <div class="flex justify-center w-full my-10">
                <div>
                    Team X :
                </div>
                <input v-model="teamX" class="max-w-[80px] text-center">
                <div>
                    Team Y :
                </div>
                <input v-model="teamY" class="max-w-[80px] text-center">
            </div>
            <button class="bg-black text-white w-fit rounded-md p-2" @click="getCombis(teamX, teamY)">
                Donnes moi les combis
            </button>
        </div>
</template>
