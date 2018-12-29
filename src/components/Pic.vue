<template>
    <div>
        <nav-bar></nav-bar>
        <image-gallery :images="images"></image-gallery>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import ImageGallery from '@/components/ImageGallery'
export default {
    components: {
        NavBar,
        ImageGallery
    },
    data () {
        return {
            images: []
        }
    },
    mounted () {
        const category =  this.$route.params.category
        const womenImages = [
            'https://i.loli.net/2018/12/29/5c26ef2aa2bea.jpg'
        ]

        const techImages = [
            'https://i.loli.net/2018/12/29/5c273cec0c5d0.gif'
        ]
        const animalImages = [
            'https://i.loli.net/2018/12/29/5c273dadc3cd8.jpg'
        ]

        const imagesMap = {
            'women': womenImages,
            'tech': techImages,
            'animal': animalImages
        }
        console.log(imagesMap.category)
        const images = imagesMap[category]
        if (!images) {
            this.$router.push('/404')
        }
       this.images = images
    }
}
</script>

<style>
</style>
