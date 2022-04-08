/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    //domains: ['bit.ly'],
    /**
	  * ! Highly suggested to have your max content width defined here (it will better optimize the image size)
	  * !   For example, on my website, an image is at most 992px which is the centered part of the viewport where I put content
	  * ! Makes sure values here are in sync with `helper/Image.ts`
    * ! see also this link : 
	  * ! https://www.onely.com/blog/largest-contentful-paint/
    */
	//deviceSizes: [320, 480, 640, 750, 828, 992, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
	domains: ['img.icons8.com'],
  //imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	//formats: ['image/avif', 'image/webp'],
	//minimumCacheTTL: 86400 // if `no max-age` or `s-max-age` defined for an image, cache it `1 day`
  },
}
