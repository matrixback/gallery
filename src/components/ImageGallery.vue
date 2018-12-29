<template>
<div id="gallery">
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
            <img class="image" v-for="(image, i) in images" 
                               v-if="i % 2 == 0"
                                :key="image" 
                                :src="image" 
                                @click="index = i">
            </b-col>
            <b-col>
            <img class="image" v-for="(image, i) in images" 
                               v-if="i % 2 == 1"
                                :key="image" 
                                :src="image" 
                                @click="index = i">
            </b-col>
        </b-row>
    </b-container>
    <vue-gallery-slideshow 
    :images="images" 
    :index="index" 
    @close="index = null">
    </vue-gallery-slideshow>
</div>
</template>

<script>
import  VueGallerySlideshow from 'vue-gallery-slideshow'

export default {
    components: {
        VueGallerySlideshow
    },
    props:[
        'images'
    ],
    data (){
        return {
            index: null
        }
    }
}
</script>

<style>
.image {
    margin: 25px auto 25px;
    box-shadow: 0px 0px 10px #000;
    width: 90%;
}
#gallery {
    margin-top: 20px;
}
</style>
