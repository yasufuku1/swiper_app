const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Swiper: 'swiper/swiper-bundle' //スライドアニメーションを追加
  })
)

module.exports = environment
