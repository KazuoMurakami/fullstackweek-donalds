interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params
  return (
    <>
      {slug} - {productId}
    </>
  )
}

export default ProductPage
