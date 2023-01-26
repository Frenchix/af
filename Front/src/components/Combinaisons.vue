<script setup>
import { inject } from 'vue';

const combinaisons = inject("combinaisons")

</script>

<template>
    <div class="flex">
        <div class="mt-10 p-2">
            <table class="border-collapse border border-slate-500 max-w-2xl">
                <thead>
                    <tr>
                        <th class="border border-slate-600">Team X</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in combinaisons.teamX"  class="border border-black">
                        <td>
                            {{ item }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mt-10 p-2">
                <table class="border-collapse border border-slate-500">
                    <thead>
                        <tr>
                            <th class="border border-slate-600">Team Y</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in combinaisons.teamY" class="border border-black">
                            <td>
                                {{ item }}
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>
    
</template>
