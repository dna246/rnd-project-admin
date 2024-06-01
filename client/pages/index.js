import Layout from "@/components/Layout";
import {useSession} from "next-auth/react";

export default function Home() {
    const {data: session} = useSession()

    if (!session) return;

    return <Layout>
        <div className="text-blue-900 flex justify-between">
            <h2>
                Hello, <b>{session?.user?.name}</b>
            </h2>
            <div className="rounded-xl overflow-hidden">
                <img src={session?.user?.image} alt="" className="w-12 h-12 rounded-full"/>
            </div>
        </div>
    </Layout>
}
