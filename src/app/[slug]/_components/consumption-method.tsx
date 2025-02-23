import { ConsumptionMethod } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface ConsumptionMethodProps {
  slug: string
  srcImg: string
  altImg: string
  text: string
  option: ConsumptionMethod
}

const ConsumptionMethodOption = ({
  srcImg,
  altImg,
  text,
  option,
  slug,
}: ConsumptionMethodProps) => {
  return (
    <Card className="rounded-lg border border-gray-500">
      <CardHeader>
        <CardContent className="flex flex-col items-center gap-8 py-8">
          <div className="relative h-[80px] w-[80px]">
            <Image src={srcImg} alt={altImg} fill className="object-contain" />
          </div>
          <Button
            variant={'secondary'}
            className="rounded-full border border-gray-500"
            asChild
          >
            <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
              {text}
            </Link>
          </Button>
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export default ConsumptionMethodOption
