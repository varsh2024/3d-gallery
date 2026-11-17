import React, { useState, useEffect } from "react";
import "./Gallery.css";

const images = [
  { src: "https://cdn.britannica.com/37/154237-050-A76A506D/blue-peafowl-tail-Indian-peacock-courtship-displays.jpg", name: "Bird" },
  { src: "https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?semt=ais_hybrid", name: "Sunset Tree" },
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDA%3D", name: "Hotel View" },
  { src: "https://widnr.widen.net/content/4uvhi6lfih/jpeg/iStock-1422593791.jpeg?w=568&h=378&keep=c&crop=yes&color=ffffffff&quality=80", name: "Animals" },
  { src: "https://i.ytimg.com/vi/gDighOmucmw/maxresdefault.jpg", name: "art" },
  { src: "https://www.dsource.in/sites/default/files/resource/temple-stone-carving/products/minigallery/11448/1.jpg", name: "tamples stone design" },
  { src: "https://www.esa.int/var/esa/storage/images/esa_multimedia/videos/2013/11/guide_to_our_galaxy/13409760-3-eng-GB/Guide_to_our_Galaxy_pillars.png", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://www.thoughtco.com/thmb/hQELRGZF0QBuK-2ScNLcnxfrZHw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/doveGE-57a1097f5f9b589aa90076bf.jpg", name: "Bird" },
  { src: "https://static.vecteezy.com/system/resources/thumbnails/046/246/912/small_2x/pixel-art-sunset-over-ocean-sun-shining-through-clouds-photo.jpeg", name: "Sunset Tree" },
  { src: "https://media.istockphoto.com/id/503016934/photo/entrance-of-luxury-hotel.jpg?s=612x612&w=0&k=20&c=DXFzucB2xWGf3PI6_yjhLKDvrFcGlOpOjXh6KDI8rqU=", name: "Hotel View" },
  { src: "https://c02.purpledshub.com/uploads/sites/41/2024/05/fennec-fox-Vulpes-zerda.jpg?webp=1&w=1200", name: "Animals" },
  { src: "https://gallerist.in/cdn/shop/products/rSKObYwwoo_1600x.jpg?v=1687104242", name: "art" },
  { src: "https://www.dsource.in/sites/default/files/resource/temple-stone-carving/products/minigallery/11448/3.jpg", name: "tamples stone design" },
  { src: "https://images.newscientist.com/wp-content/uploads/2024/07/19161752/SEI_213395994.jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://www.treehugger.com/thmb/F5G8zaALRp7rvgWqDVT13t9pKY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-scarlet-macaw-flying-in-mid-air-634869043-f360b379b8c44a28a052b41d99adc2a7.jpg", name: "Bird" },
  { src: "https://static5.depositphotos.com/1037262/523/i/450/depositphotos_5238642-stock-photo-rural-sunset.jpg", name: "Sunset Tree" },
  { src: "https://img.freepik.com/free-photo/silhouette-palm-tree-with-umbrella_74190-4056.jpg", name: "Hotel View" },
  { src: "https://images.all-free-download.com/images/graphiclarge/zebra_wild_animal_namibia_221318.jpg", name: "Animals" },
  { src: "https://5.imimg.com/data5/SELLER/Default/2021/8/DG/JZ/BY/124619929/1.png", name: "art" },
  { src: "https://www.dsource.in/sites/default/files/styles/mini_responsivecustom_user_moblie_1x/public/resource/temple-stone-carving/making-process/minigallery/11446/9.jpg?itok=wxZt-hbJ&timestamp=1449559959", name: "tamples stone design" },
  { src: "https://thumbs.dreamstime.com/b/spiral-galaxy-rotating-vastness-space-breathtaking-spiral-galaxy-rotates-majestically-vast-expanse-space-343914669.jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://t4.ftcdn.net/jpg/02/43/67/59/360_F_243675911_EsvABLUWeCeY7Xxftnfd9Vcjyz68m3Jq.jpg", name: "Bird" },
  { src: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/76XENRBHHW2NXJGTZEM7I7MQN4_size-normalized.jpg&w=1200", name: "Sunset Tree" },
  { src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?cs=srgb&dl=pexels-pixabay-261102.jpg&fm=jpg", name: "Hotel View" },
  { src: "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?cs=srgb&dl=pexels-pixabay-39857.jpg&fm=jpg", name: "Animals" },
  { src: "https://5.imimg.com/data5/SELLER/Default/2021/8/MV/OU/UI/124619929/1.png", name: "art" },
  { src: "https://5.imimg.com/data5/SELLER/Default/2020/12/GP/RS/KR/7108502/new-product.jpeg", name: "tamples stone design" },
  { src: "https://hubblesite.org/files/live/sites/hubble/files/home/science/galaxies/_images/STScI-H-galaxies-1220e-2400x1200.jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://images.unsplash.com/photo-1444464666168-49d633b86797?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D", name: "Bird" },
  { src: "https://wallpapers.com/images/featured/sunset-pictures-l4lql05zgmoeviss.jpg", name: "Sunset Tree" },
  { src: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D", name: "Hotel View" },
  { src: "https://media.istockphoto.com/id/638460056/photo/single-lion-standing-proudly-on-a-small-hill.jpg?s=612x612&w=0&k=20&c=OyEKBg7dkPcR9wD3fwTUzXJHu7kdxgG3AgdKuMgBMf0=", name: "Animals" },
  { src: "https://rukminim2.flixcart.com/image/850/1000/jmkwya80/painting/t/s/r/579cgt23x19-tamatina-original-imaf9gawctbqgnmf.jpeg?q=90&crop=false", name: "art" },
  { src: "https://images.jdmagicbox.com/v2/comp/bangalore/x8/080pxx80.xx80.240202234415.t1x8/catalogue/temple-stone-works-bangalore-temple-construction-services-nypr0168df.jpg", name: "tamples stone design" },
  { src: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTU0MTM4NTg1Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://www.getbengal.com/uploads/story_image/Chand-Mia-Parrots.jpg", name: "Bird" },
  { src: "https://media.istockphoto.com/id/1025416878/photo/seaside-at-dusk.jpg?s=612x612&w=0&k=20&c=zf_YgzVFB4joZPGt4WzSlUkNkbR2HJjfeyhg21aCf38=", name: "Sunset Tree" },
  { src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-109353-338504.jpg&fm=jpg", name: "Hotel View" },
  { src: "https://m.media-amazon.com/images/I/61AaLySvWBL.jpg", name: "Animals" },
  { src: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/113557591/320/", name: "art" },
  { src: "https://www.shutterstock.com/image-photo/exquisite-stone-carvings-hindu-temple-600w-2472532605.jpg", name: "tamples stone design" },
  { src: "https://img.freepik.com/premium-photo/mesmerizing-vibrant-nebula-with-celestial-planets-cosmic-elements_994764-154605.jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/a/m/AmericanGoldfinch_MattWilliams_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=4000&hei=2200&scl=1.0", name: "Bird" },
  { src: "https://cdn.pixabay.com/photo/2017/04/05/01/15/ocean-2203720_1280.jpg", name: "Sunset Tree" },
  { src: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-mumbai/gallery/featured/mumbai-gallery-featured-1-exterior-724x407.jpg?extension=webp", name: "Hotel View" },
  { src: "https://c1.wallpaperflare.com/preview/987/604/20/animal-farm-grass-nature.jpg", name: "Animals" },
  { src: "https://images.meesho.com/images/products/247902432/fc1qd_512.webp", name: "art" },
  { src: "https://as1.ftcdn.net/v2/jpg/10/19/29/98/1000_F_1019299887_WXeoUKdVNqEw6A5nagMP9ahFqNRXPHe4.jpg", name: "tamples stone design" },
  { src: "https://c4.wallpaperflare.com/wallpaper/130/39/667/space-art-spiral-galaxy-planet-stars-wallpaper-preview.jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://www.stockvault.net/data/2019/03/24/262886/thumb16.jpg", name: "Bird" },
  { src: "https://images.stockcake.com/public/b/b/0/bb0cb9e2-a508-427b-9447-e58225b24bf6_large/desert-sunset-view-stockcake.jpg", name: "Sunset Tree" },
  { src: "https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg", name: "Hotel View" },
  { src: "https://c0.wallpaperflare.com/preview/820/358/486/dog-pet-cute-puppy.jpg", name: "Animals" },
  { src: "https://m.media-amazon.com/images/I/81oVrETsFBL._AC_SL1500_.jpg", name: "art" },
  { src: "https://thumbs.dreamstime.com/b/elaborate-indian-temple-stone-carvings-elaborate-stone-carvings-adorn-walls-ancient-indian-temple-showcasing-356812780.jpg", name: "tamples stone design" },
  { src: "https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?cs=srgb&dl=pexels-minan1398-813269.jpg&fm=jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://birdwatchingtips.com/wp-content/uploads/2021/04/Red-Headed-Woodpecker-Melanerpes-erythrocephalus.jpg", name: "Bird" },
  { src: "https://static.vecteezy.com/system/resources/thumbnails/012/168/187/small_2x/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG", name: "Sunset Tree" },
  { src: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/welcomHotel/hotels/welcomhoteljabalpur/images/overview-landing-page/overview/d/hotel-facade-dusk-view.jpg", name: "Hotel View" },
  { src: "https://c4.wallpaperflare.com/wallpaper/946/996/966/bears-bear-animal-wallpaper-preview.jpg", name: "Animals" },
  { src: "https://fydn.imgix.net/m%2Fgen%2Fart-print-square-p1%2F766454da-f1e3-4f42-b41c-77a5eaec591c.jpg?auto=format%2Ccompress&q=75", name: "art" },
  { src: "https://img.freepik.com/premium-photo/stone-carvings-deities-hindu-temple_1326522-23749.jpg", name: "tamples stone design" },
  { src: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?cs=srgb&dl=pexels-philippedonn-1169754.jpg&fm=jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhUgCgbemg6zrRswhZqnZeXYOByqKyGyLMnbDBFJt4sTk-2YnLVbHEvYrcj9pknIDbhvPDYJWMqnsD4R6WGgrrjYWY9sceNxQPZFKq3nm7fiyp0K8vYJeZY1FjghMAhJ_X8Quh1oLV0BA/s1600/wallpapers-of-birds.jpg", name: "Bird" },
  { src: "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_640/v1/media/gmg/MU5XWJ2OQBHIXPVVFS6GIQNXTY.jpg?_a=DAJAUVWIZAAA", name: "Sunset Tree" },
  { src: "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?cs=srgb&dl=pexels-asman-chema-91897-594077.jpg&fm=jpg", name: "Hotel View" },
  { src: "https://images.unsplash.com/photo-1500463959177-e0869687df26?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D", name: "Animals" },
  { src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/painting/u/a/d/9-5-1-va-madrf-tribal-village-multi-pntg-006-ritwika-s-original-imagnwfvqh67tjtp.jpeg?q=20&crop=false", name: "art" },
  { src: "https://img.freepik.com/premium-photo/intricate-stone-carvings-ancient-temple-wall_1326522-23693.jpg", name: "tamples stone design" },
  { src: "https://images2.alphacoders.com/542/542730.png", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/4268/image/s768x1300/WC202209_LAST_006_430968_reduced.jpg", name: "Bird" },
  { src: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2024/02/predict-dramatic-sunsets-6.jpg?fit=1500%2C1000&ssl=1", name: "Sunset Tree" },
  { src: "https://img.freepik.com/free-photo/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-sunset-tekirova-kemer_146671-18759.jpg", name: "Hotel View" },
  { src: "https://c4.wallpaperflare.com/wallpaper/228/341/71/nature-wolf-forest-animals-wallpaper-preview.jpg", name: "Animals" },
  { src: "https://i.etsystatic.com/37644803/r/il/f70fb5/5739187865/il_fullxfull.5739187865_5efd.jpg", name: "art" },
  { src: "https://static3.bigstockphoto.com/1/2/1/large1500/121644302.jpg", name: "tamples stone design" },
  { src: "https://wallpapers.com/images/featured/3d-galaxy-4io58y5d17av1ln2.jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://d2rqvd0kuag1qx.cloudfront.net/blog-8.jpg", name: "Bird" },
  { src: "https://media.istockphoto.com/id/1422592739/photo/lake-northern-minnesota-sunset.jpg?s=612x612&w=0&k=20&c=tCPwx9FarbLYHiGl7HRWzygKXKNVuOcVJ2RM2nDZC_k=", name: "Sunset Tree" },
  { src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fHww", name: "Hotel View" },
  { src: "https://c1.wallpaperflare.com/preview/949/1011/672/cattle-nellore-cow.jpg", name: "Animals" },
  { src: "https://i.etsystatic.com/40481311/r/il/813230/4580871345/il_fullxfull.4580871345_9zmg.jpg", name: "art" },
  { src: "https://as1.ftcdn.net/v2/jpg/01/67/70/62/1000_F_167706220_qi4cfEcTFyLSGJbMAbQxKybWYIxhqh2X.jpg", name: "tamples stone design" },
  { src: "https://www.wallpaperflare.com/static/88/99/645/planet-colorful-bright-flash-wallpaper.jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://myrightbird.com/assets/uploads/mybird_sun_conure_on_perch-900x651.jpg", name: "Bird" },
  { src: "https://cdn.savingplaces.org/2016/05/23/14/05/31/209/Golden_Gate_AdobeStock_78121192.jpg", name: "Sunset Tree" },
  { src: "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?cs=srgb&dl=pexels-jimbear-1458457.jpg&fm=jpg", name: "Hotel View" },
  { src: "https://c1.wallpaperflare.com/preview/549/281/103/goat-biquette-farm-animals.jpg", name: "Animals" },
  { src: "https://m.media-amazon.com/images/I/71Su4SR9tmL._AC_UF350,350_QL80_.jpg", name: "art" },
  { src: "https://thumbs.dreamstime.com/b/great-stone-carvings-indian-th-century-temple-hoysaleswara-karnataka-india-hoysala-empire-was-built-king-89647383.jpg", name: "tamples stone design" },
  { src: "https://c4.wallpaperflare.com/wallpaper/263/888/968/3d-space-digital-art-asteroid-wallpaper-preview.jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?cs=srgb&dl=pexels-daniyal-ghanavati-10741-110812.jpg&fm=jpg", name: "Bird" },
  { src: "https://www.alltrails.com/_next/image?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNzAxNjMyOTQvY2ViMjcwNTE1NTM5NWQ5YjY0ZDliMGY4YmIyMWMwM2YuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDgwLCJoZWlnaHQiOjcwMCwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0%3D&w=3840&q=90", name: "Sunset Tree" },
  { src: "https://media.cntraveler.com/photos/643acc271a4a742be146234b/16:9/w_2580,c_limit/Many-Glacier-Hotel-GettyImages-974230684.jpg", name: "Hotel View" },
  { src: "https://images3.alphacoders.com/793/793677.jpg", name: "Animals" },
  { src: "https://gallerist.in/cdn/shop/products/copLfP4JqF_1600x.jpg?v=1683174203", name: "art" },
  { src: "https://thumbs.dreamstime.com/b/decorative-pillars-black-basalt-mandappa-hall-hazara-decorative-pillars-black-basalt-mandappa-hall-hazara-113069050.jpg", name: "tamples stone design" },
  { src: "https://png.pngtree.com/background/20231030/original/pngtree-d-illustration-of-a-planet-and-star-in-a-spacious-galaxy-picture-image_5791522.jpg", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://images.unsplash.com/photo-1600682620107-db1a1cef9465?fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTYyOTM1NDM3MA&ixlib=rb-1.2.1&q=75&w=720&utm_medium=referral&utm_source=vocal.media", name: "Bird" },
  { src: "https://i.dailymail.co.uk/1s/2020/03/11/12/25833646-8099679-image-a-15_1583930702046.jpg", name: "Sunset Tree" },
  { src: "https://imageio.forbes.com/specials-images/imageserve/6140b16e07ee070fad5f28da/Enjoy-breakfast-with-a-view-in-Brunelleschi-Hotel-s-Pool-Suite-/960x0.jpg?format=jpg&width=960", name: "Hotel View" },
  { src: "https://thumbs.dreamstime.com/b/giraffe-eating-leaves-tree-kruger-park-safari-animals-south-africa-129630514.jpg", name: "Animals" },
  { src: "https://i.etsystatic.com/14130823/r/il/929cea/6478400360/il_fullxfull.6478400360_jvuf.jpg", name: "art" },
  { src: "https://thumbs.dreamstime.com/b/interior-ancient-indian-temple-intricately-carved-stone-pillars-sculptures-showcasing-magnificent-architectural-335918826.jpg", name: "tamples stone design" },
  { src: "https://media.istockphoto.com/id/1198684732/photo/stars-and-galaxy-space-sky-night-background.jpg?s=612x612&w=0&k=20&c=U6AnXKYJpi9H2tCeGGXSAS_ctR4pgsC-yC07J5ECH5M=", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://birdcount.in/wp-content/uploads/2024/09/White-throated-Kingfisher-by-Hari-K-Patibanda.jpegg", name: "Bird" },
  { src: "https://media.istockphoto.com/id/589538028/photo/manali-town.jpg?s=612x612&w=0&k=20&c=ACZt8Wm-_Y_EeqxXjSbX8b-6ig4v_KD3f-leEetCuGY=", name: "Sunset Tree" },
  { src: "https://img.freepik.com/free-photo/spa-salon-with-beach-view_53876-31335.jpg", name: "Hotel View" },
  { src: "https://images3.alphacoders.com/815/815950.jpg", name: "Animals" },
  { src: "https://i.ytimg.com/vi/eKYqjCfb-aA/mqdefault.jpg", name: "art" },
  { src: "https://www.tripsavvy.com/thmb/-VLgQTuCFqx5HuSy6aNRKAP2R_Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/142420393-56a3bfe35f9b58b7d0d39711.jpg", name: "tamples stone design" },
  { src: "https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2020/05/050420_kc_dwarf-galaxy_feat.jpg?fit=1028%2C579&ssl=1", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/b/l/Blue-jay-Matt-Williams.jpg?crop=0%2C11%2C4000%2C3000&wid=640&hei=480&scl=6.25", name: "Bird" },
  { src: "https://media.istockphoto.com/id/1151755587/photo/sunrise-behind-a-tropical-island-in-the-maldives.jpg?s=612x612&w=0&k=20&c=1P-LXAZfbvIA58uLLRU8zTiwBSnR01zDzZAChe_wM7c=", name: "Sunset Tree" },
  { src: "https://media.istockphoto.com/id/537414158/photo/the-modern-bedroom-sundeck-on-sea-view.jpg?s=612x612&w=0&k=20&c=5GRwa0wi16pvkW_6IYxhrRy7A1c16J3EqtjVoetxEMo=", name: "Hotel View" },
  { src: "https://c0.wallpaperflare.com/preview/411/51/713/animal-beautiful-wildlife-portrait.jpg", name: "Animals" },
  { src: "https://i.pinimg.com/736x/bd/db/b2/bddbb221aa2cb76cd56e2aa8db891558.jpg", name: "art" },
  { src: "https://thumbs.dreamstime.com/b/indian-ancient-architecture-stone-chariot-vithala-temple-hampi-karnataka-india-carved-wheels-indian-ancient-architecture-stone-348662729.jpg", name: "tamples stone design" },
  { src: "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://japan-forward.com/wp-content/uploads/2023/12/IMG_1571.jpg", name: "Bird" },
  { src: "https://media.istockphoto.com/id/591441250/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=8qzBD5zNNCsowK5G01Uvab8zsTdT5V2QoGQ5MK5UD1k=", name: "Sunset Tree" },
  { src: "https://cdn.adventure-life.com/10/99/75/building2/1300x820.webp", name: "Hotel View" },
  { src: "https://p1.pxfuel.com/preview/81/102/446/bear-animal-british-columbia-canada.jpg", name: "Animals" },
  { src: "https://wallmantra.com/wp-content/uploads/wmpantff096.jpg", name: "art" },
  { src: "https://c8.alamy.com/comp/EFYXHD/stone-chariot-in-courtyard-of-vittala-temple-at-sunset-overcast-sky-EFYXHD.jpg", name: "tamples stone design" },
  { src: "https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
   { src: "https://www.rspca.org.uk/documents/d/rspca/zebra-finches?imagePreview=1", name: "Bird" },
  { src: "https://media.istockphoto.com/id/606217830/photo/boat-riding-in-a-river.jpg?s=612x612&w=0&k=20&c=sftvdXliMLSjTiAeBEEr9LonNQpXlHTEx5_aUlbsDOI=", name: "Sunset Tree" },
  { src: "https://watermark.lovepik.com/photo/20211121/large/lovepik-night-view-of-the-resort-hotel-picture_500532033.jpg", name: "Hotel View" },
  { src: "https://thumbs.dreamstime.com/b/single-african-zebra-2154305.jpg", name: "Animals" },
  { src: "https://rukminim2.flixcart.com/image/850/1000/kkcwo7k0/poster/r/0/m/extra-large-abstract-painting-print-waterproof-canvas-poster-24-original-imafzq3myuwj45r2.jpeg?q=20&crop=false", name: "art" },
  { src: "https://i.pinimg.com/550x/2f/f6/34/2ff634c6a53777afa5a5aeefde42550a.jpg", name: "tamples stone design" },
  { src: "https://images.pexels.com/photos/3180831/pexels-photo-3180831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2023/08/birds-in-flight-photography-tips-and-tricks-2023.jpg", name: "Bird" },
  { src: "https://media.istockphoto.com/id/606217830/photo/boat-riding-in-a-river.jpg?s=612x612&w=0&k=20&c=sftvdXliMLSjTiAeBEEr9LonNQpXlHTEx5_aUlbsDOI=", name: "Sunset Tree" },
  { src: "https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o=", name: "Hotel View" },
  { src: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg", name: "Animals" },
  { src: "https://femtoarts.in/cdn/shop/products/shutterstock_2060087966-01.jpg?v=1671576022&width=1946", name: "art" },
  { src: "https://www.shutterstock.com/shutterstock/videos/3590879287/thumb/10.jpg?ip=x480", name: "tamples stone design" },
  { src: "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" },
  { src: "https://kj1bcdn.b-cdn.net/media/93772/peacock-1144738_1280.png", name: "Bird" },
  { src: "https://birdtweet.in/images/DSC_7392-Greater%20Flamingos%20lower.jpg", name: "Sunset Tree" },
  { src: "https://www.pineviewhotels.com/assets/img/group/slide-2.jpg", name: "Hotel View" },
  { src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsb2ZmaWNlMTBfcGhvdG9fb2ZfYV9wYW5kYV93aWxkbGlmZV9waG90b2dyYXBoeV93YWxscGFwZV80YmE2YmZiMi1kZWU4LTQ5OWYtOTE1Ny1mOTgzMTA1ODFlMmRfMS5qcGc.jpg", name: "Animals" },
  { src: "https://5.imimg.com/data5/SELLER/Default/2023/8/335367991/LY/MT/IR/195146216/abstract-art-painting-500x500.jpg", name: "art" },
  { src: "https://images.moneycontrol.com/static-mcnews/2023/11/Belur-Channakeshava-Temple-Sculptures-Photo-by-Trimurthypapu-via-Wikimedia-Commons-4-770x433.jpg?impolicy=website&width=770&height=431", name: "tamples stone design" },
  { src: "https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", name: "Gelexy" },
  { src: "https://via.placeholder.com/400/FF0000/FFFFFF?text=Image+8", name: "Red Box" },
  { src: "https://via.placeholder.com/400/FFFF00/FFFFFF?text=Image+9", name: "Yellow Box" },
  { src: "https://via.placeholder.com/400/00FFFF/FFFFFF?text=Image+10", name: "Cyan Box" }

];
const Gallery = () => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationX((prevX) => prevX + 1);
      setRotationY((prevY) => prevY + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Manual image click
  const handleImageClick = (image) => {
    setRotationX(rotationX + 90);
    setRotationY(rotationY + 90);
    setSelectedImage(image);
  };

  // Keyboard controls
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
      case "w":
        setRotationX((prevX) => prevX - 10);
        break;
      case "ArrowDown":
      case "s":
        setRotationX((prevX) => prevX + 10);
        break;
      case "ArrowLeft":
      case "a":
        setRotationY((prevY) => prevY - 10);
        break;
      case "ArrowRight":
      case "d":
        setRotationY((prevY) => prevY + 10);
        break;
      default:
        break;
    }
  };

  // Mouse click controls (Smooth Rotation)
  const handleMouseClick = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 60; // Reduce movement intensity
    const y = (e.clientY / window.innerHeight - 0.5) * 60;
    setRotationX((prevX) => prevX + y);
    setRotationY((prevY) => prevY + x);
  };

  // Search filter logic
  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div className="gallery-container">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search images..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Cube Scene */}
      <div className="scene">
        <div
          className="cube"
          style={{
            transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((faceIndex) => (
            <div key={faceIndex} className={`cube-face face-${faceIndex + 1}`}>
              <div className="image-grid">
                {filteredImages
                  .slice(faceIndex * 2, faceIndex * 2 + 2)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.name}
                      onClick={() => handleImageClick(image.src)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full View" />
        </div>
      )}
    </div>
  );
};

export default Gallery;