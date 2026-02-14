import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";


export default function Home() {
  return (
    <div>
      <div class="container">
        <div class="card">
          <div class="text">

            <p class="h1">Что такое система циклов?</p>
            <p class="h2">Система жизненных циклов — это карта пути сущности через череду состояний. Как человек проходит этапы от детства до старости</p>
            <div class="button">Подробнее</div>
          </div>

          <div class="image">
            <Image
  src="/resourse.png"
  alt="Описание изображения"
  width={687}      // реальная ширина
  height={345}    // реальная высота
/>

          </div>

          <div class="image-mob">
            <Image
  src="/mob.png"
  alt="Описание изображения"
  width={687}      // реальная ширина
  height={345}    // реальная высота
/>

          </div>
        </div>
      </div>

    </div>
  );
}
