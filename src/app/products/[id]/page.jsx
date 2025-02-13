import { products } from '../../data/products';
import Image from 'next/image';

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }))
}

export default async function ProductPage({ params }) {
    const paramID = await params;
    const product = products.find((p) => p.id === paramID.id);

    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    return (
        <div className="container flex justify-center">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Image src={product.image} alt={product.name} width={800} height={400} />
        </div>
    )
}