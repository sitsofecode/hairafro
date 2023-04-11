import React from 'react'
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from "react-router-dom";


function Article() {
  const navigate = useNavigate();
  return (
    <section className=' lg:px- p-5' >
      <div>
        <button className='m-5' onClick={() => navigate(-1)}><BiArrowBack className='text-3xl' /></button>
      </div>
      <div className='  justify-between  space-x-20  shadow-md   lg:p-10 rounded-lg'>
        <div className='flex space-x-2 items-center justify-center'>
          <img src="/rihanna2.png" alt="" className='h-72 2xl:h-80' />
          <img src=' /rihanna3.jpg' alt='' className='h-72 2xl:h-80' />
          <img src=' /rihanna4.jpg' alt='' className='h-72 2xl:h-80' />
          <img src=' /rihanna-fulani.png' alt='' className='h-72 2xl:h-80' />
        </div>
        <div className='space-y-5 m-10'>
          <h1 className='text-xl font-semibold  '>
            4 coiffures traditionnelles africaines qui ont inspirées des coiffures modernes
          </h1>
          <p className='text-sm'>Véritable symbole de statut social ou encore armes de séduction dans certains pays de l’Afrique de l’Ouest,
            les coiffures africaines ont aujourd’hui évolué. Toutefois, malgré la modernité de ces différentes coiffures,
            elles  ont préservé les traces d’un savoir-faire ancestrales.
            Voici quatre (4) coiffures modernes africaines inspirées de coiffures traditionnelles.</p>
          <h1 className='text-lg'>Les Bantu Knots </h1>
          <p className='text-sm'>Communément appelées « Akotoé » en langue fons du Bénin, les bantu Knots consistent à tortiller des mèches et à les enrouler en nœuds. Cette coiffure trouve ses racines en Afrique subsaharienne, au sein du peuple bantou. D’où le nom « bantu » et « knot » pour nœud en anglais. <br />Les femmes de cette ethnie arboraient cette coiffure au quotidien ou lors des cérémonies traditionnelles.<br />
            Cette une coiffure protectrice, qui protège les pointes de vos cheveux et permet d’obtenir des boucles bien définies une fois retirées. .</p>

          <h1 className='text-lg'>Les tresses au fil </h1>
          <p className='text-sm'>Les tresses au fil sont typiquement originaires de l’Afrique de l’Ouest, plus précisément du Nigéria et aussi du Bénin. Appelée « Irun Kiko » par les yoruba et « Atin » par les fon, il s’agit d’une coiffure consistant à enrouler les cheveux avec des fils. On utilise généralement, des fils de couture, ou encore des fils de nylon.
            Selon certaines femmes, c’est la meilleure des coiffures protectrices, car elle favorise l’assouplissement, et l’étirement des cheveux crépus afin d’en réduire le shrinkage. La version moderne de cette coiffure consiste à utiliser de la laine au lieu des fils de couture, et même ajouter des mèches.</p>

          <h1 className='text-lg'>Les nattes</h1>
          <p className='text-sm'>Les nattes ou braids en anglais sont les coiffures africaines les plus populaires. Elles ont tellement gagné en notoriété qu’elles se sont exportées au-delà des frontières du continent africain. Elles sont par exemple portées par des célébrités afro-américaines comme Alicia Keys ou encore Rihanna.
            Il existe deux principales formes de nattes : les nattes debout et les nattes collées, qui sont des tresses plaquées sur le cuir chevelure.
            La version traditionnelle des nattes consistait simplement en des tresses directement formées avec les cheveux avec peu ou pas d’ajout. Aujourd’hui, ces tresses sont faites avec des mèches et ornées avec plein d’accessoires.
            Toutefois, la modernité n’a rien enlevé du prestige de cette coiffure pourtant simple, mais très séduisante.</p>

          <h1 className='text-lg'>Les dreadlocks  </h1>
          <p className='text-sm'>En dehors du cheveu crépu, les dreadlocks sont l’une des coiffures africaines les plus persécutées.
            Signifiant littéralement « mèche sur la peau », les dreadlocks sont une coiffure caractérisée par des cheveux emmêlés. Encore appelé simplement locks, dreads ou rasta, elle tire son origine de l’Égypte antique et de nombreux autres peuples d’Afrique comme les Akans, les Bantous, les Masaï, les Peuls, les Soninké, les tribus Bono, Oromo, Galla, les prêtres coptes d’Éthiopie, etc. Chez les Wolofs par exemple, les locks étaient portées par les rois et la classe guerrière des Tiedos.
            Les locks sont de nos jours portées naturellement (uniquement les cheveux) ou avec des rajouts de mèches (communément appelées fausses-locks). Elles sont de plus en plus adoptées par les femmes adeptes du mouvement Nappy, et aussi par les hommes. Car la particularité des locks, c’est qu’elles sont unisexes.
            De façon générale, depuis l’avènement du mouvement Nappy, les coiffures africaines sont de plus en plus adoptées par les femmes africaines qui désirent renouer avec le naturel et le traditionnel, le tout avec une touche de modernité.</p>

        </div>
      </div>
    </section >
  )
}

export default Article