import Image from 'next/image'
import { notFound } from 'next/navigation'

import { getRestaurantBySlug } from '../data/get-restaurant-by-slug'
import ConsumptionMethodOption from './_components/consumption-method'

interface RestaurantPageProps {
  params: Promise<{ slug: string }>
}

const restaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params
  const restaurant = await getRestaurantBySlug(slug)
  if (!restaurant) {
    return notFound()
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-bold">{restaurant.name}</h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja Bem-Vindo</h3>
        <p className="opacity-70">
          Escolha como prefere aproveitar sua refeição:
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          srcImg="/dine_in.svg"
          altImg="Para comer aqui"
          text="Para comer aqui"
          option="DINE_IN"
          slug={slug}
        />
        <ConsumptionMethodOption
          srcImg="/take_away.svg"
          altImg="Para levar"
          text="Para levar"
          option="TAKEAWAY"
          slug={slug}
        />
      </div>
    </div>
  )
}

export default restaurantPage
