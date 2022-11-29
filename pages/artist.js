import Artist from '@/components/Artist';
import Layout from '@/components/Layout';

export default function Home() {
    return (
        <Layout title="Artist">
            <div>
                <Artist />
            </div>
        </Layout>
    )
}