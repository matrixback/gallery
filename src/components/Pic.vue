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
            'https://i.loli.net/2018/12/29/5c26ef2aa2bea.jpg',
            'https://i.loli.net/2018/12/29/5c2741355b4b7.jpg',
            'https://i.loli.net/2018/12/29/5c274298ef12c.jpg',
            'https://i.loli.net/2018/12/29/5c2746326dc45.jpg'
        ]

        const techImages = [
            'https://i.loli.net/2018/12/29/5c273cec0c5d0.gif',
            'https://i.loli.net/2018/12/29/5c2743fb56b59.jpeg',
            'https://i.loli.net/2018/12/29/5c27478a4ea26.jpg'
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
