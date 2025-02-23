import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface MenuCardProps {
  srcImg: string
  altImg: string
  text: string
}

const Menucard = ({ srcImg, altImg, text }: MenuCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardContent className="flex flex-col items-center gap-8 py-8">
          <div className="relative h-[80px] w-[80px]">
            <Image src={srcImg} alt={altImg} fill className="object-contain" />
          </div>
          <Button variant={'secondary'} className="rounded-full">
            {text}
          </Button>
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export default Menucard
