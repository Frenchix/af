<script setup>
import Score from '../components/Score.vue'
import Combinaisons from '../components/Combinaisons.vue'
import axios from 'axios'
import { provide, reactive, ref } from 'vue';

const combinaisons = reactive({
    teamX: [],
    teamY: []
})
const limit = ref(false)

function getCombis(teamX, teamY) {
    axios
        .get(`${import.meta.env.VITE_HOST_API}/af_scores?team1=${teamX}&team2=${teamY}`)
        .then(response => {
            combinaisons.teamX = []
            combinaisons.teamY = []
            limit.value = false
            let combisTeam1 = ''
            for (let i = 0; i < response.data.team1.length; i++) {
                combisTeam1 = ''
                if (response.data.team1[i].nbTouchDown > 0){
                    for (let j = 0; j < response.data.team1[i].nbTouchDown; j++){
                        combisTeam1 += 'TouchDown, '
                    }
                }
                if (response.data.team1[i].nbFieldGoal > 0){
                    for (let j = 0; j < response.data.team1[i].nbFieldGoal; j++){
                        combisTeam1 += 'Field Goal, '
                    }
                }
                if (response.data.team1[i].nbPAT > 0){
                    for (let j = 0; j < response.data.team1[i].nbPAT; j++){
                        combisTeam1 += 'PAT, '
                    }
                }
                combinaisons.teamX.push(combisTeam1)
            }

            // combinaisons.teamX = response.data.team1
            combinaisons.teamY = response.data.team2
        })
        .catch(error => {
            console.log(error)
            if(error.response.data == 'LIMIT'){
                combinaisons.teamX = []
                combinaisons.teamY = []
                limit.value = true
            }
    })
}

provide("combinaisons", combinaisons)
provide("getCombis", getCombis)
</script>

<template>
    <div class="w-screen h-screen flex flex-row">
        <Score />
        <div v-if="combinaisons.teamX.length > 0">
            <Combinaisons />
        </div>
        <div v-else-if="limit" class="mt-8 ml-5">
            Oh c'est du Football Américain, pas de la belote
        </div>
    </div>
</template>
