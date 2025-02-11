import Link from 'next/link';
import Image from 'next/image';

const page = () => {
    return (
        <div>
            <h1>hello</h1>
            <Link href='/'>Home</Link>
            <Image
            src='https://ichef.bbci.co.uk/ace/standard/873/cpsprodpb/598a/live/75307200-ae2b-11ee-b4f2-5db09c62f717.jpg'
            alt='Next.js Logo'
            width={180}
            height={38}
            ></Image>
        </div>
    )
}

export default page